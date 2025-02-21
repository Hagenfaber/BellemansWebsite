using AssetPreprocessing.Video;

namespace AssetPreprocessing;

public class Program
{
    static async Task Main(string[] args)
    {
        try
        {
            // Parse command line arguments
            var parser = new CommandLineParser(args);
            var ffmpegPath = parser.GetFFmpegPath();
            var inputPath = parser.GetInputPath();
            var outputPath = parser.GetOutputPath();
            var options = parser.GetCompressionOptions();

            // Create compressor instance
            var compressor = new VideoCompressor(ffmpegPath);

            Console.WriteLine($"Compressing {inputPath} to {outputPath}...");
            await compressor.CompressVideoAsync(inputPath, outputPath, options);
            Console.WriteLine($"Compression complete: {outputPath}");

        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            ShowHelp();
            return;
        }
    }
    
    static void ShowHelp()
    {
        Console.WriteLine(@"
Usage: dotnet run [options]

Options:
  --ffmpeg <path>      Path to ffmpeg.exe
  --input <path>       Input video file
  --output <path>      Output video file
  --height <pixels>    Output height in pixels (default: 360)
  --preset <value>     Encoding preset (ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow)
  --bitrate <kbps>     Target bitrate in kbps (default: 500)

Example:
  dotnet run --ffmpeg C:\ffmpeg\bin\ffmpeg.exe --input input.mp4 --output output.mp4 --height 720 --preset slow --bitrate 1000
");
    }

    static async Task CompressVideoExample(VideoCompressor compressor, CompressionOptions options, string inputPath, string outputPath, int? height = null)
    {
        if (height.HasValue)
            options.Height = height.Value;

        Console.WriteLine($"Compressing {inputPath} to {outputPath}...");
        await compressor.CompressVideoAsync(inputPath, outputPath, options);
        Console.WriteLine($"Compression complete: {outputPath}");
    }
}