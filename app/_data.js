
export const siteName = "Wallet User Guide";
export const official = "https://www.safepal.com/";
export function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const raw = explicit || (vercel ? `https://${vercel}` : "http://localhost:3000");
  return raw.replace(/\/$/, "");
}
export const pages = [
["/safepal-login/","SafePal Login"],
["/safepal-app/","SafePal App"],
["/safepal-download/","SafePal Download"],
["/safepal-extension/","SafePal Extension"],
["/safepal-not-working/","SafePal Not Working"],
["/safepal-app-not-working/","SafePal App Not Working"],
["/safepal-balance-not-showing/","SafePal Balance Not Showing"],
["/safepal-transaction-pending/","SafePal Transaction Pending"],
["/safepal-connection-problem/","SafePal Connection Problem"],
["/safepal-setup/","SafePal Setup"],
["/safepal-backup/","SafePal Backup"],
["/safepal-recovery/","SafePal Recovery"],
["/safepal-firmware-update/","SafePal Firmware Update"],
["/safepal-support/","SafePal Support"],
["/safepal-add-token/","SafePal Add Token"]
];
