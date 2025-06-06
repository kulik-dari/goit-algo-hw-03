import type { BuildManifest } from '../get-page-files';
export declare function getRequiredScripts(buildManifest: BuildManifest, assetPrefix: string, SRIManifest: undefined | Record<string, string>, qs: string, nonce: string | undefined): [() => void, string | {
    src: string;
    integrity: string;
}];
