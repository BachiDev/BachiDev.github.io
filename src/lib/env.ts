import { profile } from "@/data/profile";

// The Web3Forms access key is PUBLIC by design — see
// https://docs.web3forms.com/getting-started/faq ("think of it as an alias
// to your email"). It lives in profile.ts next to the email address; the env
// var below is only an optional per-environment override.

export const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || profile.web3FormsKey;

export const isContactFormEnabled = web3FormsKey.length > 0;
