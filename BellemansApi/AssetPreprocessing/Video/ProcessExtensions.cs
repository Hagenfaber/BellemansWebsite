using System.Diagnostics;

namespace AssetPreprocessing.Video;

public static class ProcessExtensions
{
    public static Task WaitForExitAsync(this Process process)
    {
        return Task.Run(() => process.WaitForExit());
    }
}