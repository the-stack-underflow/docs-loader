import type { ErrorResponse, SuccessResponse } from "@underflow/core/src/lib/Extension/ExtensionContext";
import type { APIContext } from "astro";
import { shared } from "../lib/shared";

export const post = async ({params, request}: APIContext<Record<string, any>>, success: SuccessResponse, error: ErrorResponse) => {
	const body = await request.json();

	if (!body.hasOwnProperty("install") || !body.name) {
		return error(["Missing required parameters 'name' and 'install'."])
	}

	if (body.install == true) {
		// Try to install the package
		shared.context.addToLockfile((data) => {
			data.installed[body.name] = {
				version: "",
				remote: ""
			}

			return data;
		})
	} else {
		// Try to remove the package
		shared.context.deleteFromLockfile((data) => {
			delete data.installed[body.name]
			return data;
		});
	}

	return success({})
}