/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace firebaseappcheck_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Firebase App Check API
     *
     * Firebase App Check works alongside other Firebase services to help protect your backend resources from abuse, such as billing fraud or phishing.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const firebaseappcheck = google.firebaseappcheck('v1');
     * ```
     */
    export class Firebaseappcheck {
        context: APIRequestContext;
        jwks: Resource$Jwks;
        oauthClients: Resource$Oauthclients;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).
     */
    export interface Schema$GoogleFirebaseAppcheckV1AppAttestConfig {
        /**
         * Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ```
         */
        name?: string | null;
        /**
         * Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
         */
        tokenTtl?: string | null;
    }
    /**
     * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
     */
    export interface Schema$GoogleFirebaseAppcheckV1AppCheckToken {
        /**
         * The App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. These tokens can also be [verified by your own custom backends](https://firebase.google.com/docs/app-check/custom-resource-backend) using the Firebase Admin SDK.
         */
        token?: string | null;
        /**
         * The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.
         */
        ttl?: string | null;
    }
    /**
     * Response message for the BatchGetAppAttestConfigs method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse {
        /**
         * AppAttestConfigs retrieved.
         */
        configs?: Schema$GoogleFirebaseAppcheckV1AppAttestConfig[];
    }
    /**
     * Response message for the BatchGetDeviceCheckConfigs method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse {
        /**
         * DeviceCheckConfigs retrieved.
         */
        configs?: Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig[];
    }
    /**
     * Response message for the BatchGetPlayIntegrityConfigs method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse {
        /**
         * PlayIntegrityConfigs retrieved.
         */
        configs?: Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig[];
    }
    /**
     * Response message for the BatchGetRecaptchaEnterpriseConfigs method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse {
        /**
         * RecaptchaEnterpriseConfigs retrieved.
         */
        configs?: Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig[];
    }
    /**
     * Response message for the BatchGetRecaptchaV3Configs method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse {
        /**
         * RecaptchaV3Configs retrieved.
         */
        configs?: Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config[];
    }
    /**
     * Response message for the BatchGetSafetyNetConfigs method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse {
        /**
         * SafetyNetConfigs retrieved.
         */
        configs?: Schema$GoogleFirebaseAppcheckV1SafetyNetConfig[];
    }
    /**
     * Request message for the BatchUpdateServices method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesRequest {
        /**
         * Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch.
         */
        requests?: Schema$GoogleFirebaseAppcheckV1UpdateServiceRequest[];
        /**
         * Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If the `update_mask` field is set in both this request and any of the UpdateServiceRequest messages, they must match or the entire batch fails and no updates will be committed.
         */
        updateMask?: string | null;
    }
    /**
     * Response message for the BatchUpdateServices method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse {
        /**
         * Service objects after the updates have been applied.
         */
        services?: Schema$GoogleFirebaseAppcheckV1Service[];
    }
    /**
     * A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services.
     */
    export interface Schema$GoogleFirebaseAppcheckV1DebugToken {
        /**
         * Required. A human readable display name used to identify this debug token.
         */
        displayName?: string | null;
        /**
         * Required. The relative resource name of the debug token, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
         */
        name?: string | null;
        /**
         * Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response.
         */
        token?: string | null;
        /**
         * Output only. Timestamp when this debug token was most recently updated.
         */
        updateTime?: string | null;
    }
    /**
     * An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).
     */
    export interface Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig {
        /**
         * Required. The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.
         */
        keyId?: string | null;
        /**
         * Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ```
         */
        name?: string | null;
        /**
         * Required. Input only. The contents of the private key (`.p8`) file associated with the key specified by `key_id`. For security reasons, this field will never be populated in any response.
         */
        privateKey?: string | null;
        /**
         * Output only. Whether the `private_key` field was previously set. Since we will never return the `private_key` field, this field is the only way to find out whether it was previously set.
         */
        privateKeySet?: boolean | null;
        /**
         * Specifies the duration for which App Check tokens exchanged from DeviceCheck tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
         */
        tokenTtl?: string | null;
    }
    /**
     * Request message for the ExchangeAppAttestAssertion method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest {
        /**
         * Required. The artifact returned by a previous call to ExchangeAppAttestAttestation.
         */
        artifact?: string | null;
        /**
         * Required. The CBOR-encoded assertion returned by the client-side App Attest API.
         */
        assertion?: string | null;
        /**
         * Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.
         */
        challenge?: string | null;
        /**
         * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
         */
        limitedUse?: boolean | null;
    }
    /**
     * Request message for the ExchangeAppAttestAttestation method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest {
        /**
         * Required. The App Attest statement returned by the client-side App Attest API. This is a base64url encoded CBOR object in the JSON response.
         */
        attestationStatement?: string | null;
        /**
         * Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.
         */
        challenge?: string | null;
        /**
         * Required. The key ID generated by App Attest for the client app.
         */
        keyId?: string | null;
        /**
         * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
         */
        limitedUse?: boolean | null;
    }
    /**
     * Response message for the ExchangeAppAttestAttestation method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse {
        /**
         * Encapsulates an App Check token.
         */
        appCheckToken?: Schema$GoogleFirebaseAppcheckV1AppCheckToken;
        /**
         * An artifact that can be used in future calls to ExchangeAppAttestAssertion.
         */
        artifact?: string | null;
    }
    /**
     * Request message for the ExchangeCustomToken method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest {
        /**
         * Required. A custom token signed using your project's Admin SDK service account credentials.
         */
        customToken?: string | null;
        /**
         * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
         */
        limitedUse?: boolean | null;
    }
    /**
     * Request message for the ExchangeDebugToken method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest {
        /**
         * Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken.
         */
        debugToken?: string | null;
        /**
         * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
         */
        limitedUse?: boolean | null;
    }
    /**
     * Request message for the ExchangeDeviceCheckToken method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest {
        /**
         * Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object.
         */
        deviceToken?: string | null;
        /**
         * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
         */
        limitedUse?: boolean | null;
    }
    /**
     * Request message for the ExchangePlayIntegrityToken method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest {
        /**
         * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
         */
        limitedUse?: boolean | null;
        /**
         * Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app.
         */
        playIntegrityToken?: string | null;
    }
    /**
     * Request message for the ExchangeRecaptchaEnterpriseToken method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest {
        /**
         * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
         */
        limitedUse?: boolean | null;
        /**
         * Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages).
         */
        recaptchaEnterpriseToken?: string | null;
    }
    /**
     * Request message for the ExchangeRecaptchaV3Token method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest {
        /**
         * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
         */
        limitedUse?: boolean | null;
        /**
         * Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3).
         */
        recaptchaV3Token?: string | null;
    }
    /**
     * Request message for the ExchangeSafetyNetToken method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest {
        /**
         * Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app.
         */
        safetyNetToken?: string | null;
    }
    /**
     * Request message for the GenerateAppAttestChallenge method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest {
    }
    /**
     * Response message for the GenerateAppAttestChallenge method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse {
        /**
         * A one-time use challenge for the client to pass to the App Attest API.
         */
        challenge?: string | null;
        /**
         * The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.
         */
        ttl?: string | null;
    }
    /**
     * Request message for the GeneratePlayIntegrityChallenge method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest {
    }
    /**
     * Response message for the GeneratePlayIntegrityChallenge method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse {
        /**
         * A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API.
         */
        challenge?: string | null;
        /**
         * The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.
         */
        ttl?: string | null;
    }
    /**
     * Response message for the ListDebugTokens method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse {
        /**
         * The DebugTokens retrieved.
         */
        debugTokens?: Schema$GoogleFirebaseAppcheckV1DebugToken[];
        /**
         * If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for the ListServices method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1ListServicesResponse {
        /**
         * If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
        /**
         * The Services retrieved.
         */
        services?: Schema$GoogleFirebaseAppcheckV1Service[];
    }
    /**
     * An app's Play Integrity configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangePlayIntegrityToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by the Play Integrity API; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create).
     */
    export interface Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig {
        /**
         * Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ```
         */
        name?: string | null;
        /**
         * Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
         */
        tokenTtl?: string | null;
    }
    /**
     * A JWK as specified by [section 4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4) and [section 6.3.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1).
     */
    export interface Schema$GoogleFirebaseAppcheckV1PublicJwk {
        /**
         * See [section 4.4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.4).
         */
        alg?: string | null;
        /**
         * See [section 6.3.1.2 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.2).
         */
        e?: string | null;
        /**
         * See [section 4.5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.5).
         */
        kid?: string | null;
        /**
         * See [section 4.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.1).
         */
        kty?: string | null;
        /**
         * See [section 6.3.1.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.1).
         */
        n?: string | null;
        /**
         * See [section 4.2 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.2).
         */
        use?: string | null;
    }
    /**
     * The currently active set of public keys that can be used to verify App Check tokens. This object is a JWK set as specified by [section 5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). For security, the response **must not** be cached for longer than six hours.
     */
    export interface Schema$GoogleFirebaseAppcheckV1PublicJwkSet {
        /**
         * The set of public keys. See [section 5.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5).
         */
        keys?: Schema$GoogleFirebaseAppcheckV1PublicJwk[];
    }
    /**
     * An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
     */
    export interface Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig {
        /**
         * Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ```
         */
        name?: string | null;
        /**
         * The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the `site_secret` (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.
         */
        siteKey?: string | null;
        /**
         * Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
         */
        tokenTtl?: string | null;
    }
    /**
     * An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
     */
    export interface Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config {
        /**
         * Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ```
         */
        name?: string | null;
        /**
         * Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response.
         */
        siteSecret?: string | null;
        /**
         * Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set.
         */
        siteSecretSet?: boolean | null;
        /**
         * Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive.
         */
        tokenTtl?: string | null;
    }
    /**
     * An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.androidApps.sha/create).
     */
    export interface Schema$GoogleFirebaseAppcheckV1SafetyNetConfig {
        /**
         * Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ```
         */
        name?: string | null;
        /**
         * Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
         */
        tokenTtl?: string | null;
    }
    /**
     * The enforcement configuration for a Firebase service supported by App Check.
     */
    export interface Schema$GoogleFirebaseAppcheckV1Service {
        /**
         * Required. The App Check enforcement mode for this service.
         */
        enforcementMode?: string | null;
        /**
         * Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)
         */
        name?: string | null;
    }
    /**
     * Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
     */
    export interface Schema$GoogleFirebaseAppcheckV1UpdateServiceRequest {
        /**
         * Required. The Service to update. The Service's `name` field is used to identify the Service to be updated, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)
         */
        service?: Schema$GoogleFirebaseAppcheckV1Service;
        /**
         * Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.
         */
        updateMask?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$GoogleProtobufEmpty {
    }
    export class Resource$Jwks {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Returns a public JWK set as specified by [RFC 7517](https://tools.ietf.org/html/rfc7517) that can be used to verify App Check tokens. Exactly one of the public keys in the returned set will successfully validate any App Check token that is currently valid.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Jwks$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Jwks$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>;
        get(params: Params$Resource$Jwks$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Jwks$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>): void;
        get(params: Params$Resource$Jwks$Get, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>): void;
    }
    export interface Params$Resource$Jwks$Get extends StandardParameters {
        /**
         * Required. The relative resource name to the public JWK set. Must always be exactly the string `jwks`.
         */
        name?: string;
    }
    export class Resource$Oauthclients {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeAppAttestAssertion(params: Params$Resource$Oauthclients$Exchangeappattestassertion, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeAppAttestAssertion(params?: Params$Resource$Oauthclients$Exchangeappattestassertion, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangeAppAttestAssertion(params: Params$Resource$Oauthclients$Exchangeappattestassertion, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeAppAttestAssertion(params: Params$Resource$Oauthclients$Exchangeappattestassertion, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeAppAttestAssertion(params: Params$Resource$Oauthclients$Exchangeappattestassertion, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeAppAttestAssertion(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeAppAttestAttestation(params: Params$Resource$Oauthclients$Exchangeappattestattestation, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeAppAttestAttestation(params?: Params$Resource$Oauthclients$Exchangeappattestattestation, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>;
        exchangeAppAttestAttestation(params: Params$Resource$Oauthclients$Exchangeappattestattestation, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeAppAttestAttestation(params: Params$Resource$Oauthclients$Exchangeappattestattestation, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>): void;
        exchangeAppAttestAttestation(params: Params$Resource$Oauthclients$Exchangeappattestattestation, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>): void;
        exchangeAppAttestAttestation(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>): void;
        /**
         * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeDebugToken(params: Params$Resource$Oauthclients$Exchangedebugtoken, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeDebugToken(params?: Params$Resource$Oauthclients$Exchangedebugtoken, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangeDebugToken(params: Params$Resource$Oauthclients$Exchangedebugtoken, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeDebugToken(params: Params$Resource$Oauthclients$Exchangedebugtoken, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeDebugToken(params: Params$Resource$Oauthclients$Exchangedebugtoken, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeDebugToken(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        generateAppAttestChallenge(params: Params$Resource$Oauthclients$Generateappattestchallenge, options: StreamMethodOptions): GaxiosPromise<Readable>;
        generateAppAttestChallenge(params?: Params$Resource$Oauthclients$Generateappattestchallenge, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>;
        generateAppAttestChallenge(params: Params$Resource$Oauthclients$Generateappattestchallenge, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        generateAppAttestChallenge(params: Params$Resource$Oauthclients$Generateappattestchallenge, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>): void;
        generateAppAttestChallenge(params: Params$Resource$Oauthclients$Generateappattestchallenge, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>): void;
        generateAppAttestChallenge(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>): void;
    }
    export interface Params$Resource$Oauthclients$Exchangeappattestassertion extends StandardParameters {
        /**
         * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest;
    }
    export interface Params$Resource$Oauthclients$Exchangeappattestattestation extends StandardParameters {
        /**
         * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest;
    }
    export interface Params$Resource$Oauthclients$Exchangedebugtoken extends StandardParameters {
        /**
         * Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest;
    }
    export interface Params$Resource$Oauthclients$Generateappattestchallenge extends StandardParameters {
        /**
         * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        apps: Resource$Projects$Apps;
        services: Resource$Projects$Services;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Apps {
        context: APIRequestContext;
        appAttestConfig: Resource$Projects$Apps$Appattestconfig;
        debugTokens: Resource$Projects$Apps$Debugtokens;
        deviceCheckConfig: Resource$Projects$Apps$Devicecheckconfig;
        playIntegrityConfig: Resource$Projects$Apps$Playintegrityconfig;
        recaptchaEnterpriseConfig: Resource$Projects$Apps$Recaptchaenterpriseconfig;
        recaptchaV3Config: Resource$Projects$Apps$Recaptchav3config;
        safetyNetConfig: Resource$Projects$Apps$Safetynetconfig;
        constructor(context: APIRequestContext);
        /**
         * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeAppAttestAssertion(params: Params$Resource$Projects$Apps$Exchangeappattestassertion, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeAppAttestAssertion(params?: Params$Resource$Projects$Apps$Exchangeappattestassertion, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangeAppAttestAssertion(params: Params$Resource$Projects$Apps$Exchangeappattestassertion, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeAppAttestAssertion(params: Params$Resource$Projects$Apps$Exchangeappattestassertion, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeAppAttestAssertion(params: Params$Resource$Projects$Apps$Exchangeappattestassertion, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeAppAttestAssertion(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeAppAttestAttestation(params: Params$Resource$Projects$Apps$Exchangeappattestattestation, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeAppAttestAttestation(params?: Params$Resource$Projects$Apps$Exchangeappattestattestation, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>;
        exchangeAppAttestAttestation(params: Params$Resource$Projects$Apps$Exchangeappattestattestation, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeAppAttestAttestation(params: Params$Resource$Projects$Apps$Exchangeappattestattestation, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>): void;
        exchangeAppAttestAttestation(params: Params$Resource$Projects$Apps$Exchangeappattestattestation, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>): void;
        exchangeAppAttestAttestation(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>): void;
        /**
         * Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeCustomToken(params: Params$Resource$Projects$Apps$Exchangecustomtoken, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeCustomToken(params?: Params$Resource$Projects$Apps$Exchangecustomtoken, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangeCustomToken(params: Params$Resource$Projects$Apps$Exchangecustomtoken, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeCustomToken(params: Params$Resource$Projects$Apps$Exchangecustomtoken, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeCustomToken(params: Params$Resource$Projects$Apps$Exchangecustomtoken, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeCustomToken(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeDebugToken(params: Params$Resource$Projects$Apps$Exchangedebugtoken, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeDebugToken(params?: Params$Resource$Projects$Apps$Exchangedebugtoken, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangeDebugToken(params: Params$Resource$Projects$Apps$Exchangedebugtoken, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeDebugToken(params: Params$Resource$Projects$Apps$Exchangedebugtoken, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeDebugToken(params: Params$Resource$Projects$Apps$Exchangedebugtoken, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeDebugToken(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeDeviceCheckToken(params: Params$Resource$Projects$Apps$Exchangedevicechecktoken, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeDeviceCheckToken(params?: Params$Resource$Projects$Apps$Exchangedevicechecktoken, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangeDeviceCheckToken(params: Params$Resource$Projects$Apps$Exchangedevicechecktoken, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeDeviceCheckToken(params: Params$Resource$Projects$Apps$Exchangedevicechecktoken, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeDeviceCheckToken(params: Params$Resource$Projects$Apps$Exchangedevicechecktoken, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeDeviceCheckToken(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangePlayIntegrityToken(params: Params$Resource$Projects$Apps$Exchangeplayintegritytoken, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangePlayIntegrityToken(params?: Params$Resource$Projects$Apps$Exchangeplayintegritytoken, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangePlayIntegrityToken(params: Params$Resource$Projects$Apps$Exchangeplayintegritytoken, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangePlayIntegrityToken(params: Params$Resource$Projects$Apps$Exchangeplayintegritytoken, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangePlayIntegrityToken(params: Params$Resource$Projects$Apps$Exchangeplayintegritytoken, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangePlayIntegrityToken(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeRecaptchaEnterpriseToken(params: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeRecaptchaEnterpriseToken(params?: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangeRecaptchaEnterpriseToken(params: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeRecaptchaEnterpriseToken(params: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeRecaptchaEnterpriseToken(params: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeRecaptchaEnterpriseToken(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeRecaptchaV3Token(params: Params$Resource$Projects$Apps$Exchangerecaptchav3token, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeRecaptchaV3Token(params?: Params$Resource$Projects$Apps$Exchangerecaptchav3token, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangeRecaptchaV3Token(params: Params$Resource$Projects$Apps$Exchangerecaptchav3token, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeRecaptchaV3Token(params: Params$Resource$Projects$Apps$Exchangerecaptchav3token, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeRecaptchaV3Token(params: Params$Resource$Projects$Apps$Exchangerecaptchav3token, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeRecaptchaV3Token(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        exchangeSafetyNetToken(params: Params$Resource$Projects$Apps$Exchangesafetynettoken, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exchangeSafetyNetToken(params?: Params$Resource$Projects$Apps$Exchangesafetynettoken, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppCheckToken>;
        exchangeSafetyNetToken(params: Params$Resource$Projects$Apps$Exchangesafetynettoken, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exchangeSafetyNetToken(params: Params$Resource$Projects$Apps$Exchangesafetynettoken, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeSafetyNetToken(params: Params$Resource$Projects$Apps$Exchangesafetynettoken, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        exchangeSafetyNetToken(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>): void;
        /**
         * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        generateAppAttestChallenge(params: Params$Resource$Projects$Apps$Generateappattestchallenge, options: StreamMethodOptions): GaxiosPromise<Readable>;
        generateAppAttestChallenge(params?: Params$Resource$Projects$Apps$Generateappattestchallenge, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>;
        generateAppAttestChallenge(params: Params$Resource$Projects$Apps$Generateappattestchallenge, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        generateAppAttestChallenge(params: Params$Resource$Projects$Apps$Generateappattestchallenge, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>): void;
        generateAppAttestChallenge(params: Params$Resource$Projects$Apps$Generateappattestchallenge, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>): void;
        generateAppAttestChallenge(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>): void;
        /**
         * Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        generatePlayIntegrityChallenge(params: Params$Resource$Projects$Apps$Generateplayintegritychallenge, options: StreamMethodOptions): GaxiosPromise<Readable>;
        generatePlayIntegrityChallenge(params?: Params$Resource$Projects$Apps$Generateplayintegritychallenge, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>;
        generatePlayIntegrityChallenge(params: Params$Resource$Projects$Apps$Generateplayintegritychallenge, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        generatePlayIntegrityChallenge(params: Params$Resource$Projects$Apps$Generateplayintegritychallenge, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>): void;
        generatePlayIntegrityChallenge(params: Params$Resource$Projects$Apps$Generateplayintegritychallenge, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>): void;
        generatePlayIntegrityChallenge(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>): void;
    }
    export interface Params$Resource$Projects$Apps$Exchangeappattestassertion extends StandardParameters {
        /**
         * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest;
    }
    export interface Params$Resource$Projects$Apps$Exchangeappattestattestation extends StandardParameters {
        /**
         * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest;
    }
    export interface Params$Resource$Projects$Apps$Exchangecustomtoken extends StandardParameters {
        /**
         * Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest;
    }
    export interface Params$Resource$Projects$Apps$Exchangedebugtoken extends StandardParameters {
        /**
         * Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest;
    }
    export interface Params$Resource$Projects$Apps$Exchangedevicechecktoken extends StandardParameters {
        /**
         * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest;
    }
    export interface Params$Resource$Projects$Apps$Exchangeplayintegritytoken extends StandardParameters {
        /**
         * Required. The relative resource name of the Android app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest;
    }
    export interface Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken extends StandardParameters {
        /**
         * Required. The relative resource name of the web app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest;
    }
    export interface Params$Resource$Projects$Apps$Exchangerecaptchav3token extends StandardParameters {
        /**
         * Required. The relative resource name of the web app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest;
    }
    export interface Params$Resource$Projects$Apps$Exchangesafetynettoken extends StandardParameters {
        /**
         * Required. The relative resource name of the Android app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest;
    }
    export interface Params$Resource$Projects$Apps$Generateappattestchallenge extends StandardParameters {
        /**
         * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest;
    }
    export interface Params$Resource$Projects$Apps$Generateplayintegritychallenge extends StandardParameters {
        /**
         * Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
         */
        app?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest;
    }
    export class Resource$Projects$Apps$Appattestconfig {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Atomically gets the AppAttestConfigs for the specified list of apps.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchGet(params: Params$Resource$Projects$Apps$Appattestconfig$Batchget, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchGet(params?: Params$Resource$Projects$Apps$Appattestconfig$Batchget, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>;
        batchGet(params: Params$Resource$Projects$Apps$Appattestconfig$Batchget, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchGet(params: Params$Resource$Projects$Apps$Appattestconfig$Batchget, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>): void;
        batchGet(params: Params$Resource$Projects$Apps$Appattestconfig$Batchget, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>): void;
        /**
         * Gets the AppAttestConfig for the specified app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Apps$Appattestconfig$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Apps$Appattestconfig$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>;
        get(params: Params$Resource$Projects$Apps$Appattestconfig$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Apps$Appattestconfig$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>): void;
        get(params: Params$Resource$Projects$Apps$Appattestconfig$Get, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>): void;
        /**
         * Updates the AppAttestConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange AppAttest tokens for App Check tokens.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Apps$Appattestconfig$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Apps$Appattestconfig$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>;
        patch(params: Params$Resource$Projects$Apps$Appattestconfig$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Apps$Appattestconfig$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>): void;
        patch(params: Params$Resource$Projects$Apps$Appattestconfig$Patch, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>): void;
    }
    export interface Params$Resource$Projects$Apps$Appattestconfig$Batchget extends StandardParameters {
        /**
         * Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch.
         */
        names?: string[];
        /**
         * Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Apps$Appattestconfig$Get extends StandardParameters {
        /**
         * Required. The relative resource name of the AppAttestConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ```
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Apps$Appattestconfig$Patch extends StandardParameters {
        /**
         * Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ```
         */
        name?: string;
        /**
         * Required. A comma-separated list of names of fields in the AppAttestConfig to update. Example: `token_ttl`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1AppAttestConfig;
    }
    export class Resource$Projects$Apps$Debugtokens {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Apps$Debugtokens$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Apps$Debugtokens$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1DebugToken>;
        create(params: Params$Resource$Projects$Apps$Debugtokens$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Apps$Debugtokens$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>): void;
        create(params: Params$Resource$Projects$Apps$Debugtokens$Create, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>): void;
        create(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>): void;
        /**
         * Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Apps$Debugtokens$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Apps$Debugtokens$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Apps$Debugtokens$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Apps$Debugtokens$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Apps$Debugtokens$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Gets the specified DebugToken. For security reasons, the `token` field is never populated in the response.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Apps$Debugtokens$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Apps$Debugtokens$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1DebugToken>;
        get(params: Params$Resource$Projects$Apps$Debugtokens$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Apps$Debugtokens$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>): void;
        get(params: Params$Resource$Projects$Apps$Debugtokens$Get, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>): void;
        /**
         * Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Apps$Debugtokens$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Apps$Debugtokens$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>;
        list(params: Params$Resource$Projects$Apps$Debugtokens$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Apps$Debugtokens$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>): void;
        list(params: Params$Resource$Projects$Apps$Debugtokens$List, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>): void;
        /**
         * Updates the specified DebugToken. For security reasons, the `token` field cannot be updated, nor will it be populated in the response, but you can revoke the debug token using DeleteDebugToken.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Apps$Debugtokens$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Apps$Debugtokens$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1DebugToken>;
        patch(params: Params$Resource$Projects$Apps$Debugtokens$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Apps$Debugtokens$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>): void;
        patch(params: Params$Resource$Projects$Apps$Debugtokens$Patch, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>): void;
    }
    export interface Params$Resource$Projects$Apps$Debugtokens$Create extends StandardParameters {
        /**
         * Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number\}/apps/{app_id\} ```
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1DebugToken;
    }
    export interface Params$Resource$Projects$Apps$Debugtokens$Delete extends StandardParameters {
        /**
         * Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Apps$Debugtokens$Get extends StandardParameters {
        /**
         * Required. The relative resource name of the debug token, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Apps$Debugtokens$List extends StandardParameters {
        /**
         * The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined.
         */
        pageToken?: string;
        /**
         * Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number\}/apps/{app_id\} ```
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Apps$Debugtokens$Patch extends StandardParameters {
        /**
         * Required. The relative resource name of the debug token, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
         */
        name?: string;
        /**
         * Required. A comma-separated list of names of fields in the DebugToken to update. Example: `display_name`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1DebugToken;
    }
    export class Resource$Projects$Apps$Devicecheckconfig {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchGet(params: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchGet(params?: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>;
        batchGet(params: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchGet(params: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>): void;
        batchGet(params: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>): void;
        /**
         * Gets the DeviceCheckConfig for the specified app. For security reasons, the `private_key` field is never populated in the response.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Apps$Devicecheckconfig$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Apps$Devicecheckconfig$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>;
        get(params: Params$Resource$Projects$Apps$Devicecheckconfig$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Apps$Devicecheckconfig$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>): void;
        get(params: Params$Resource$Projects$Apps$Devicecheckconfig$Get, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>): void;
        /**
         * Updates the DeviceCheckConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange DeviceCheck tokens for App Check tokens. For security reasons, the `private_key` field is never populated in the response.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Apps$Devicecheckconfig$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Apps$Devicecheckconfig$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>;
        patch(params: Params$Resource$Projects$Apps$Devicecheckconfig$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Apps$Devicecheckconfig$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>): void;
        patch(params: Params$Resource$Projects$Apps$Devicecheckconfig$Patch, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>): void;
    }
    export interface Params$Resource$Projects$Apps$Devicecheckconfig$Batchget extends StandardParameters {
        /**
         * Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch.
         */
        names?: string[];
        /**
         * Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Apps$Devicecheckconfig$Get extends StandardParameters {
        /**
         * Required. The relative resource name of the DeviceCheckConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ```
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Apps$Devicecheckconfig$Patch extends StandardParameters {
        /**
         * Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ```
         */
        name?: string;
        /**
         * Required. A comma-separated list of names of fields in the DeviceCheckConfig to update. Example: `key_id,private_key`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig;
    }
    export class Resource$Projects$Apps$Playintegrityconfig {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Atomically gets the PlayIntegrityConfigs for the specified list of apps.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchGet(params: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchGet(params?: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>;
        batchGet(params: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchGet(params: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>): void;
        batchGet(params: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>): void;
        /**
         * Gets the PlayIntegrityConfig for the specified app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Apps$Playintegrityconfig$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Apps$Playintegrityconfig$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>;
        get(params: Params$Resource$Projects$Apps$Playintegrityconfig$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Apps$Playintegrityconfig$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>): void;
        get(params: Params$Resource$Projects$Apps$Playintegrityconfig$Get, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>): void;
        /**
         * Updates the PlayIntegrityConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange Play Integrity tokens for App Check tokens.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Apps$Playintegrityconfig$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Apps$Playintegrityconfig$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>;
        patch(params: Params$Resource$Projects$Apps$Playintegrityconfig$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Apps$Playintegrityconfig$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>): void;
        patch(params: Params$Resource$Projects$Apps$Playintegrityconfig$Patch, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>): void;
    }
    export interface Params$Resource$Projects$Apps$Playintegrityconfig$Batchget extends StandardParameters {
        /**
         * Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch.
         */
        names?: string[];
        /**
         * Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Apps$Playintegrityconfig$Get extends StandardParameters {
        /**
         * Required. The relative resource name of the PlayIntegrityConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ```
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Apps$Playintegrityconfig$Patch extends StandardParameters {
        /**
         * Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ```
         */
        name?: string;
        /**
         * Required. A comma-separated list of names of fields in the PlayIntegrityConfig to update. Example: `token_ttl`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig;
    }
    export class Resource$Projects$Apps$Recaptchaenterpriseconfig {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchGet(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchGet(params?: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>;
        batchGet(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchGet(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>): void;
        batchGet(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>): void;
        /**
         * Gets the RecaptchaEnterpriseConfig for the specified app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>;
        get(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>): void;
        get(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>): void;
        /**
         * Updates the RecaptchaEnterpriseConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA Enterprise tokens for App Check tokens.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>;
        patch(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>): void;
        patch(params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>): void;
    }
    export interface Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget extends StandardParameters {
        /**
         * Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.
         */
        names?: string[];
        /**
         * Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get extends StandardParameters {
        /**
         * Required. The relative resource name of the RecaptchaEnterpriseConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ```
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch extends StandardParameters {
        /**
         * Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ```
         */
        name?: string;
        /**
         * Required. A comma-separated list of names of fields in the RecaptchaEnterpriseConfig to update. Example: `site_key`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig;
    }
    export class Resource$Projects$Apps$Recaptchav3config {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchGet(params: Params$Resource$Projects$Apps$Recaptchav3config$Batchget, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchGet(params?: Params$Resource$Projects$Apps$Recaptchav3config$Batchget, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>;
        batchGet(params: Params$Resource$Projects$Apps$Recaptchav3config$Batchget, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchGet(params: Params$Resource$Projects$Apps$Recaptchav3config$Batchget, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>): void;
        batchGet(params: Params$Resource$Projects$Apps$Recaptchav3config$Batchget, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>): void;
        /**
         * Gets the RecaptchaV3Config for the specified app. For security reasons, the `site_secret` field is never populated in the response.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Apps$Recaptchav3config$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Apps$Recaptchav3config$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>;
        get(params: Params$Resource$Projects$Apps$Recaptchav3config$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Apps$Recaptchav3config$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>): void;
        get(params: Params$Resource$Projects$Apps$Recaptchav3config$Get, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>): void;
        /**
         * Updates the RecaptchaV3Config for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA V3 tokens for App Check tokens. For security reasons, the `site_secret` field is never populated in the response.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Apps$Recaptchav3config$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Apps$Recaptchav3config$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>;
        patch(params: Params$Resource$Projects$Apps$Recaptchav3config$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Apps$Recaptchav3config$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>): void;
        patch(params: Params$Resource$Projects$Apps$Recaptchav3config$Patch, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>): void;
    }
    export interface Params$Resource$Projects$Apps$Recaptchav3config$Batchget extends StandardParameters {
        /**
         * Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch.
         */
        names?: string[];
        /**
         * Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Apps$Recaptchav3config$Get extends StandardParameters {
        /**
         * Required. The relative resource name of the RecaptchaV3Config, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ```
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Apps$Recaptchav3config$Patch extends StandardParameters {
        /**
         * Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ```
         */
        name?: string;
        /**
         * Required. A comma-separated list of names of fields in the RecaptchaV3Config to update. Example: `site_secret`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config;
    }
    export class Resource$Projects$Apps$Safetynetconfig {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Atomically gets the SafetyNetConfigs for the specified list of apps.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchGet(params: Params$Resource$Projects$Apps$Safetynetconfig$Batchget, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchGet(params?: Params$Resource$Projects$Apps$Safetynetconfig$Batchget, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>;
        batchGet(params: Params$Resource$Projects$Apps$Safetynetconfig$Batchget, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchGet(params: Params$Resource$Projects$Apps$Safetynetconfig$Batchget, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>): void;
        batchGet(params: Params$Resource$Projects$Apps$Safetynetconfig$Batchget, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>): void;
        /**
         * Gets the SafetyNetConfig for the specified app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Apps$Safetynetconfig$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Apps$Safetynetconfig$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>;
        get(params: Params$Resource$Projects$Apps$Safetynetconfig$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Apps$Safetynetconfig$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>): void;
        get(params: Params$Resource$Projects$Apps$Safetynetconfig$Get, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>): void;
        /**
         * Updates the SafetyNetConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange SafetyNet tokens for App Check tokens.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Apps$Safetynetconfig$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Apps$Safetynetconfig$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>;
        patch(params: Params$Resource$Projects$Apps$Safetynetconfig$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Apps$Safetynetconfig$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>): void;
        patch(params: Params$Resource$Projects$Apps$Safetynetconfig$Patch, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>): void;
    }
    export interface Params$Resource$Projects$Apps$Safetynetconfig$Batchget extends StandardParameters {
        /**
         * Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch.
         */
        names?: string[];
        /**
         * Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Apps$Safetynetconfig$Get extends StandardParameters {
        /**
         * Required. The relative resource name of the SafetyNetConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ```
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Apps$Safetynetconfig$Patch extends StandardParameters {
        /**
         * Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ```
         */
        name?: string;
        /**
         * Required. A comma-separated list of names of fields in the SafetyNetConfig to update. Example: `token_ttl`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1SafetyNetConfig;
    }
    export class Resource$Projects$Services {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Atomically updates the specified Service configurations.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchUpdate(params: Params$Resource$Projects$Services$Batchupdate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchUpdate(params?: Params$Resource$Projects$Services$Batchupdate, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>;
        batchUpdate(params: Params$Resource$Projects$Services$Batchupdate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchUpdate(params: Params$Resource$Projects$Services$Batchupdate, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>): void;
        batchUpdate(params: Params$Resource$Projects$Services$Batchupdate, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>): void;
        batchUpdate(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>): void;
        /**
         * Gets the Service configuration for the specified service name.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Services$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Services$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1Service>;
        get(params: Params$Resource$Projects$Services$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Services$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>): void;
        get(params: Params$Resource$Projects$Services$Get, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>): void;
        /**
         * Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Services$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Services$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>;
        list(params: Params$Resource$Projects$Services$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Services$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>): void;
        list(params: Params$Resource$Projects$Services$List, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>): void;
        /**
         * Updates the specified Service configuration.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Services$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Services$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirebaseAppcheckV1Service>;
        patch(params: Params$Resource$Projects$Services$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Services$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>): void;
        patch(params: Params$Resource$Projects$Services$Patch, callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>): void;
    }
    export interface Params$Resource$Projects$Services$Batchupdate extends StandardParameters {
        /**
         * Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesRequest;
    }
    export interface Params$Resource$Projects$Services$Get extends StandardParameters {
        /**
         * Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Services$List extends StandardParameters {
        /**
         * The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined.
         */
        pageToken?: string;
        /**
         * Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number\} ```
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Services$Patch extends StandardParameters {
        /**
         * Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)
         */
        name?: string;
        /**
         * Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirebaseAppcheckV1Service;
    }
    export {};
}
