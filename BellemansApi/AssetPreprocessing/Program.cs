using AssetPreprocessing.Video;

namespace AssetPreprocessing;

class Program
{
    static async Task Main(string[] args)
    {
        try
        {
            var parser = new CommandLineParser(args);
            var ffmpegPath = parser.GetFFmpegPath();
            var inputPath = parser.GetInputPath();
            var outputPath = parser.GetOutputPath();
            var options = parser.GetCompressionOptions();
            var isDirectory = parser.IsDirectoryProcessing();
            
            var compressor = new VideoCompressor(ffmpegPath);

            if (isDirectory)
            {
                await ProcessDirectoryAsync(compressor, inputPath, outputPath, options);
            }
            else
            {
                await ProcessFileAsync(compressor, inputPath, outputPath, options);
            }

        }
        catch (Exception ex)
        {
            Console.WriteLine($"{ex.Message}");
            ShowHelp();
            return;
        }
    }

    static async Task ProcessDirectoryAsync(VideoCompressor compressor, string inputDir, string outputDir, CompressionOptions options)
    {
        if (!Directory.Exists(inputDir))
            throw new DirectoryNotFoundException($"Input directory not found: {inputDir}");

        if (!Directory.Exists(outputDir))
            Directory.CreateDirectory(outputDir);

        var files = Directory.GetFiles(inputDir, "*.mp4", SearchOption.AllDirectories);
        var totalFiles = files.Length;

        for (int i = 0; i < files.Length; i++)
        {
            var inputFile = files[i];
            var relativePath = Path.GetFileName(inputFile);
            var outputFile = Path.Combine(outputDir, relativePath);
            var outputDirPath = Path.GetDirectoryName(outputFile);

            if (!Directory.Exists(outputDirPath))
                Directory.CreateDirectory(outputDirPath);

            Console.WriteLine($"Processing {i + 1}/{totalFiles}: {inputFile}");
            await compressor.CompressVideoAsync(inputFile, outputFile, options);
        }

        Console.WriteLine($"Completed processing {totalFiles} files");
    }

    static async Task ProcessFileAsync(VideoCompressor compressor, string inputPath, string outputPath, CompressionOptions options)
    {
        Console.WriteLine($"Processing: {inputPath}");
        await compressor.CompressVideoAsync(inputPath, outputPath, options);
        Console.WriteLine("Completed processing");
    }

    static void ShowHelp()
    {
        Console.WriteLine(@"
Usage: dotnet run [options]

Options:
  --ffmpeg <path>      Path to ffmpeg.exe
  --input <path>       Input file or directory
  --output <path>      Output file or directory
  --height <pixels>    Output height in pixels (default: 360)
  --preset <value>     Encoding preset (ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow)
  --bitrate <kbps>     Target bitrate in kbps (default: 500)
  --directory         Process input as directory (optional)

Examples:
  Single file:
    dotnet run --ffmpeg C:\ffmpeg\bin\ffmpeg.exe --input input.mp4 --output output.mp4

  Directory:
    dotnet run --ffmpeg C:\ffmpeg\bin\ffmpeg.exe --input C:\Input\Videos --output C:\Output\Videos --directory
");
    }
}