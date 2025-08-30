import { ApiErrorResult } from "@/lib/types";
import { toast } from "sonner";
import { ErrorWrapper } from "@/endpoints/bellemansFetcher";

export const useErrorToast = (error: ErrorWrapper<ApiErrorResult>) => {
  // @ts-ignore
  error = error["stack"];
  if (typeof error == "object") {
    const keys = Object.keys(error);
    // @ts-ignore
    const message = keys.includes("title") ? error.title : "An error occurred";
    // @ts-ignore
    const details = keys.includes("detail") ? error.detail : "reason unknown";

    // Show toast
    toast(message, {
      description: details
    })
  } else {
    // Show toast
    toast("An error occurred")
  }
}
