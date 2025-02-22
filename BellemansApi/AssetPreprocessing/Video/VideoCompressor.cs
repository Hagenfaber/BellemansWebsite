using System.Diagnostics;

namespace AssetPreprocessing.Video;

// REQUIRES FFMPEG
public class VideoCompressor
{
    private readonly string _ffmpegPath;
    private readonly string _tempDirectory;

    public VideoCompressor(string ffmpegPath, string tempDirectory = null)
    {
        _ffmpegPath = ffmpegPath;
        _tempDirectory = tempDirectory ?? Path.GetTempPath();
    }

    public async Task CompressVideoAsync(string inputPath, string outputPath, CompressionOptions options)
    {
        if (!File.Exists(inputPath))
            throw new FileNotFoundException("Input file not found", inputPath);

        // First pass: Analyze the video content
        var firstPassArgs = BuildFirstPassArgs(inputPath, options);
        await ExecuteFFmpegAsync(firstPassArgs);

        // Second pass: Optimize encoding based on analysis
        var secondPassArgs = BuildSecondPassArgs(inputPath, outputPath, options);
        await ExecuteFFmpegAsync(secondPassArgs);
    }

    private string BuildFirstPassArgs(string inputPath, CompressionOptions options)
    {
        return $"-y -i {inputPath} -vf scale=-2:{options.Height} -c:v libx264 -preset {options.Preset} -b:v {options.Bitrate}k -pass 1 -an -f null /dev/null";
    }

    private string BuildSecondPassArgs(string inputPath, string outputPath, CompressionOptions options)
    {
        return $"-y -i {inputPath} -vf scale=-2:{options.Height} -c:v libx264 -preset {options.Preset} -b:v {options.Bitrate}k -pass 2 -an -movflags +faststart {outputPath}";
    }

    private async Task ExecuteFFmpegAsync(string args)
    {
        using var process = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = _ffmpegPath,
                Arguments = args,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            }
        };

        process.OutputDataReceived += (sender, data) => Console.WriteLine(data.Data);
        process.ErrorDataReceived += (sender, data) => Console.WriteLine($"Error: {data.Data}");

        process.Start();
        process.BeginOutputReadLine();
        process.BeginErrorReadLine();

        await process.WaitForExitAsync();
    }
}