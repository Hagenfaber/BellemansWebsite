namespace AssetPreprocessing.Video;

public class CompressionOptions
{
    public int Height { get; set; } = 360;
    public string Preset { get; set; } = "medium";
    public int Bitrate { get; set; } = 500;
}