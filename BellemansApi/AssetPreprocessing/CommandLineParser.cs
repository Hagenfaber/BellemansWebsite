using AssetPreprocessing.Video;

namespace AssetPreprocessing;

public class CommandLineParser
{
    private readonly string[] _args;

    public CommandLineParser(string[] args)
    {
        _args = args;
    }

    public string GetFFmpegPath()
    {
        var path = GetOptionValue("--ffmpeg");
        if (string.IsNullOrEmpty(path))
            throw new FileNotFoundException("FFmpeg path not provided");
        return path;
    }

    public string GetInputPath()
    {
        var path = GetOptionValue("--input");
        if (string.IsNullOrEmpty(path))
            throw new FileNotFoundException("Input path not specified");
        return path;
    }

    public string GetOutputPath()
    {
        var path = GetOptionValue("--output");
        if (string.IsNullOrEmpty(path))
            throw new FileNotFoundException("Output path not specified");
        return path;
    }

    public bool IsDirectoryProcessing()
    {
        return GetOptionValue("--directory") != null;
    }

    public CompressionOptions GetCompressionOptions()
    {
        return new CompressionOptions
        {
            Height = GetIntOption("--height", 360),
            Preset = GetOptionValue("--preset", "medium"),
            Bitrate = GetIntOption("--bitrate", 500)
        };
    }

    private string GetOptionValue(string option, string defaultValue = null)
    {
        var index = Array.IndexOf(_args, option);
        if (index == -1 || index + 1 >= _args.Length)
            return defaultValue;
        return _args[index + 1];
    }

    private int GetIntOption(string option, int defaultValue)
    {
        var value = GetOptionValue(option);
        if (int.TryParse(value, out int result))
            return result;
        return defaultValue;
    }
}