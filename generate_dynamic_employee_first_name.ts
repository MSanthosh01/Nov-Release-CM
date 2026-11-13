/**
 * @walnut_method
 * name: Generate Dynamic Employee First Name
 * description: Generate a unique alphabetic employee first name for this execution and store it in $[generatedEmployeeFirstName].
 * actionType: custom_generate_employee_first_name
 * context: shared
 * needsLocator: false
 * category: Data Generation
 */
import type { WalnutSharedContext } from "@walnut/custom-methods-sdk";

export async function generateDynamicEmployeeFirstName(ctx: WalnutSharedContext): Promise<void> {
  let timestamp = Date.now();
  let encodedTimestamp = "";
  while (timestamp > 0) {
    encodedTimestamp = String.fromCharCode(65 + (timestamp % 26)) + encodedTimestamp;
    timestamp = Math.floor(timestamp / 26);
  }

  const randomLetters = Array.from({ length: 6 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  ).join("");
  const firstName = `QA${encodedTimestamp}${randomLetters}`;
  ctx.setVariable("generatedEmployeeFirstName", firstName);
  ctx.log(`Generated dynamic employee first name: ${firstName}`);
}
