/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace androidpublisher_v3 {
    export interface Options extends GlobalOptions {
        version: 'v3';
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
     * Google Play Android Developer API
     *
     * Lets Android application developers access their Google Play accounts. At a high level, the expected workflow is to &quot;insert&quot; an Edit, make changes as necessary, and then &quot;commit&quot; it.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     * ```
     */
    export class Androidpublisher {
        context: APIRequestContext;
        applications: Resource$Applications;
        apprecovery: Resource$Apprecovery;
        edits: Resource$Edits;
        externaltransactions: Resource$Externaltransactions;
        generatedapks: Resource$Generatedapks;
        grants: Resource$Grants;
        inappproducts: Resource$Inappproducts;
        internalappsharingartifacts: Resource$Internalappsharingartifacts;
        monetization: Resource$Monetization;
        orders: Resource$Orders;
        purchases: Resource$Purchases;
        reviews: Resource$Reviews;
        systemapks: Resource$Systemapks;
        users: Resource$Users;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Represents an Abi.
     */
    export interface Schema$Abi {
        /**
         * Alias for an abi.
         */
        alias?: string | null;
    }
    /**
     * Targeting based on Abi.
     */
    export interface Schema$AbiTargeting {
        /**
         * Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits.
         */
        alternatives?: Schema$Abi[];
        /**
         * Value of an abi.
         */
        value?: Schema$Abi[];
    }
    /**
     * Represents a targeting rule of the form: User never had {scope\} before.
     */
    export interface Schema$AcquisitionTargetingRule {
        /**
         * Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "any subscription in app".
         */
        scope?: Schema$TargetingRuleScope;
    }
    /**
     * Request message for ActivateBasePlan.
     */
    export interface Schema$ActivateBasePlanRequest {
        /**
         * Required. The unique base plan ID of the base plan to activate.
         */
        basePlanId?: string | null;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string | null;
        /**
         * Required. The parent app (package name) of the base plan to activate.
         */
        packageName?: string | null;
        /**
         * Required. The parent subscription (ID) of the base plan to activate.
         */
        productId?: string | null;
    }
    /**
     * Request message for ActivateSubscriptionOffer.
     */
    export interface Schema$ActivateSubscriptionOfferRequest {
        /**
         * Required. The parent base plan (ID) of the offer to activate.
         */
        basePlanId?: string | null;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string | null;
        /**
         * Required. The unique offer ID of the offer to activate.
         */
        offerId?: string | null;
        /**
         * Required. The parent app (package name) of the offer to activate.
         */
        packageName?: string | null;
        /**
         * Required. The parent subscription (ID) of the offer to activate.
         */
        productId?: string | null;
    }
    /**
     * Request message for AddTargeting.
     */
    export interface Schema$AddTargetingRequest {
        /**
         * Specifies targeting updates such as regions, android sdk versions etc.
         */
        targetingUpdate?: Schema$TargetingUpdate;
    }
    /**
     * Response message for AddTargeting.
     */
    export interface Schema$AddTargetingResponse {
    }
    /**
     * Object representation to describe all set of users.
     */
    export interface Schema$AllUsers {
        /**
         * Required. Set to true if all set of users are needed.
         */
        isAllUsersRequested?: boolean | null;
    }
    /**
     * Android api level targeting data for app recovery action targeting.
     */
    export interface Schema$AndroidSdks {
        /**
         * Android api levels of devices targeted by recovery action. See https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels for different api levels in android.
         */
        sdkLevels?: string[] | null;
    }
    /**
     * Information about an APK. The resource for ApksService.
     */
    export interface Schema$Apk {
        /**
         * Information about the binary payload of this APK.
         */
        binary?: Schema$ApkBinary;
        /**
         * The version code of the APK, as specified in the manifest file.
         */
        versionCode?: number | null;
    }
    /**
     * Represents the binary payload of an APK.
     */
    export interface Schema$ApkBinary {
        /**
         * A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.
         */
        sha1?: string | null;
        /**
         * A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command.
         */
        sha256?: string | null;
    }
    /**
     * Description of the created apks.
     */
    export interface Schema$ApkDescription {
        /**
         * Set only for asset slices.
         */
        assetSliceMetadata?: Schema$SplitApkMetadata;
        /**
         * Set only for Instant split APKs.
         */
        instantApkMetadata?: Schema$SplitApkMetadata;
        /**
         * Path of the Apk, will be in the following format: .apk where DownloadId is the ID used to download the apk using GeneratedApks.Download API.
         */
        path?: string | null;
        /**
         * Set only for Split APKs.
         */
        splitApkMetadata?: Schema$SplitApkMetadata;
        /**
         * Set only for standalone APKs.
         */
        standaloneApkMetadata?: Schema$StandaloneApkMetadata;
        /**
         * Apk-level targeting.
         */
        targeting?: Schema$ApkTargeting;
    }
    /**
     * Request to create a new externally hosted APK.
     */
    export interface Schema$ApksAddExternallyHostedRequest {
        /**
         * The definition of the externally-hosted APK and where it is located.
         */
        externallyHostedApk?: Schema$ExternallyHostedApk;
    }
    /**
     * Response for creating a new externally hosted APK.
     */
    export interface Schema$ApksAddExternallyHostedResponse {
        /**
         * The definition of the externally-hosted APK and where it is located.
         */
        externallyHostedApk?: Schema$ExternallyHostedApk;
    }
    /**
     * A set of apks representing a module.
     */
    export interface Schema$ApkSet {
        /**
         * Description of the generated apks.
         */
        apkDescription?: Schema$ApkDescription[];
        /**
         * Metadata about the module represented by this ApkSet
         */
        moduleMetadata?: Schema$ModuleMetadata;
    }
    /**
     * Response listing all APKs.
     */
    export interface Schema$ApksListResponse {
        /**
         * All APKs.
         */
        apks?: Schema$Apk[];
        /**
         * The kind of this response ("androidpublisher#apksListResponse").
         */
        kind?: string | null;
    }
    /**
     * Represents a set of apk-level targetings.
     */
    export interface Schema$ApkTargeting {
        /**
         * The abi that the apk targets
         */
        abiTargeting?: Schema$AbiTargeting;
        /**
         * The language that the apk targets
         */
        languageTargeting?: Schema$LanguageTargeting;
        /**
         * Multi-api-level targeting.
         */
        multiAbiTargeting?: Schema$MultiAbiTargeting;
        /**
         * The screen density that this apk supports.
         */
        screenDensityTargeting?: Schema$ScreenDensityTargeting;
        /**
         * The sdk version that the apk targets
         */
        sdkVersionTargeting?: Schema$SdkVersionTargeting;
        /**
         * Texture-compression-format-level targeting
         */
        textureCompressionFormatTargeting?: Schema$TextureCompressionFormatTargeting;
    }
    /**
     * The app details. The resource for DetailsService.
     */
    export interface Schema$AppDetails {
        /**
         * The user-visible support email for this app.
         */
        contactEmail?: string | null;
        /**
         * The user-visible support telephone number for this app.
         */
        contactPhone?: string | null;
        /**
         * The user-visible website for this app.
         */
        contactWebsite?: string | null;
        /**
         * Default language code, in BCP 47 format (eg "en-US").
         */
        defaultLanguage?: string | null;
    }
    /**
     * An app edit. The resource for EditsService.
     */
    export interface Schema$AppEdit {
        /**
         * Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use.
         */
        expiryTimeSeconds?: string | null;
        /**
         * Output only. Identifier of the edit. Can be used in subsequent API calls.
         */
        id?: string | null;
    }
    /**
     * Information about an app recovery action.
     */
    export interface Schema$AppRecoveryAction {
        /**
         * ID corresponding to the app recovery action.
         */
        appRecoveryId?: string | null;
        /**
         * Timestamp of when the app recovery action is canceled by the developer. Only set if the recovery action has been canceled.
         */
        cancelTime?: string | null;
        /**
         * Timestamp of when the app recovery action is created by the developer. It is always set after creation of the recovery action.
         */
        createTime?: string | null;
        /**
         * Timestamp of when the app recovery action is deployed to the users. Only set if the recovery action has been deployed.
         */
        deployTime?: string | null;
        /**
         * Timestamp of when the developer last updated recovery action. In case the action is cancelled, it corresponds to cancellation time. It is always set after creation of the recovery action.
         */
        lastUpdateTime?: string | null;
        /**
         * Data about the remote in-app update action such as such as recovered user base, recoverable user base etc. Set only if the recovery action type is Remote In-App Update.
         */
        remoteInAppUpdateData?: Schema$RemoteInAppUpdateData;
        /**
         * The status of the recovery action.
         */
        status?: string | null;
        /**
         * Specifies targeting criteria for the recovery action such as regions, android sdk versions, app versions etc.
         */
        targeting?: Schema$Targeting;
    }
    /**
     * Data format for a list of app versions.
     */
    export interface Schema$AppVersionList {
        /**
         * List of app version codes.
         */
        versionCodes?: string[] | null;
    }
    /**
     * Data format for a continuous range of app versions.
     */
    export interface Schema$AppVersionRange {
        /**
         * Highest app version in the range, inclusive.
         */
        versionCodeEnd?: string | null;
        /**
         * Lowest app version in the range, inclusive.
         */
        versionCodeStart?: string | null;
    }
    /**
     * Deprecated: subscription archiving is not supported.
     */
    export interface Schema$ArchiveSubscriptionRequest {
    }
    /**
     * Metadata of an asset module.
     */
    export interface Schema$AssetModuleMetadata {
        /**
         * Indicates the delivery type for persistent install.
         */
        deliveryType?: string | null;
        /**
         * Module name.
         */
        name?: string | null;
    }
    /**
     * Set of asset slices belonging to a single asset module.
     */
    export interface Schema$AssetSliceSet {
        /**
         * Asset slices.
         */
        apkDescription?: Schema$ApkDescription[];
        /**
         * Module level metadata.
         */
        assetModuleMetadata?: Schema$AssetModuleMetadata;
    }
    /**
     * Represents a base plan that automatically renews at the end of its subscription period.
     */
    export interface Schema$AutoRenewingBasePlanType {
        /**
         * Optional. Account hold period of the subscription, specified in ISO 8601 format. Acceptable values must be in DAYS and in the range P0D (zero days) to P30D (30 days). If not specified, the default value is P30D (30 days).
         */
        accountHoldDuration?: string | null;
        /**
         * Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.
         */
        billingPeriodDuration?: string | null;
        /**
         * Grace period of the subscription, specified in ISO 8601 format. Acceptable values are P0D (zero days), P3D (3 days), P7D (7 days), P14D (14 days), and P30D (30 days). If not specified, a default value will be used based on the recurring period duration.
         */
        gracePeriodDuration?: string | null;
        /**
         * Whether the renewing base plan is backward compatible. The backward compatible base plan is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one renewing base plan can be marked as legacy compatible for a given subscription.
         */
        legacyCompatible?: boolean | null;
        /**
         * Subscription offer id which is legacy compatible. The backward compatible subscription offer is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one subscription offer can be marked as legacy compatible for a given renewing base plan. To have no Subscription offer as legacy compatible set this field as empty string.
         */
        legacyCompatibleSubscriptionOfferId?: string | null;
        /**
         * The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE.
         */
        prorationMode?: string | null;
        /**
         * Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified.
         */
        resubscribeState?: string | null;
    }
    /**
     * Information related to an auto renewing plan.
     */
    export interface Schema$AutoRenewingPlan {
        /**
         * If the subscription is currently set to auto-renew, e.g. the user has not canceled the subscription
         */
        autoRenewEnabled?: boolean | null;
        /**
         * The installment plan commitment and state related info for the auto renewing plan.
         */
        installmentDetails?: Schema$InstallmentPlan;
        /**
         * The information of the last price change for the item since subscription signup.
         */
        priceChangeDetails?: Schema$SubscriptionItemPriceChangeDetails;
    }
    /**
     * A single base plan for a subscription.
     */
    export interface Schema$BasePlan {
        /**
         * Set when the base plan automatically renews at a regular interval.
         */
        autoRenewingBasePlanType?: Schema$AutoRenewingBasePlanType;
        /**
         * Required. Immutable. The unique identifier of this base plan. Must be unique within the subscription, and conform with RFC-1034. That is, this ID can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 63 characters.
         */
        basePlanId?: string | null;
        /**
         * Set for installments base plans where a user is committed to a specified number of payments.
         */
        installmentsBasePlanType?: Schema$InstallmentsBasePlanType;
        /**
         * List of up to 20 custom tags specified for this base plan, and returned to the app through the billing library. Subscription offers for this base plan will also receive these offer tags in the billing library.
         */
        offerTags?: Schema$OfferTag[];
        /**
         * Pricing information for any new locations Play may launch in the future. If omitted, the BasePlan will not be automatically available any new locations Play may launch in the future.
         */
        otherRegionsConfig?: Schema$OtherRegionsBasePlanConfig;
        /**
         * Set when the base plan does not automatically renew at the end of the billing period.
         */
        prepaidBasePlanType?: Schema$PrepaidBasePlanType;
        /**
         * Region-specific information for this base plan.
         */
        regionalConfigs?: Schema$RegionalBasePlanConfig[];
        /**
         * Output only. The state of the base plan, i.e. whether it's active. Draft and inactive base plans can be activated or deleted. Active base plans can be made inactive. Inactive base plans can be canceled. This field cannot be changed by updating the resource. Use the dedicated endpoints instead.
         */
        state?: string | null;
    }
    /**
     * Request message for BatchGetSubscriptionOffers endpoint.
     */
    export interface Schema$BatchGetSubscriptionOffersRequest {
        /**
         * Required. A list of update requests of up to 100 elements. All requests must update different subscriptions.
         */
        requests?: Schema$GetSubscriptionOfferRequest[];
    }
    /**
     * Response message for BatchGetSubscriptionOffers endpoint.
     */
    export interface Schema$BatchGetSubscriptionOffersResponse {
        subscriptionOffers?: Schema$SubscriptionOffer[];
    }
    /**
     * Response message for BatchGetSubscriptions endpoint.
     */
    export interface Schema$BatchGetSubscriptionsResponse {
        /**
         * The list of requested subscriptions, in the same order as the request.
         */
        subscriptions?: Schema$Subscription[];
    }
    /**
     * Request message for BatchMigrateBasePlanPrices.
     */
    export interface Schema$BatchMigrateBasePlanPricesRequest {
        /**
         * Required. Up to 100 price migration requests. All requests must update different base plans.
         */
        requests?: Schema$MigrateBasePlanPricesRequest[];
    }
    /**
     * Response message for BatchMigrateBasePlanPrices.
     */
    export interface Schema$BatchMigrateBasePlanPricesResponse {
        /**
         * Contains one response per requested price migration, in the same order as the request.
         */
        responses?: Schema$MigrateBasePlanPricesResponse[];
    }
    /**
     * Request message for BatchUpdateBasePlanStates.
     */
    export interface Schema$BatchUpdateBasePlanStatesRequest {
        /**
         * Required. The update request list of up to 100 elements. All requests must update different base plans.
         */
        requests?: Schema$UpdateBasePlanStateRequest[];
    }
    /**
     * Response message for BatchUpdateBasePlanStates.
     */
    export interface Schema$BatchUpdateBasePlanStatesResponse {
        /**
         * The list of updated subscriptions. This list will match the requests one to one, in the same order.
         */
        subscriptions?: Schema$Subscription[];
    }
    /**
     * Request message for BatchUpdateSubscriptionOffers.
     */
    export interface Schema$BatchUpdateSubscriptionOffersRequest {
        /**
         * Required. A list of update requests of up to 100 elements. All requests must update different subscription offers.
         */
        requests?: Schema$UpdateSubscriptionOfferRequest[];
    }
    /**
     * Response message for BatchUpdateSubscriptionOffers.
     */
    export interface Schema$BatchUpdateSubscriptionOffersResponse {
        /**
         * The updated subscription offers list.
         */
        subscriptionOffers?: Schema$SubscriptionOffer[];
    }
    /**
     * Request message for BatchUpdateSubscriptionOfferStates.
     */
    export interface Schema$BatchUpdateSubscriptionOfferStatesRequest {
        /**
         * Required. The update request list of up to 100 elements. All requests must update different offers.
         */
        requests?: Schema$UpdateSubscriptionOfferStateRequest[];
    }
    /**
     * Response message for BatchUpdateSubscriptionOfferStates.
     */
    export interface Schema$BatchUpdateSubscriptionOfferStatesResponse {
        /**
         * The updated subscription offers list.
         */
        subscriptionOffers?: Schema$SubscriptionOffer[];
    }
    /**
     * Request message for BatchUpdateSubscription.
     */
    export interface Schema$BatchUpdateSubscriptionsRequest {
        /**
         * Required. A list of update requests of up to 100 elements. All requests must update different subscriptions.
         */
        requests?: Schema$UpdateSubscriptionRequest[];
    }
    /**
     * Response message for BatchUpdateSubscription.
     */
    export interface Schema$BatchUpdateSubscriptionsResponse {
        /**
         * The updated subscriptions list.
         */
        subscriptions?: Schema$Subscription[];
    }
    /**
     * Information about an app bundle. The resource for BundlesService.
     */
    export interface Schema$Bundle {
        /**
         * A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command.
         */
        sha1?: string | null;
        /**
         * A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command.
         */
        sha256?: string | null;
        /**
         * The version code of the Android App Bundle, as specified in the Android App Bundle's base module APK manifest file.
         */
        versionCode?: number | null;
    }
    /**
     * Response listing all app bundles.
     */
    export interface Schema$BundlesListResponse {
        /**
         * All app bundles.
         */
        bundles?: Schema$Bundle[];
        /**
         * The kind of this response ("androidpublisher#bundlesListResponse").
         */
        kind?: string | null;
    }
    /**
     * Request message for CancelAppRecovery.
     */
    export interface Schema$CancelAppRecoveryRequest {
    }
    /**
     * Response message for CancelAppRecovery.
     */
    export interface Schema$CancelAppRecoveryResponse {
    }
    /**
     * Information specific to a subscription in the SUBSCRIPTION_STATE_CANCELED or SUBSCRIPTION_STATE_EXPIRED state.
     */
    export interface Schema$CanceledStateContext {
        /**
         * Subscription was canceled by the developer.
         */
        developerInitiatedCancellation?: Schema$DeveloperInitiatedCancellation;
        /**
         * Subscription was replaced by a new subscription.
         */
        replacementCancellation?: Schema$ReplacementCancellation;
        /**
         * Subscription was canceled by the system, for example because of a billing problem.
         */
        systemInitiatedCancellation?: Schema$SystemInitiatedCancellation;
        /**
         * Subscription was canceled by user.
         */
        userInitiatedCancellation?: Schema$UserInitiatedCancellation;
    }
    /**
     * Result of the cancel survey when the subscription was canceled by the user.
     */
    export interface Schema$CancelSurveyResult {
        /**
         * The reason the user selected in the cancel survey.
         */
        reason?: string | null;
        /**
         * Only set for CANCEL_SURVEY_REASON_OTHERS. This is the user's freeform response to the survey.
         */
        reasonUserInput?: string | null;
    }
    /**
     * An entry of conversation between user and developer.
     */
    export interface Schema$Comment {
        /**
         * A comment from a developer.
         */
        developerComment?: Schema$DeveloperComment;
        /**
         * A comment from a user.
         */
        userComment?: Schema$UserComment;
    }
    /**
     * Converted other regions prices.
     */
    export interface Schema$ConvertedOtherRegionsPrice {
        /**
         * Price in EUR to use for the "Other regions" location exclusive of taxes.
         */
        eurPrice?: Schema$Money;
        /**
         * Price in USD to use for the "Other regions" location exclusive of taxes.
         */
        usdPrice?: Schema$Money;
    }
    /**
     * A converted region price.
     */
    export interface Schema$ConvertedRegionPrice {
        /**
         * The converted price tax inclusive.
         */
        price?: Schema$Money;
        /**
         * The region code of the region.
         */
        regionCode?: string | null;
        /**
         * The tax amount of the converted price.
         */
        taxAmount?: Schema$Money;
    }
    /**
     * Request message for ConvertRegionPrices.
     */
    export interface Schema$ConvertRegionPricesRequest {
        /**
         * The intital price to convert other regions from. Tax exclusive.
         */
        price?: Schema$Money;
    }
    /**
     * Response message for ConvertRegionPrices.
     */
    export interface Schema$ConvertRegionPricesResponse {
        /**
         * Converted other regions prices in USD and EUR, to use for countries where Play doesn't support a country's local currency.
         */
        convertedOtherRegionsPrice?: Schema$ConvertedOtherRegionsPrice;
        /**
         * Map from region code to converted region price.
         */
        convertedRegionPrices?: {
            [key: string]: Schema$ConvertedRegionPrice;
        } | null;
    }
    /**
     * Country targeting specification.
     */
    export interface Schema$CountryTargeting {
        /**
         * Countries to target, specified as two letter [CLDR codes](https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html).
         */
        countries?: string[] | null;
        /**
         * Include "rest of world" as well as explicitly targeted countries.
         */
        includeRestOfWorld?: boolean | null;
    }
    /**
     * Request message for CreateDraftAppRecovery.
     */
    export interface Schema$CreateDraftAppRecoveryRequest {
        /**
         * Action type is remote in-app update. As a consequence of this action, a downloadable recovery module is also created for testing purposes.
         */
        remoteInAppUpdate?: Schema$RemoteInAppUpdate;
        /**
         * Specifies targeting criteria for the recovery action such as regions, android sdk versions, app versions etc.
         */
        targeting?: Schema$Targeting;
    }
    /**
     * Request message for DeactivateBasePlan.
     */
    export interface Schema$DeactivateBasePlanRequest {
        /**
         * Required. The unique base plan ID of the base plan to deactivate.
         */
        basePlanId?: string | null;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string | null;
        /**
         * Required. The parent app (package name) of the base plan to deactivate.
         */
        packageName?: string | null;
        /**
         * Required. The parent subscription (ID) of the base plan to deactivate.
         */
        productId?: string | null;
    }
    /**
     * Request message for DeactivateSubscriptionOffer.
     */
    export interface Schema$DeactivateSubscriptionOfferRequest {
        /**
         * Required. The parent base plan (ID) of the offer to deactivate.
         */
        basePlanId?: string | null;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string | null;
        /**
         * Required. The unique offer ID of the offer to deactivate.
         */
        offerId?: string | null;
        /**
         * Required. The parent app (package name) of the offer to deactivate.
         */
        packageName?: string | null;
        /**
         * Required. The parent subscription (ID) of the offer to deactivate.
         */
        productId?: string | null;
    }
    /**
     * Information related to deferred item replacement.
     */
    export interface Schema$DeferredItemReplacement {
        /**
         * The product_id going to replace the existing product_id.
         */
        productId?: string | null;
    }
    /**
     * Represents a deobfuscation file.
     */
    export interface Schema$DeobfuscationFile {
        /**
         * The type of the deobfuscation file.
         */
        symbolType?: string | null;
    }
    /**
     * Responses for the upload.
     */
    export interface Schema$DeobfuscationFilesUploadResponse {
        /**
         * The uploaded Deobfuscation File configuration.
         */
        deobfuscationFile?: Schema$DeobfuscationFile;
    }
    /**
     * Request message for DeployAppRecovery.
     */
    export interface Schema$DeployAppRecoveryRequest {
    }
    /**
     * Response message for DeployAppRecovery.
     */
    export interface Schema$DeployAppRecoveryResponse {
    }
    /**
     * Developer entry from conversation between user and developer.
     */
    export interface Schema$DeveloperComment {
        /**
         * The last time at which this comment was updated.
         */
        lastModified?: Schema$Timestamp;
        /**
         * The content of the comment, i.e. reply body.
         */
        text?: string | null;
    }
    /**
     * Information specific to cancellations initiated by developers.
     */
    export interface Schema$DeveloperInitiatedCancellation {
    }
    /**
     * Represents a device feature.
     */
    export interface Schema$DeviceFeature {
        /**
         * Name of the feature.
         */
        featureName?: string | null;
        /**
         * The feature version specified by android:glEsVersion or android:version in in the AndroidManifest.
         */
        featureVersion?: number | null;
    }
    /**
     * Targeting for a device feature.
     */
    export interface Schema$DeviceFeatureTargeting {
        /**
         * Feature of the device.
         */
        requiredFeature?: Schema$DeviceFeature;
    }
    /**
     * A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
     */
    export interface Schema$DeviceGroup {
        /**
         * Device selectors for this group. A device matching any of the selectors is included in this group.
         */
        deviceSelectors?: Schema$DeviceSelector[];
        /**
         * The name of the group.
         */
        name?: string | null;
    }
    /**
     * Identifier of a device.
     */
    export interface Schema$DeviceId {
        /**
         * Value of Build.BRAND.
         */
        buildBrand?: string | null;
        /**
         * Value of Build.DEVICE.
         */
        buildDevice?: string | null;
    }
    /**
     * Characteristics of the user's device.
     */
    export interface Schema$DeviceMetadata {
        /**
         * Device CPU make, e.g. "Qualcomm"
         */
        cpuMake?: string | null;
        /**
         * Device CPU model, e.g. "MSM8974"
         */
        cpuModel?: string | null;
        /**
         * Device class (e.g. tablet)
         */
        deviceClass?: string | null;
        /**
         * OpenGL version
         */
        glEsVersion?: number | null;
        /**
         * Device manufacturer (e.g. Motorola)
         */
        manufacturer?: string | null;
        /**
         * Comma separated list of native platforms (e.g. "arm", "arm7")
         */
        nativePlatform?: string | null;
        /**
         * Device model name (e.g. Droid)
         */
        productName?: string | null;
        /**
         * Device RAM in Megabytes, e.g. "2048"
         */
        ramMb?: number | null;
        /**
         * Screen density in DPI
         */
        screenDensityDpi?: number | null;
        /**
         * Screen height in pixels
         */
        screenHeightPx?: number | null;
        /**
         * Screen width in pixels
         */
        screenWidthPx?: number | null;
    }
    /**
     * Conditions about a device's RAM capabilities.
     */
    export interface Schema$DeviceRam {
        /**
         * Maximum RAM in bytes (bound excluded).
         */
        maxBytes?: string | null;
        /**
         * Minimum RAM in bytes (bound included).
         */
        minBytes?: string | null;
    }
    /**
     * Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
     */
    export interface Schema$DeviceSelector {
        /**
         * Conditions on the device's RAM.
         */
        deviceRam?: Schema$DeviceRam;
        /**
         * Device models excluded by this selector, even if they match all other conditions.
         */
        excludedDeviceIds?: Schema$DeviceId[];
        /**
         * A device that has any of these system features is excluded by this selector, even if it matches all other conditions.
         */
        forbiddenSystemFeatures?: Schema$SystemFeature[];
        /**
         * Device models included by this selector.
         */
        includedDeviceIds?: Schema$DeviceId[];
        /**
         * A device needs to have all these system features to be included by the selector.
         */
        requiredSystemFeatures?: Schema$SystemFeature[];
    }
    /**
     * The device spec used to generate a system APK.
     */
    export interface Schema$DeviceSpec {
        /**
         * Screen dpi.
         */
        screenDensity?: number | null;
        /**
         * Supported ABI architectures in the order of preference. The values should be the string as reported by the platform, e.g. "armeabi-v7a", "x86_64".
         */
        supportedAbis?: string[] | null;
        /**
         * All installed locales represented as BCP-47 strings, e.g. "en-US".
         */
        supportedLocales?: string[] | null;
    }
    /**
     * A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.
     */
    export interface Schema$DeviceTier {
        /**
         * Groups of devices included in this tier. These groups must be defined explicitly under device_groups in this configuration.
         */
        deviceGroupNames?: string[] | null;
        /**
         * The priority level of the tier. Tiers are evaluated in descending order of level: the highest level tier has the highest priority. The highest tier matching a given device is selected for that device. You should use a contiguous range of levels for your tiers in a tier set; tier levels in a tier set must be unique. For instance, if your tier set has 4 tiers (including the global fallback), you should define tiers 1, 2 and 3 in this configuration. Note: tier 0 is implicitly defined as a global fallback and selected for devices that don't match any of the tiers explicitly defined here. You mustn't define level 0 explicitly in this configuration.
         */
        level?: number | null;
    }
    /**
     * Configuration describing device targeting criteria for the content of an app.
     */
    export interface Schema$DeviceTierConfig {
        /**
         * Definition of device groups for the app.
         */
        deviceGroups?: Schema$DeviceGroup[];
        /**
         * Output only. The device tier config ID.
         */
        deviceTierConfigId?: string | null;
        /**
         * Definition of the set of device tiers for the app.
         */
        deviceTierSet?: Schema$DeviceTierSet;
        /**
         * Definition of user country sets for the app.
         */
        userCountrySets?: Schema$UserCountrySet[];
    }
    /**
     * A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.
     */
    export interface Schema$DeviceTierSet {
        /**
         * Device tiers belonging to the set.
         */
        deviceTiers?: Schema$DeviceTier[];
    }
    /**
     * An expansion file. The resource for ExpansionFilesService.
     */
    export interface Schema$ExpansionFile {
        /**
         * If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes.
         */
        fileSize?: string | null;
        /**
         * If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set.
         */
        referencesVersion?: number | null;
    }
    /**
     * Response for uploading an expansion file.
     */
    export interface Schema$ExpansionFilesUploadResponse {
        /**
         * The uploaded expansion file configuration.
         */
        expansionFile?: Schema$ExpansionFile;
    }
    /**
     * User account identifier in the third-party service.
     */
    export interface Schema$ExternalAccountIdentifiers {
        /**
         * User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.
         */
        externalAccountId?: string | null;
        /**
         * An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
         */
        obfuscatedExternalAccountId?: string | null;
        /**
         * An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
         */
        obfuscatedExternalProfileId?: string | null;
    }
    /**
     * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
     */
    export interface Schema$ExternallyHostedApk {
        /**
         * The application label.
         */
        applicationLabel?: string | null;
        /**
         * A certificate (or array of certificates if a certificate-chain is used) used to sign this APK, represented as a base64 encoded byte array.
         */
        certificateBase64s?: string[] | null;
        /**
         * The URL at which the APK is hosted. This must be an https URL.
         */
        externallyHostedUrl?: string | null;
        /**
         * The sha1 checksum of this APK, represented as a base64 encoded byte array.
         */
        fileSha1Base64?: string | null;
        /**
         * The sha256 checksum of this APK, represented as a base64 encoded byte array.
         */
        fileSha256Base64?: string | null;
        /**
         * The file size in bytes of this APK.
         */
        fileSize?: string | null;
        /**
         * The icon image from the APK, as a base64 encoded byte array.
         */
        iconBase64?: string | null;
        /**
         * The maximum SDK supported by this APK (optional).
         */
        maximumSdk?: number | null;
        /**
         * The minimum SDK targeted by this APK.
         */
        minimumSdk?: number | null;
        /**
         * The native code environments supported by this APK (optional).
         */
        nativeCodes?: string[] | null;
        /**
         * The package name.
         */
        packageName?: string | null;
        /**
         * The features required by this APK (optional).
         */
        usesFeatures?: string[] | null;
        /**
         * The permissions requested by this APK.
         */
        usesPermissions?: Schema$UsesPermission[];
        /**
         * The version code of this APK.
         */
        versionCode?: number | null;
        /**
         * The version name of this APK.
         */
        versionName?: string | null;
    }
    /**
     * Details of an external subscription.
     */
    export interface Schema$ExternalSubscription {
        /**
         * Required. The type of the external subscription.
         */
        subscriptionType?: string | null;
    }
    /**
     * The details of an external transaction.
     */
    export interface Schema$ExternalTransaction {
        /**
         * Output only. The time when this transaction was created. This is the time when Google was notified of the transaction.
         */
        createTime?: string | null;
        /**
         * Output only. The current transaction amount before tax. This represents the current pre-tax amount including any refunds that may have been applied to this transaction.
         */
        currentPreTaxAmount?: Schema$Price;
        /**
         * Output only. The current tax amount. This represents the current tax amount including any refunds that may have been applied to this transaction.
         */
        currentTaxAmount?: Schema$Price;
        /**
         * Output only. The id of this transaction. All transaction ids under the same package name must be unique. Set when creating the external transaction.
         */
        externalTransactionId?: string | null;
        /**
         * This is a one-time transaction and not part of a subscription.
         */
        oneTimeTransaction?: Schema$OneTimeExternalTransaction;
        /**
         * Required. The original transaction amount before taxes. This represents the pre-tax amount originally notified to Google before any refunds were applied.
         */
        originalPreTaxAmount?: Schema$Price;
        /**
         * Required. The original tax amount. This represents the tax amount originally notified to Google before any refunds were applied.
         */
        originalTaxAmount?: Schema$Price;
        /**
         * Output only. The resource name of the external transaction. The package name of the application the inapp products were sold (for example, 'com.some.app').
         */
        packageName?: string | null;
        /**
         * This transaction is part of a recurring series of transactions.
         */
        recurringTransaction?: Schema$RecurringExternalTransaction;
        /**
         * Output only. If set, this transaction was a test purchase. Google will not charge for a test transaction.
         */
        testPurchase?: Schema$ExternalTransactionTestPurchase;
        /**
         * Output only. The current state of the transaction.
         */
        transactionState?: string | null;
        /**
         * Required. The time when the transaction was completed.
         */
        transactionTime?: string | null;
        /**
         * Required. User address for tax computation.
         */
        userTaxAddress?: Schema$ExternalTransactionAddress;
    }
    /**
     * User's address for the external transaction.
     */
    export interface Schema$ExternalTransactionAddress {
        /**
         * Optional. Top-level administrative subdivision of the country/region. Only required for transactions in India. Valid values are "ANDAMAN AND NICOBAR ISLANDS", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHANDIGARH", "CHHATTISGARH", "DADRA AND NAGAR HAVELI", "DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "DAMAN AND DIU", "DELHI", "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH", "JAMMU AND KASHMIR", "JHARKHAND", "KARNATAKA", "KERALA", "LADAKH", "LAKSHADWEEP", "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM", "NAGALAND", "ODISHA", "PUDUCHERRY", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU", "TELANGANA", "TRIPURA", "UTTAR PRADESH", "UTTARAKHAND", and "WEST BENGAL".
         */
        administrativeArea?: string | null;
        /**
         * Required. Two letter region code based on ISO-3166-1 Alpha-2 (UN region codes).
         */
        regionCode?: string | null;
    }
    /**
     * Represents a transaction performed using a test account. These transactions will not be charged by Google.
     */
    export interface Schema$ExternalTransactionTestPurchase {
    }
    /**
     * A full refund of the remaining amount of a transaction.
     */
    export interface Schema$FullRefund {
    }
    /**
     * Response to list generated APKs.
     */
    export interface Schema$GeneratedApksListResponse {
        /**
         * All generated APKs, grouped by the APK signing key.
         */
        generatedApks?: Schema$GeneratedApksPerSigningKey[];
    }
    /**
     * Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
     */
    export interface Schema$GeneratedApksPerSigningKey {
        /**
         * SHA256 hash of the APK signing public key certificate.
         */
        certificateSha256Hash?: string | null;
        /**
         * List of asset pack slices which will be served for this app bundle, signed with a key corresponding to certificate_sha256_hash.
         */
        generatedAssetPackSlices?: Schema$GeneratedAssetPackSlice[];
        /**
         * Generated recovery apks for recovery actions signed with a key corresponding to certificate_sha256_hash. This includes all generated recovery APKs, also those in draft or cancelled state. This field is not set if no recovery actions were created for this signing key.
         */
        generatedRecoveryModules?: Schema$GeneratedRecoveryApk[];
        /**
         * List of generated split APKs, signed with a key corresponding to certificate_sha256_hash.
         */
        generatedSplitApks?: Schema$GeneratedSplitApk[];
        /**
         * List of generated standalone APKs, signed with a key corresponding to certificate_sha256_hash.
         */
        generatedStandaloneApks?: Schema$GeneratedStandaloneApk[];
        /**
         * Generated universal APK, signed with a key corresponding to certificate_sha256_hash. This field is not set if no universal APK was generated for this signing key.
         */
        generatedUniversalApk?: Schema$GeneratedUniversalApk;
        /**
         * Contains targeting information about the generated apks.
         */
        targetingInfo?: Schema$TargetingInfo;
    }
    /**
     * Download metadata for an asset pack slice.
     */
    export interface Schema$GeneratedAssetPackSlice {
        /**
         * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
         */
        downloadId?: string | null;
        /**
         * Name of the module that this asset slice belongs to.
         */
        moduleName?: string | null;
        /**
         * Asset slice ID.
         */
        sliceId?: string | null;
        /**
         * Asset module version.
         */
        version?: string | null;
    }
    /**
     * Download metadata for an app recovery module.
     */
    export interface Schema$GeneratedRecoveryApk {
        /**
         * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
         */
        downloadId?: string | null;
        /**
         * Name of the module which recovery apk belongs to.
         */
        moduleName?: string | null;
        /**
         * ID of the recovery action.
         */
        recoveryId?: string | null;
        /**
         * The status of the recovery action corresponding to the recovery apk.
         */
        recoveryStatus?: string | null;
    }
    /**
     * Download metadata for a split APK.
     */
    export interface Schema$GeneratedSplitApk {
        /**
         * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
         */
        downloadId?: string | null;
        /**
         * Name of the module that this APK belongs to.
         */
        moduleName?: string | null;
        /**
         * Split ID. Empty for the main split of the base module.
         */
        splitId?: string | null;
        /**
         * ID of the generated variant.
         */
        variantId?: number | null;
    }
    /**
     * Download metadata for a standalone APK.
     */
    export interface Schema$GeneratedStandaloneApk {
        /**
         * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
         */
        downloadId?: string | null;
        /**
         * ID of the generated variant.
         */
        variantId?: number | null;
    }
    /**
     * Download metadata for a universal APK.
     */
    export interface Schema$GeneratedUniversalApk {
        /**
         * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
         */
        downloadId?: string | null;
    }
    /**
     * Request message for GetSubscriptionOffer.
     */
    export interface Schema$GetSubscriptionOfferRequest {
        /**
         * Required. The parent base plan (ID) of the offer to get.
         */
        basePlanId?: string | null;
        /**
         * Required. The unique offer ID of the offer to get.
         */
        offerId?: string | null;
        /**
         * Required. The parent app (package name) of the offer to get.
         */
        packageName?: string | null;
        /**
         * Required. The parent subscription (ID) of the offer to get.
         */
        productId?: string | null;
    }
    /**
     * An access grant resource.
     */
    export interface Schema$Grant {
        /**
         * The permissions granted to the user for this app.
         */
        appLevelPermissions?: string[] | null;
        /**
         * Required. Resource name for this grant, following the pattern "developers/{developer\}/users/{email\}/grants/{package_name\}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.
         */
        name?: string | null;
        /**
         * Immutable. The package name of the app. This will be empty for draft apps.
         */
        packageName?: string | null;
    }
    /**
     * An uploaded image. The resource for ImagesService.
     */
    export interface Schema$Image {
        /**
         * A unique id representing this image.
         */
        id?: string | null;
        /**
         * A sha1 hash of the image.
         */
        sha1?: string | null;
        /**
         * A sha256 hash of the image.
         */
        sha256?: string | null;
        /**
         * A URL that will serve a preview of the image.
         */
        url?: string | null;
    }
    /**
     * Response for deleting all images.
     */
    export interface Schema$ImagesDeleteAllResponse {
        /**
         * The deleted images.
         */
        deleted?: Schema$Image[];
    }
    /**
     * Response listing all images.
     */
    export interface Schema$ImagesListResponse {
        /**
         * All listed Images.
         */
        images?: Schema$Image[];
    }
    /**
     * Response for uploading an image.
     */
    export interface Schema$ImagesUploadResponse {
        /**
         * The uploaded image.
         */
        image?: Schema$Image;
    }
    /**
     * An in-app product. The resource for InappproductsService.
     */
    export interface Schema$InAppProduct {
        /**
         * Default language of the localized data, as defined by BCP-47. e.g. "en-US".
         */
        defaultLanguage?: string | null;
        /**
         * Default price. Cannot be zero, as in-app products are never free. Always in the developer's Checkout merchant currency.
         */
        defaultPrice?: Schema$Price;
        /**
         * Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days).
         */
        gracePeriod?: string | null;
        /**
         * List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US".
         */
        listings?: {
            [key: string]: Schema$InAppProductListing;
        } | null;
        /**
         * Details about taxes and legal compliance. Only applicable to managed products.
         */
        managedProductTaxesAndComplianceSettings?: Schema$ManagedProductTaxAndComplianceSettings;
        /**
         * Package name of the parent app.
         */
        packageName?: string | null;
        /**
         * Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2.
         */
        prices?: {
            [key: string]: Schema$Price;
        } | null;
        /**
         * The type of the product, e.g. a recurring subscription.
         */
        purchaseType?: string | null;
        /**
         * Stock-keeping-unit (SKU) of the product, unique within an app.
         */
        sku?: string | null;
        /**
         * The status of the product, e.g. whether it's active.
         */
        status?: string | null;
        /**
         * Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year).
         */
        subscriptionPeriod?: string | null;
        /**
         * Details about taxes and legal compliance. Only applicable to subscription products.
         */
        subscriptionTaxesAndComplianceSettings?: Schema$SubscriptionTaxAndComplianceSettings;
        /**
         * Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days).
         */
        trialPeriod?: string | null;
    }
    /**
     * Store listing of a single in-app product.
     */
    export interface Schema$InAppProductListing {
        /**
         * Localized entitlement benefits for a subscription.
         */
        benefits?: string[] | null;
        /**
         * Description for the store listing.
         */
        description?: string | null;
        /**
         * Title for the store listing.
         */
        title?: string | null;
    }
    /**
     * Request to delete multiple in-app products.
     */
    export interface Schema$InappproductsBatchDeleteRequest {
        /**
         * Individual delete requests. At least one request is required. Can contain up to 100 requests. All requests must correspond to different in-app products.
         */
        requests?: Schema$InappproductsDeleteRequest[];
    }
    /**
     * Response message for BatchGetSubscriptions endpoint.
     */
    export interface Schema$InappproductsBatchGetResponse {
        /**
         * The list of requested in-app products, in the same order as the request.
         */
        inappproduct?: Schema$InAppProduct[];
    }
    /**
     * Request to update or insert one or more in-app products.
     */
    export interface Schema$InappproductsBatchUpdateRequest {
        /**
         * Required. Individual update requests. At least one request is required. Can contain up to 100 requests. All requests must correspond to different in-app products.
         */
        requests?: Schema$InappproductsUpdateRequest[];
    }
    /**
     * Response for a batch in-app product update.
     */
    export interface Schema$InappproductsBatchUpdateResponse {
        /**
         * The updated or inserted in-app products.
         */
        inappproducts?: Schema$InAppProduct[];
    }
    /**
     * Request to delete an in-app product.
     */
    export interface Schema$InappproductsDeleteRequest {
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string | null;
        /**
         * Package name of the app.
         */
        packageName?: string | null;
        /**
         * Unique identifier for the in-app product.
         */
        sku?: string | null;
    }
    /**
     * Response listing all in-app products.
     */
    export interface Schema$InappproductsListResponse {
        /**
         * All in-app products.
         */
        inappproduct?: Schema$InAppProduct[];
        /**
         * The kind of this response ("androidpublisher#inappproductsListResponse").
         */
        kind?: string | null;
        /**
         * Deprecated and unset.
         */
        pageInfo?: Schema$PageInfo;
        /**
         * Pagination token, to handle a number of products that is over one page.
         */
        tokenPagination?: Schema$TokenPagination;
    }
    /**
     * Request to update an in-app product.
     */
    export interface Schema$InappproductsUpdateRequest {
        /**
         * If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created.
         */
        allowMissing?: boolean | null;
        /**
         * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         */
        autoConvertMissingPrices?: boolean | null;
        /**
         * The new in-app product.
         */
        inappproduct?: Schema$InAppProduct;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string | null;
        /**
         * Package name of the app.
         */
        packageName?: string | null;
        /**
         * Unique identifier for the in-app product.
         */
        sku?: string | null;
    }
    /**
     * Information to a installment plan.
     */
    export interface Schema$InstallmentPlan {
        /**
         * Total number of payments the user is initially committed for.
         */
        initialCommittedPaymentsCount?: number | null;
        /**
         * If present, this installment plan is pending to be canceled. The cancellation will happen only after the user finished all committed payments.
         */
        pendingCancellation?: Schema$PendingCancellation;
        /**
         * Total number of committed payments remaining to be paid for in this renewal cycle.
         */
        remainingCommittedPaymentsCount?: number | null;
        /**
         * Total number of payments the user will be committed for after each commitment period. Empty means the installment plan will fall back to a normal auto-renew subscription after initial commitment.
         */
        subsequentCommittedPaymentsCount?: number | null;
    }
    /**
     * Represents an installments base plan where a user commits to a specified number of payments.
     */
    export interface Schema$InstallmentsBasePlanType {
        /**
         * Optional. Account hold period of the subscription, specified exclusively in days and in ISO 8601 format. Acceptable values are P0D (zero days) to P30D (30days). If not specified, the default value is P30D (30 days).
         */
        accountHoldDuration?: string | null;
        /**
         * Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.
         */
        billingPeriodDuration?: string | null;
        /**
         * Required. The number of payments the user is committed to.
         */
        committedPaymentsCount?: number | null;
        /**
         * Grace period of the subscription, specified in ISO 8601 format. Acceptable values are P0D (zero days), P3D (3 days), P7D (7 days), P14D (14 days), and P30D (30 days). If not specified, a default value will be used based on the recurring period duration.
         */
        gracePeriodDuration?: string | null;
        /**
         * The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE.
         */
        prorationMode?: string | null;
        /**
         * Required. Installments base plan renewal type. Determines the behavior at the end of the initial commitment.
         */
        renewalType?: string | null;
        /**
         * Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified.
         */
        resubscribeState?: string | null;
    }
    /**
     * An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
     */
    export interface Schema$InternalAppSharingArtifact {
        /**
         * The sha256 fingerprint of the certificate used to sign the generated artifact.
         */
        certificateFingerprint?: string | null;
        /**
         * The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it.
         */
        downloadUrl?: string | null;
        /**
         * The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command.
         */
        sha256?: string | null;
    }
    /**
     * Contains the introductory price information for a subscription.
     */
    export interface Schema$IntroductoryPriceInfo {
        /**
         * Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
         */
        introductoryPriceAmountMicros?: string | null;
        /**
         * ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
         */
        introductoryPriceCurrencyCode?: string | null;
        /**
         * The number of billing period to offer introductory pricing.
         */
        introductoryPriceCycles?: number | null;
        /**
         * Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year).
         */
        introductoryPricePeriod?: string | null;
    }
    /**
     * Targeting based on language.
     */
    export interface Schema$LanguageTargeting {
        /**
         * Alternative languages.
         */
        alternatives?: string[] | null;
        /**
         * ISO-639: 2 or 3 letter language code.
         */
        value?: string[] | null;
    }
    /**
     * Response message for ListAppRecoveries. -- api-linter: core::0158::response-next-page-token-field=disabled
     */
    export interface Schema$ListAppRecoveriesResponse {
        /**
         * List of recovery actions associated with the requested package name.
         */
        recoveryActions?: Schema$AppRecoveryAction[];
    }
    /**
     * Response listing existing device tier configs.
     */
    export interface Schema$ListDeviceTierConfigsResponse {
        /**
         * Device tier configs created by the developer.
         */
        deviceTierConfigs?: Schema$DeviceTierConfig[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * A localized store listing. The resource for ListingsService.
     */
    export interface Schema$Listing {
        /**
         * Full description of the app.
         */
        fullDescription?: string | null;
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
         */
        language?: string | null;
        /**
         * Short description of the app.
         */
        shortDescription?: string | null;
        /**
         * Localized title of the app.
         */
        title?: string | null;
        /**
         * URL of a promotional YouTube video for the app.
         */
        video?: string | null;
    }
    /**
     * Response listing all localized listings.
     */
    export interface Schema$ListingsListResponse {
        /**
         * The kind of this response ("androidpublisher#listingsListResponse").
         */
        kind?: string | null;
        /**
         * All localized listings.
         */
        listings?: Schema$Listing[];
    }
    /**
     * Response message for ListSubscriptionOffers.
     */
    export interface Schema$ListSubscriptionOffersResponse {
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * The subscription offers from the specified subscription.
         */
        subscriptionOffers?: Schema$SubscriptionOffer[];
    }
    /**
     * Response message for ListSubscriptions.
     */
    export interface Schema$ListSubscriptionsResponse {
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * The subscriptions from the specified app.
         */
        subscriptions?: Schema$Subscription[];
    }
    /**
     * A response containing one or more users with access to an account.
     */
    export interface Schema$ListUsersResponse {
        /**
         * A token to pass to subsequent calls in order to retrieve subsequent results. This will not be set if there are no more results to return.
         */
        nextPageToken?: string | null;
        /**
         * The resulting users.
         */
        users?: Schema$User[];
    }
    /**
     * Localized text in given language.
     */
    export interface Schema$LocalizedText {
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
         */
        language?: string | null;
        /**
         * The text in the given language.
         */
        text?: string | null;
    }
    /**
     * Details about taxation and legal compliance for managed products.
     */
    export interface Schema$ManagedProductTaxAndComplianceSettings {
        /**
         * Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.
         */
        eeaWithdrawalRightType?: string | null;
        /**
         * Whether this in-app product is declared as a product representing a tokenized digital asset.
         */
        isTokenizedDigitalAsset?: boolean | null;
        /**
         * A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR".
         */
        taxRateInfoByRegionCode?: {
            [key: string]: Schema$RegionalTaxRateInfo;
        } | null;
    }
    /**
     * Request message for MigrateBasePlanPrices.
     */
    export interface Schema$MigrateBasePlanPricesRequest {
        /**
         * Required. The unique base plan ID of the base plan to update prices on.
         */
        basePlanId?: string | null;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string | null;
        /**
         * Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource.
         */
        packageName?: string | null;
        /**
         * Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource.
         */
        productId?: string | null;
        /**
         * Required. The regional prices to update.
         */
        regionalPriceMigrations?: Schema$RegionalPriceMigrationConfig[];
        /**
         * Required. The version of the available regions being used for the regional_price_migrations.
         */
        regionsVersion?: Schema$RegionsVersion;
    }
    /**
     * Response message for MigrateBasePlanPrices.
     */
    export interface Schema$MigrateBasePlanPricesResponse {
    }
    /**
     * Metadata of a module.
     */
    export interface Schema$ModuleMetadata {
        /**
         * Indicates the delivery type (e.g. on-demand) of the module.
         */
        deliveryType?: string | null;
        /**
         * Names of the modules that this module directly depends on. Each module implicitly depends on the base module.
         */
        dependencies?: string[] | null;
        /**
         * Indicates the type of this feature module.
         */
        moduleType?: string | null;
        /**
         * Module name.
         */
        name?: string | null;
        /**
         * The targeting that makes a conditional module installed. Relevant only for Split APKs.
         */
        targeting?: Schema$ModuleTargeting;
    }
    /**
     * Targeting on the module level.
     */
    export interface Schema$ModuleTargeting {
        /**
         * Targeting for device features.
         */
        deviceFeatureTargeting?: Schema$DeviceFeatureTargeting[];
        /**
         * The sdk version that the variant targets
         */
        sdkVersionTargeting?: Schema$SdkVersionTargeting;
        /**
         * Countries-level targeting
         */
        userCountriesTargeting?: Schema$UserCountriesTargeting;
    }
    /**
     * Represents an amount of money with its currency type.
     */
    export interface Schema$Money {
        /**
         * The three-letter currency code defined in ISO 4217.
         */
        currencyCode?: string | null;
        /**
         * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
         */
        nanos?: number | null;
        /**
         * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
         */
        units?: string | null;
    }
    /**
     * Represents a list of apis.
     */
    export interface Schema$MultiAbi {
        /**
         * A list of targeted ABIs, as represented by the Android Platform
         */
        abi?: Schema$Abi[];
    }
    /**
     * Targeting based on multiple abis.
     */
    export interface Schema$MultiAbiTargeting {
        /**
         * Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits.
         */
        alternatives?: Schema$MultiAbi[];
        /**
         * Value of a multi abi.
         */
        value?: Schema$MultiAbi[];
    }
    /**
     * Offer details information related to a purchase line item.
     */
    export interface Schema$OfferDetails {
        /**
         * The base plan ID. Present for all base plan and offers.
         */
        basePlanId?: string | null;
        /**
         * The offer ID. Only present for discounted offers.
         */
        offerId?: string | null;
        /**
         * The latest offer tags associated with the offer. It includes tags inherited from the base plan.
         */
        offerTags?: string[] | null;
    }
    /**
     * Represents a custom tag specified for base plans and subscription offers.
     */
    export interface Schema$OfferTag {
        /**
         * Must conform with RFC-1034. That is, this string can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 20 characters.
         */
        tag?: string | null;
    }
    /**
     * Represents a one-time transaction.
     */
    export interface Schema$OneTimeExternalTransaction {
        /**
         * Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched.
         */
        externalTransactionToken?: string | null;
    }
    /**
     * Details of a recurring external transaction product which doesn't belong to any other more specific category.
     */
    export interface Schema$OtherRecurringProduct {
    }
    /**
     * Pricing information for any new locations Play may launch in.
     */
    export interface Schema$OtherRegionsBasePlanConfig {
        /**
         * Required. Price in EUR to use for any new locations Play may launch in.
         */
        eurPrice?: Schema$Money;
        /**
         * Whether the base plan is available for new subscribers in any new locations Play may launch in. If not specified, this will default to false.
         */
        newSubscriberAvailability?: boolean | null;
        /**
         * Required. Price in USD to use for any new locations Play may launch in.
         */
        usdPrice?: Schema$Money;
    }
    /**
     * Configuration for any new locations Play may launch in specified on a subscription offer.
     */
    export interface Schema$OtherRegionsSubscriptionOfferConfig {
        /**
         * Whether the subscription offer in any new locations Play may launch in the future. If not specified, this will default to false.
         */
        otherRegionsNewSubscriberAvailability?: boolean | null;
    }
    /**
     * Configuration for any new locations Play may launch in for a single offer phase.
     */
    export interface Schema$OtherRegionsSubscriptionOfferPhaseConfig {
        /**
         * The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for any new locations Play may launch in.
         */
        absoluteDiscounts?: Schema$OtherRegionsSubscriptionOfferPhasePrices;
        /**
         * Set to specify this offer is free to obtain.
         */
        free?: Schema$OtherRegionsSubscriptionOfferPhaseFreePriceOverride;
        /**
         * The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for any new locations Play may launch in.
         */
        otherRegionsPrices?: Schema$OtherRegionsSubscriptionOfferPhasePrices;
        /**
         * The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in any new locations Play may launch in.
         */
        relativeDiscount?: number | null;
    }
    /**
     * Represents the free price override configuration for any new locations Play may launch for a single offer phase.
     */
    export interface Schema$OtherRegionsSubscriptionOfferPhaseFreePriceOverride {
    }
    /**
     * Pricing information for any new locations Play may launch in.
     */
    export interface Schema$OtherRegionsSubscriptionOfferPhasePrices {
        /**
         * Required. Price in EUR to use for any new locations Play may launch in.
         */
        eurPrice?: Schema$Money;
        /**
         * Required. Price in USD to use for any new locations Play may launch in.
         */
        usdPrice?: Schema$Money;
    }
    /**
     * Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
     */
    export interface Schema$PageInfo {
        /**
         * Maximum number of results returned in one page. ! The number of results included in the API response.
         */
        resultPerPage?: number | null;
        /**
         * Index of the first result returned in the current page.
         */
        startIndex?: number | null;
        /**
         * Total number of results available on the backend ! The total number of results in the result set.
         */
        totalResults?: number | null;
    }
    /**
     * A partial refund of a transaction.
     */
    export interface Schema$PartialRefund {
        /**
         * Required. A unique id distinguishing this partial refund. If the refund is successful, subsequent refunds with the same id will fail. Must be unique across refunds for one individual transaction.
         */
        refundId?: string | null;
        /**
         * Required. The pre-tax amount of the partial refund. Should be less than the remaining pre-tax amount of the transaction.
         */
        refundPreTaxAmount?: Schema$Price;
    }
    /**
     * Information specific to a subscription in paused state.
     */
    export interface Schema$PausedStateContext {
        /**
         * Time at which the subscription will be automatically resumed.
         */
        autoResumeTime?: string | null;
    }
    /**
     * This is an indicator of whether there is a pending cancellation on the virtual installment plan. The cancellation will happen only after the user finished all committed payments.
     */
    export interface Schema$PendingCancellation {
    }
    /**
     * Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.
     */
    export interface Schema$PrepaidBasePlanType {
        /**
         * Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.
         */
        billingPeriodDuration?: string | null;
        /**
         * Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified.
         */
        timeExtension?: string | null;
    }
    /**
     * Information related to a prepaid plan.
     */
    export interface Schema$PrepaidPlan {
        /**
         * If present, this is the time after which top up purchases are allowed for the prepaid plan. Will not be present for expired prepaid plans.
         */
        allowExtendAfterTime?: string | null;
    }
    /**
     * Definition of a price, i.e. currency and units.
     */
    export interface Schema$Price {
        /**
         * 3 letter Currency code, as defined by ISO 4217. See java/com/google/common/money/CurrencyCode.java
         */
        currency?: string | null;
        /**
         * Price in 1/million of the currency base unit, represented as a string.
         */
        priceMicros?: string | null;
    }
    /**
     * A ProductPurchase resource indicates the status of a user's inapp product purchase.
     */
    export interface Schema$ProductPurchase {
        /**
         * The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged
         */
        acknowledgementState?: number | null;
        /**
         * The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed
         */
        consumptionState?: number | null;
        /**
         * A developer-specified string that contains supplemental information about an order.
         */
        developerPayload?: string | null;
        /**
         * This kind represents an inappPurchase object in the androidpublisher service.
         */
        kind?: string | null;
        /**
         * An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
         */
        obfuscatedExternalAccountId?: string | null;
        /**
         * An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
         */
        obfuscatedExternalProfileId?: string | null;
        /**
         * The order id associated with the purchase of the inapp product.
         */
        orderId?: string | null;
        /**
         * The inapp product SKU. May not be present.
         */
        productId?: string | null;
        /**
         * The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending
         */
        purchaseState?: number | null;
        /**
         * The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
         */
        purchaseTimeMillis?: string | null;
        /**
         * The purchase token generated to identify this purchase. May not be present.
         */
        purchaseToken?: string | null;
        /**
         * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code). Does not include Play Points purchases. 2. Rewarded (i.e. from watching a video ad instead of paying)
         */
        purchaseType?: number | null;
        /**
         * The quantity associated with the purchase of the inapp product. If not present, the quantity is 1.
         */
        quantity?: number | null;
        /**
         * The quantity eligible for refund, i.e. quantity that hasn't been refunded. The value reflects quantity-based partial refunds and full refunds.
         */
        refundableQuantity?: number | null;
        /**
         * ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted.
         */
        regionCode?: string | null;
    }
    /**
     * Request for the product.purchases.acknowledge API.
     */
    export interface Schema$ProductPurchasesAcknowledgeRequest {
        /**
         * Payload to attach to the purchase.
         */
        developerPayload?: string | null;
    }
    /**
     * Represents a transaction that is part of a recurring series of payments. This can be a subscription or a one-time product with multiple payments (such as preorder).
     */
    export interface Schema$RecurringExternalTransaction {
        /**
         * Details of an external subscription.
         */
        externalSubscription?: Schema$ExternalSubscription;
        /**
         * Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. Required only for the initial purchase.
         */
        externalTransactionToken?: string | null;
        /**
         * The external transaction id of the first transaction of this recurring series of transactions. For example, for a subscription this would be the transaction id of the first payment. Required when creating recurring external transactions.
         */
        initialExternalTransactionId?: string | null;
        /**
         * Input only. Provided during the call to Create. Must only be used when migrating a subscription from manual monthly reporting to automated reporting.
         */
        migratedTransactionProgram?: string | null;
        /**
         * Details of a recurring external transaction product which doesn't belong to any other specific category.
         */
        otherRecurringProduct?: Schema$OtherRecurringProduct;
    }
    /**
     * A request to refund an existing external transaction.
     */
    export interface Schema$RefundExternalTransactionRequest {
        /**
         * A full-amount refund.
         */
        fullRefund?: Schema$FullRefund;
        /**
         * A partial refund.
         */
        partialRefund?: Schema$PartialRefund;
        /**
         * Required. The time that the transaction was refunded.
         */
        refundTime?: string | null;
    }
    /**
     * Configuration for a base plan specific to a region.
     */
    export interface Schema$RegionalBasePlanConfig {
        /**
         * Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false.
         */
        newSubscriberAvailability?: boolean | null;
        /**
         * The price of the base plan in the specified region. Must be set if the base plan is available to new subscribers. Must be set in the currency that is linked to the specified region.
         */
        price?: Schema$Money;
        /**
         * Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
         */
        regionCode?: string | null;
    }
    /**
     * Configuration for a price migration.
     */
    export interface Schema$RegionalPriceMigrationConfig {
        /**
         * Required. The cutoff time for historical prices that subscribers can remain paying. Subscribers on prices which were available at this cutoff time or later will stay on their existing price. Subscribers on older prices will be migrated to the currently-offered price. The migrated subscribers will receive a notification that they will be paying a different price. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
         */
        oldestAllowedPriceVersionTime?: string | null;
        /**
         * Optional. The behavior the caller wants users to see when there is a price increase during migration. If left unset, the behavior defaults to PRICE_INCREASE_TYPE_OPT_IN. Note that the first opt-out price increase migration for each app must be initiated in Play Console.
         */
        priceIncreaseType?: string | null;
        /**
         * Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
         */
        regionCode?: string | null;
    }
    /**
     * Configuration for a subscription offer in a single region.
     */
    export interface Schema$RegionalSubscriptionOfferConfig {
        /**
         * Whether the subscription offer in the specified region is available for new subscribers. Existing subscribers will not have their subscription cancelled if this value is set to false. If not specified, this will default to false.
         */
        newSubscriberAvailability?: boolean | null;
        /**
         * Required. Immutable. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
         */
        regionCode?: string | null;
    }
    /**
     * Configuration for a single phase of a subscription offer in a single region.
     */
    export interface Schema$RegionalSubscriptionOfferPhaseConfig {
        /**
         * The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for this region.
         */
        absoluteDiscount?: Schema$Money;
        /**
         * Set to specify this offer is free to obtain.
         */
        free?: Schema$RegionalSubscriptionOfferPhaseFreePriceOverride;
        /**
         * The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for this region.
         */
        price?: Schema$Money;
        /**
         * Required. Immutable. The region to which this config applies.
         */
        regionCode?: string | null;
        /**
         * The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in this region.
         */
        relativeDiscount?: number | null;
    }
    /**
     * Represents the free price override configuration for a single phase of a subscription offer
     */
    export interface Schema$RegionalSubscriptionOfferPhaseFreePriceOverride {
    }
    /**
     * Specified details about taxation in a given geographical region.
     */
    export interface Schema$RegionalTaxRateInfo {
        /**
         * You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in the United States.
         */
        eligibleForStreamingServiceTaxRate?: boolean | null;
        /**
         * To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax).
         */
        streamingTaxType?: string | null;
        /**
         * Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498).
         */
        taxTier?: string | null;
    }
    /**
     * Region targeting data for app recovery action targeting.
     */
    export interface Schema$Regions {
        /**
         * Regions targeted by the recovery action. Region codes are ISO 3166 Alpha-2 country codes. For example, US stands for United States of America. See https://www.iso.org/iso-3166-country-codes.html for the complete list of country codes.
         */
        regionCode?: string[] | null;
    }
    /**
     * The version of the available regions being used for the specified resource.
     */
    export interface Schema$RegionsVersion {
        /**
         * Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02.
         */
        version?: string | null;
    }
    /**
     * Object representation for Remote in-app update action type.
     */
    export interface Schema$RemoteInAppUpdate {
        /**
         * Required. Set to true if Remote In-App Update action type is needed.
         */
        isRemoteInAppUpdateRequested?: boolean | null;
    }
    /**
     * Data related to Remote In-App Update action such as recovered user count, affected user count etc.
     */
    export interface Schema$RemoteInAppUpdateData {
        /**
         * Data related to the recovery action at bundle level.
         */
        remoteAppUpdateDataPerBundle?: Schema$RemoteInAppUpdateDataPerBundle[];
    }
    /**
     * Data related to the recovery action at bundle level.
     */
    export interface Schema$RemoteInAppUpdateDataPerBundle {
        /**
         * Total number of devices which have been rescued.
         */
        recoveredDeviceCount?: string | null;
        /**
         * Total number of devices affected by this recovery action associated with bundle of the app.
         */
        totalDeviceCount?: string | null;
        /**
         * Version Code corresponding to the target bundle.
         */
        versionCode?: string | null;
    }
    /**
     * Information specific to cancellations caused by subscription replacement.
     */
    export interface Schema$ReplacementCancellation {
    }
    /**
     * Countries where the purchase of this product is restricted to payment methods registered in the same country. If empty, no payment location restrictions are imposed.
     */
    export interface Schema$RestrictedPaymentCountries {
        /**
         * Required. Region codes to impose payment restrictions on, as defined by ISO 3166-2, e.g. "US".
         */
        regionCodes?: string[] | null;
    }
    /**
     * An Android app review.
     */
    export interface Schema$Review {
        /**
         * The name of the user who wrote the review.
         */
        authorName?: string | null;
        /**
         * A repeated field containing comments for the review.
         */
        comments?: Schema$Comment[];
        /**
         * Unique identifier for this review.
         */
        reviewId?: string | null;
    }
    /**
     * The result of replying/updating a reply to review.
     */
    export interface Schema$ReviewReplyResult {
        /**
         * The time at which the reply took effect.
         */
        lastEdited?: Schema$Timestamp;
        /**
         * The reply text that was applied.
         */
        replyText?: string | null;
    }
    /**
     * Response listing reviews.
     */
    export interface Schema$ReviewsListResponse {
        /**
         * Information about the current page.
         */
        pageInfo?: Schema$PageInfo;
        /**
         * List of reviews.
         */
        reviews?: Schema$Review[];
        /**
         * Pagination token, to handle a number of products that is over one page.
         */
        tokenPagination?: Schema$TokenPagination;
    }
    /**
     * Request to reply to review or update existing reply.
     */
    export interface Schema$ReviewsReplyRequest {
        /**
         * The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.
         */
        replyText?: string | null;
    }
    /**
     * Response on status of replying to a review.
     */
    export interface Schema$ReviewsReplyResponse {
        /**
         * The result of replying/updating a reply to review.
         */
        result?: Schema$ReviewReplyResult;
    }
    /**
     * Revocation context of the purchases.subscriptionsv2.revoke API.
     */
    export interface Schema$RevocationContext {
        /**
         * Optional. Used when users should be refunded a prorated amount they paid for their subscription based on the amount of time remaining in a subscription.
         */
        proratedRefund?: Schema$RevocationContextProratedRefund;
    }
    /**
     * Used to determine if the refund type in the RevocationContext is a prorated refund.
     */
    export interface Schema$RevocationContextProratedRefund {
    }
    /**
     * Request for the purchases.subscriptionsv2.revoke API.
     */
    export interface Schema$RevokeSubscriptionPurchaseRequest {
        /**
         * Required. Additional details around the subscription revocation.
         */
        revocationContext?: Schema$RevocationContext;
    }
    /**
     * Response for the purchases.subscriptionsv2.revoke API.
     */
    export interface Schema$RevokeSubscriptionPurchaseResponse {
    }
    /**
     * Request to update Safety Labels of an app.
     */
    export interface Schema$SafetyLabelsUpdateRequest {
        /**
         * Required. Contents of the CSV file containing Data Safety responses. For the format of this file, see the Help Center documentation at https://support.google.com/googleplay/android-developer/answer/10787469?#zippy=%2Cunderstand-the-csv-format To download an up to date template, follow the steps at https://support.google.com/googleplay/android-developer/answer/10787469?#zippy=%2Cexport-to-a-csv-file
         */
        safetyLabels?: string | null;
    }
    /**
     * Response for SafetyLabelsUpdate rpc.
     */
    export interface Schema$SafetyLabelsUpdateResponse {
    }
    /**
     * Represents a screen density.
     */
    export interface Schema$ScreenDensity {
        /**
         * Alias for a screen density.
         */
        densityAlias?: string | null;
        /**
         * Value for density dpi.
         */
        densityDpi?: number | null;
    }
    /**
     * Targeting based on screen density.
     */
    export interface Schema$ScreenDensityTargeting {
        /**
         * Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits.
         */
        alternatives?: Schema$ScreenDensity[];
        /**
         * Value of a screen density.
         */
        value?: Schema$ScreenDensity[];
    }
    /**
     * Represents an sdk version.
     */
    export interface Schema$SdkVersion {
        /**
         * Inclusive minimum value of an sdk version.
         */
        min?: number | null;
    }
    /**
     * Targeting based on sdk version.
     */
    export interface Schema$SdkVersionTargeting {
        /**
         * Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits.
         */
        alternatives?: Schema$SdkVersion[];
        /**
         * Value of an sdk version.
         */
        value?: Schema$SdkVersion[];
    }
    /**
     * Holds data specific to Split APKs.
     */
    export interface Schema$SplitApkMetadata {
        /**
         * Indicates whether this APK is the main split of the module.
         */
        isMasterSplit?: boolean | null;
        /**
         * Id of the split.
         */
        splitId?: string | null;
    }
    /**
     * Variant is a group of APKs that covers a part of the device configuration space. APKs from multiple variants are never combined on one device.
     */
    export interface Schema$SplitApkVariant {
        /**
         * Set of APKs, one set per module.
         */
        apkSet?: Schema$ApkSet[];
        /**
         * Variant-level targeting.
         */
        targeting?: Schema$VariantTargeting;
        /**
         * Number of the variant, starting at 0 (unless overridden). A device will receive APKs from the first variant that matches the device configuration, with higher variant numbers having priority over lower variant numbers.
         */
        variantNumber?: number | null;
    }
    /**
     * Holds data specific to Standalone APKs.
     */
    export interface Schema$StandaloneApkMetadata {
        /**
         * Names of the modules fused in this standalone APK.
         */
        fusedModuleName?: string[] | null;
    }
    /**
     * Information associated with purchases made with 'Subscribe with Google'.
     */
    export interface Schema$SubscribeWithGoogleInfo {
        /**
         * The email address of the user when the subscription was purchased.
         */
        emailAddress?: string | null;
        /**
         * The family name of the user when the subscription was purchased.
         */
        familyName?: string | null;
        /**
         * The given name of the user when the subscription was purchased.
         */
        givenName?: string | null;
        /**
         * The Google profile id of the user when the subscription was purchased.
         */
        profileId?: string | null;
        /**
         * The profile name of the user when the subscription was purchased.
         */
        profileName?: string | null;
    }
    /**
     * A single subscription for an app.
     */
    export interface Schema$Subscription {
        /**
         * Output only. Deprecated: subscription archiving is not supported.
         */
        archived?: boolean | null;
        /**
         * The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply.
         */
        basePlans?: Schema$BasePlan[];
        /**
         * Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app.
         */
        listings?: Schema$SubscriptionListing[];
        /**
         * Immutable. Package name of the parent app.
         */
        packageName?: string | null;
        /**
         * Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
         */
        productId?: string | null;
        /**
         * Optional. Countries where the purchase of this subscription is restricted to payment methods registered in the same country. If empty, no payment location restrictions are imposed.
         */
        restrictedPaymentCountries?: Schema$RestrictedPaymentCountries;
        /**
         * Details about taxes and legal compliance.
         */
        taxAndComplianceSettings?: Schema$SubscriptionTaxAndComplianceSettings;
    }
    /**
     * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
     */
    export interface Schema$SubscriptionCancelSurveyResult {
        /**
         * The cancellation reason the user chose in the survey. Possible values are: 0. Other 1. I don't use this service enough 2. Technical issues 3. Cost-related reasons 4. I found a better app
         */
        cancelSurveyReason?: number | null;
        /**
         * The customized input cancel reason from the user. Only present when cancelReason is 0.
         */
        userInputCancelReason?: string | null;
    }
    /**
     * A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
     */
    export interface Schema$SubscriptionDeferralInfo {
        /**
         * The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.
         */
        desiredExpiryTimeMillis?: string | null;
        /**
         * The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur.
         */
        expectedExpiryTimeMillis?: string | null;
    }
    /**
     * Price change related information of a subscription item.
     */
    export interface Schema$SubscriptionItemPriceChangeDetails {
        /**
         * The renewal time at which the price change will become effective for the user. This is subject to change(to a future time) due to cases where the renewal time shifts like pause. This field is only populated if the price change has not taken effect.
         */
        expectedNewPriceChargeTime?: string | null;
        /**
         * New recurring price for the subscription item.
         */
        newPrice?: Schema$Money;
        /**
         * Price change mode specifies how the subscription item price is changing.
         */
        priceChangeMode?: string | null;
        /**
         * State the price change is currently in.
         */
        priceChangeState?: string | null;
    }
    /**
     * The consumer-visible metadata of a subscription.
     */
    export interface Schema$SubscriptionListing {
        /**
         * A list of benefits shown to the user on platforms such as the Play Store and in restoration flows in the language of this listing. Plain text. Ordered list of at most four benefits.
         */
        benefits?: string[] | null;
        /**
         * The description of this subscription in the language of this listing. Maximum length - 80 characters. Plain text.
         */
        description?: string | null;
        /**
         * Required. The language of this listing, as defined by BCP-47, e.g. "en-US".
         */
        languageCode?: string | null;
        /**
         * Required. The title of this subscription in the language of this listing. Plain text.
         */
        title?: string | null;
    }
    /**
     * A single, temporary offer
     */
    export interface Schema$SubscriptionOffer {
        /**
         * Required. Immutable. The ID of the base plan to which this offer is an extension.
         */
        basePlanId?: string | null;
        /**
         * Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
         */
        offerId?: string | null;
        /**
         * List of up to 20 custom tags specified for this offer, and returned to the app through the billing library.
         */
        offerTags?: Schema$OfferTag[];
        /**
         * The configuration for any new locations Play may launch in the future.
         */
        otherRegionsConfig?: Schema$OtherRegionsSubscriptionOfferConfig;
        /**
         * Required. Immutable. The package name of the app the parent subscription belongs to.
         */
        packageName?: string | null;
        /**
         * Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation.
         */
        phases?: Schema$SubscriptionOfferPhase[];
        /**
         * Required. Immutable. The ID of the parent subscription this offer belongs to.
         */
        productId?: string | null;
        /**
         * Required. The region-specific configuration of this offer. Must contain at least one entry.
         */
        regionalConfigs?: Schema$RegionalSubscriptionOfferConfig[];
        /**
         * Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active.
         */
        state?: string | null;
        /**
         * The requirements that users need to fulfil to be eligible for this offer. Represents the requirements that Play will evaluate to decide whether an offer should be returned. Developers may further filter these offers themselves.
         */
        targeting?: Schema$SubscriptionOfferTargeting;
    }
    /**
     * A single phase of a subscription offer.
     */
    export interface Schema$SubscriptionOfferPhase {
        /**
         * Required. The duration of a single recurrence of this phase. Specified in ISO 8601 format.
         */
        duration?: string | null;
        /**
         * Pricing information for any new locations Play may launch in.
         */
        otherRegionsConfig?: Schema$OtherRegionsSubscriptionOfferPhaseConfig;
        /**
         * Required. The number of times this phase repeats. If this offer phase is not free, each recurrence charges the user the price of this offer phase.
         */
        recurrenceCount?: number | null;
        /**
         * Required. The region-specific configuration of this offer phase. This list must contain exactly one entry for each region for which the subscription offer has a regional config.
         */
        regionalConfigs?: Schema$RegionalSubscriptionOfferPhaseConfig[];
    }
    /**
     * Defines the rule a user needs to satisfy to receive this offer.
     */
    export interface Schema$SubscriptionOfferTargeting {
        /**
         * Offer targeting rule for new user acquisition.
         */
        acquisitionRule?: Schema$AcquisitionTargetingRule;
        /**
         * Offer targeting rule for upgrading users' existing plans.
         */
        upgradeRule?: Schema$UpgradeTargetingRule;
    }
    /**
     * Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
     */
    export interface Schema$SubscriptionPriceChange {
        /**
         * The new price the subscription will renew with if the price change is accepted by the user.
         */
        newPrice?: Schema$Price;
        /**
         * The current state of the price change. Possible values are: 0. Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API. 1. Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.
         */
        state?: number | null;
    }
    /**
     * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
     */
    export interface Schema$SubscriptionPurchase {
        /**
         * The acknowledgement state of the subscription product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged
         */
        acknowledgementState?: number | null;
        /**
         * Whether the subscription will automatically be renewed when it reaches its current expiry time.
         */
        autoRenewing?: boolean | null;
        /**
         * Time at which the subscription will be automatically resumed, in milliseconds since the Epoch. Only present if the user has requested to pause the subscription.
         */
        autoResumeTimeMillis?: string | null;
        /**
         * The reason why a subscription was canceled or is not auto-renewing. Possible values are: 0. User canceled the subscription 1. Subscription was canceled by the system, for example because of a billing problem 2. Subscription was replaced with a new subscription 3. Subscription was canceled by the developer
         */
        cancelReason?: number | null;
        /**
         * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
         */
        cancelSurveyResult?: Schema$SubscriptionCancelSurveyResult;
        /**
         * ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
         */
        countryCode?: string | null;
        /**
         * A developer-specified string that contains supplemental information about an order.
         */
        developerPayload?: string | null;
        /**
         * The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
         */
        emailAddress?: string | null;
        /**
         * Time at which the subscription will expire, in milliseconds since the Epoch.
         */
        expiryTimeMillis?: string | null;
        /**
         * User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.
         */
        externalAccountId?: string | null;
        /**
         * The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
         */
        familyName?: string | null;
        /**
         * The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
         */
        givenName?: string | null;
        /**
         * Introductory price information of the subscription. This is only present when the subscription was purchased with an introductory price. This field does not indicate the subscription is currently in introductory price period.
         */
        introductoryPriceInfo?: Schema$IntroductoryPriceInfo;
        /**
         * This kind represents a subscriptionPurchase object in the androidpublisher service.
         */
        kind?: string | null;
        /**
         * The purchase token of the originating purchase if this subscription is one of the following: 0. Re-signup of a canceled but non-lapsed subscription 1. Upgrade/downgrade from a previous subscription For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.
         */
        linkedPurchaseToken?: string | null;
        /**
         * An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
         */
        obfuscatedExternalAccountId?: string | null;
        /**
         * An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
         */
        obfuscatedExternalProfileId?: string | null;
        /**
         * The order id of the latest recurring order associated with the purchase of the subscription. If the subscription was canceled because payment was declined, this will be the order id from the payment declined order.
         */
        orderId?: string | null;
        /**
         * The payment state of the subscription. Possible values are: 0. Payment pending 1. Payment received 2. Free trial 3. Pending deferred upgrade/downgrade Not present for canceled, expired subscriptions.
         */
        paymentState?: number | null;
        /**
         * Price of the subscription, For tax exclusive countries, the price doesn't include tax. For tax inclusive countries, the price includes tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
         */
        priceAmountMicros?: string | null;
        /**
         * The latest price change information available. This is present only when there is an upcoming price change for the subscription yet to be applied. Once the subscription renews with the new price or the subscription is canceled, no price change information will be returned.
         */
        priceChange?: Schema$SubscriptionPriceChange;
        /**
         * ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
         */
        priceCurrencyCode?: string | null;
        /**
         * The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
         */
        profileId?: string | null;
        /**
         * The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
         */
        profileName?: string | null;
        /**
         * The promotion code applied on this purchase. This field is only set if a vanity code promotion is applied when the subscription was purchased.
         */
        promotionCode?: string | null;
        /**
         * The type of promotion applied on this purchase. This field is only set if a promotion is applied when the subscription was purchased. Possible values are: 0. One time code 1. Vanity code
         */
        promotionType?: number | null;
        /**
         * The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code)
         */
        purchaseType?: number | null;
        /**
         * Time at which the subscription was granted, in milliseconds since the Epoch.
         */
        startTimeMillis?: string | null;
        /**
         * The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0.
         */
        userCancellationTimeMillis?: string | null;
    }
    /**
     * Item-level info for a subscription purchase.
     */
    export interface Schema$SubscriptionPurchaseLineItem {
        /**
         * The item is auto renewing.
         */
        autoRenewingPlan?: Schema$AutoRenewingPlan;
        /**
         * Information for deferred item replacement.
         */
        deferredItemReplacement?: Schema$DeferredItemReplacement;
        /**
         * Time at which the subscription expired or will expire unless the access is extended (ex. renews).
         */
        expiryTime?: string | null;
        /**
         * The offer details for this item.
         */
        offerDetails?: Schema$OfferDetails;
        /**
         * The item is prepaid.
         */
        prepaidPlan?: Schema$PrepaidPlan;
        /**
         * The purchased product ID (for example, 'monthly001').
         */
        productId?: string | null;
    }
    /**
     * Request for the purchases.subscriptions.acknowledge API.
     */
    export interface Schema$SubscriptionPurchasesAcknowledgeRequest {
        /**
         * Payload to attach to the purchase.
         */
        developerPayload?: string | null;
    }
    /**
     * Request for the purchases.subscriptions.defer API.
     */
    export interface Schema$SubscriptionPurchasesDeferRequest {
        /**
         * The information about the new desired expiry time for the subscription.
         */
        deferralInfo?: Schema$SubscriptionDeferralInfo;
    }
    /**
     * Response for the purchases.subscriptions.defer API.
     */
    export interface Schema$SubscriptionPurchasesDeferResponse {
        /**
         * The new expiry time for the subscription in milliseconds since the Epoch.
         */
        newExpiryTimeMillis?: string | null;
    }
    /**
     * Indicates the status of a user's subscription purchase.
     */
    export interface Schema$SubscriptionPurchaseV2 {
        /**
         * The acknowledgement state of the subscription.
         */
        acknowledgementState?: string | null;
        /**
         * Additional context around canceled subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_CANCELED or SUBSCRIPTION_STATE_EXPIRED.
         */
        canceledStateContext?: Schema$CanceledStateContext;
        /**
         * User account identifier in the third-party service.
         */
        externalAccountIdentifiers?: Schema$ExternalAccountIdentifiers;
        /**
         * This kind represents a SubscriptionPurchaseV2 object in the androidpublisher service.
         */
        kind?: string | null;
        /**
         * The order id of the latest order associated with the purchase of the subscription. For autoRenewing subscription, this is the order id of signup order if it is not renewed yet, or the last recurring order id (success, pending, or declined order). For prepaid subscription, this is the order id associated with the queried purchase token.
         */
        latestOrderId?: string | null;
        /**
         * Item-level info for a subscription purchase. The items in the same purchase should be either all with AutoRenewingPlan or all with PrepaidPlan.
         */
        lineItems?: Schema$SubscriptionPurchaseLineItem[];
        /**
         * The purchase token of the old subscription if this subscription is one of the following: * Re-signup of a canceled but non-lapsed subscription * Upgrade/downgrade from a previous subscription. * Convert from prepaid to auto renewing subscription. * Convert from an auto renewing subscription to prepaid. * Topup a prepaid subscription.
         */
        linkedPurchaseToken?: string | null;
        /**
         * Additional context around paused subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_PAUSED.
         */
        pausedStateContext?: Schema$PausedStateContext;
        /**
         * ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
         */
        regionCode?: string | null;
        /**
         * Time at which the subscription was granted. Not set for pending subscriptions (subscription was created but awaiting payment during signup).
         */
        startTime?: string | null;
        /**
         * User profile associated with purchases made with 'Subscribe with Google'.
         */
        subscribeWithGoogleInfo?: Schema$SubscribeWithGoogleInfo;
        /**
         * The current state of the subscription.
         */
        subscriptionState?: string | null;
        /**
         * Only present if this subscription purchase is a test purchase.
         */
        testPurchase?: Schema$TestPurchase;
    }
    /**
     * Details about taxation, Google Play policy and legal compliance for subscription products.
     */
    export interface Schema$SubscriptionTaxAndComplianceSettings {
        /**
         * Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.
         */
        eeaWithdrawalRightType?: string | null;
        /**
         * Whether this subscription is declared as a product representing a tokenized digital asset.
         */
        isTokenizedDigitalAsset?: boolean | null;
        /**
         * A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR".
         */
        taxRateInfoByRegionCode?: {
            [key: string]: Schema$RegionalTaxRateInfo;
        } | null;
    }
    /**
     * Options for system APKs.
     */
    export interface Schema$SystemApkOptions {
        /**
         * Whether to use the rotated key for signing the system APK.
         */
        rotated?: boolean | null;
        /**
         * Whether system APK was generated with uncompressed dex files.
         */
        uncompressedDexFiles?: boolean | null;
        /**
         * Whether system APK was generated with uncompressed native libraries.
         */
        uncompressedNativeLibraries?: boolean | null;
    }
    /**
     * Response to list previously created system APK variants.
     */
    export interface Schema$SystemApksListResponse {
        /**
         * All system APK variants created.
         */
        variants?: Schema$Variant[];
    }
    /**
     * Representation of a system feature.
     */
    export interface Schema$SystemFeature {
        /**
         * The name of the feature.
         */
        name?: string | null;
    }
    /**
     * Information specific to cancellations initiated by Google system.
     */
    export interface Schema$SystemInitiatedCancellation {
    }
    /**
     * Targeting details for a recovery action such as regions, android sdk levels, app versions etc.
     */
    export interface Schema$Targeting {
        /**
         * All users are targeted.
         */
        allUsers?: Schema$AllUsers;
        /**
         * Targeting is based on android api levels of devices.
         */
        androidSdks?: Schema$AndroidSdks;
        /**
         * Targeting is based on the user account region.
         */
        regions?: Schema$Regions;
        /**
         * Target version codes as a list.
         */
        versionList?: Schema$AppVersionList;
        /**
         * Target version codes as a range.
         */
        versionRange?: Schema$AppVersionRange;
    }
    /**
     * Targeting information about the generated apks.
     */
    export interface Schema$TargetingInfo {
        /**
         * List of created asset slices.
         */
        assetSliceSet?: Schema$AssetSliceSet[];
        /**
         * The package name of this app.
         */
        packageName?: string | null;
        /**
         * List of the created variants.
         */
        variant?: Schema$SplitApkVariant[];
    }
    /**
     * Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.
     */
    export interface Schema$TargetingRuleScope {
        /**
         * The scope of the current targeting rule is any subscription in the parent app.
         */
        anySubscriptionInApp?: Schema$TargetingRuleScopeAnySubscriptionInApp;
        /**
         * The scope of the current targeting rule is the subscription with the specified subscription ID. Must be a subscription within the same parent app.
         */
        specificSubscriptionInApp?: string | null;
        /**
         * The scope of the current targeting rule is the subscription in which this offer is defined.
         */
        thisSubscription?: Schema$TargetingRuleScopeThisSubscription;
    }
    /**
     * Represents the targeting rule scope corresponding to any subscription in the parent app.
     */
    export interface Schema$TargetingRuleScopeAnySubscriptionInApp {
    }
    /**
     * Represents the targeting rule scope corresponding to the subscriptions in which this offer is defined.
     */
    export interface Schema$TargetingRuleScopeThisSubscription {
    }
    /**
     * Update type for targeting. Note it is always a subset Targeting.
     */
    export interface Schema$TargetingUpdate {
        /**
         * All users are targeted.
         */
        allUsers?: Schema$AllUsers;
        /**
         * Additional android sdk levels are targeted by the recovery action.
         */
        androidSdks?: Schema$AndroidSdks;
        /**
         * Additional regions are targeted by the recovery action.
         */
        regions?: Schema$Regions;
    }
    /**
     * The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.
     */
    export interface Schema$Testers {
        /**
         * All testing Google Groups, as email addresses.
         */
        googleGroups?: string[] | null;
    }
    /**
     * Whether this subscription purchase is a test purchase.
     */
    export interface Schema$TestPurchase {
    }
    /**
     * Represents texture compression format.
     */
    export interface Schema$TextureCompressionFormat {
        /**
         * Alias for texture compression format.
         */
        alias?: string | null;
    }
    /**
     * Targeting by a texture compression format.
     */
    export interface Schema$TextureCompressionFormatTargeting {
        /**
         * List of alternative TCFs (TCFs targeted by the sibling splits).
         */
        alternatives?: Schema$TextureCompressionFormat[];
        /**
         * The list of targeted TCFs. Should not be empty.
         */
        value?: Schema$TextureCompressionFormat[];
    }
    /**
     * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
     */
    export interface Schema$Timestamp {
        /**
         * Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive.
         */
        nanos?: number | null;
        /**
         * Represents seconds of UTC time since Unix epoch.
         */
        seconds?: string | null;
    }
    /**
     * Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page.
     */
    export interface Schema$TokenPagination {
        /**
         * Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index.
         */
        nextPageToken?: string | null;
        previousPageToken?: string | null;
    }
    /**
     * A track configuration. The resource for TracksService.
     */
    export interface Schema$Track {
        /**
         * In a read request, represents all active releases in the track. In an update request, represents desired changes.
         */
        releases?: Schema$TrackRelease[];
        /**
         * Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
         */
        track?: string | null;
    }
    /**
     * Configurations of the new track.
     */
    export interface Schema$TrackConfig {
        /**
         * Required. Form factor of the new track. Defaults to the default track.
         */
        formFactor?: string | null;
        /**
         * Required. Identifier of the new track. For default tracks, this field consists of the track alias only. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. This prefix must match the value of the `form_factor` field, if it is not a default track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
         */
        track?: string | null;
        /**
         * Required. Type of the new track. Currently, the only supported value is closedTesting.
         */
        type?: string | null;
    }
    /**
     * Resource for per-track country availability information.
     */
    export interface Schema$TrackCountryAvailability {
        /**
         * A list of one or more countries where artifacts in this track are available. This list includes all countries that are targeted by the track, even if only specific carriers are targeted in that country.
         */
        countries?: Schema$TrackTargetedCountry[];
        /**
         * Whether artifacts in this track are available to "rest of the world" countries.
         */
        restOfWorld?: boolean | null;
        /**
         * Whether this track's availability is synced with the default production track. See https://support.google.com/googleplay/android-developer/answer/7550024 for more information on syncing country availability with production. Note that if this is true, the returned "countries" and "rest_of_world" fields will reflect the values for the default production track.
         */
        syncWithProduction?: boolean | null;
    }
    /**
     * A release within a track.
     */
    export interface Schema$TrackRelease {
        /**
         * Restricts a release to a specific set of countries.
         */
        countryTargeting?: Schema$CountryTargeting;
        /**
         * In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates.
         */
        inAppUpdatePriority?: number | null;
        /**
         * The release name. Not required to be unique. If not set, the name is generated from the APK's version_name. If the release contains multiple APKs, the name is generated from the date.
         */
        name?: string | null;
        /**
         * A description of what is new in this release.
         */
        releaseNotes?: Schema$LocalizedText[];
        /**
         * The status of the release.
         */
        status?: string | null;
        /**
         * Fraction of users who are eligible for a staged release. 0 < fraction < 1. Can only be set when status is "inProgress" or "halted".
         */
        userFraction?: number | null;
        /**
         * Version codes of all APKs in the release. Must include version codes to retain from previous releases.
         */
        versionCodes?: string[] | null;
    }
    /**
     * Response listing all tracks.
     */
    export interface Schema$TracksListResponse {
        /**
         * The kind of this response ("androidpublisher#tracksListResponse").
         */
        kind?: string | null;
        /**
         * All tracks (including tracks with no releases).
         */
        tracks?: Schema$Track[];
    }
    /**
     * Representation of a single country where the contents of a track are available.
     */
    export interface Schema$TrackTargetedCountry {
        /**
         * The country to target, as a two-letter CLDR code.
         */
        countryCode?: string | null;
    }
    /**
     * Request message to update the state of a subscription base plan.
     */
    export interface Schema$UpdateBasePlanStateRequest {
        /**
         * Activates a base plan. Once activated, base plans will be available to new subscribers.
         */
        activateBasePlanRequest?: Schema$ActivateBasePlanRequest;
        /**
         * Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
         */
        deactivateBasePlanRequest?: Schema$DeactivateBasePlanRequest;
    }
    /**
     * Request message for UpdateSubscriptionOffer.
     */
    export interface Schema$UpdateSubscriptionOfferRequest {
        /**
         * Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored.
         */
        allowMissing?: boolean | null;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string | null;
        /**
         * Required. The version of the available regions being used for the subscription_offer.
         */
        regionsVersion?: Schema$RegionsVersion;
        /**
         * Required. The subscription offer to update.
         */
        subscriptionOffer?: Schema$SubscriptionOffer;
        /**
         * Required. The list of fields to be updated.
         */
        updateMask?: string | null;
    }
    /**
     * Request message to update the state of a subscription offer.
     */
    export interface Schema$UpdateSubscriptionOfferStateRequest {
        /**
         * Activates an offer. Once activated, the offer will be available to new subscribers.
         */
        activateSubscriptionOfferRequest?: Schema$ActivateSubscriptionOfferRequest;
        /**
         * Deactivates an offer. Once deactivated, the offer will become unavailable to new subscribers, but existing subscribers will maintain their subscription
         */
        deactivateSubscriptionOfferRequest?: Schema$DeactivateSubscriptionOfferRequest;
    }
    /**
     * Request message for UpdateSubscription.
     */
    export interface Schema$UpdateSubscriptionRequest {
        /**
         * Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored.
         */
        allowMissing?: boolean | null;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string | null;
        /**
         * Required. The version of the available regions being used for the subscription.
         */
        regionsVersion?: Schema$RegionsVersion;
        /**
         * Required. The subscription to update.
         */
        subscription?: Schema$Subscription;
        /**
         * Required. The list of fields to be updated.
         */
        updateMask?: string | null;
    }
    /**
     * Represents a targeting rule of the form: User currently has {scope\} [with billing period {billing_period\}].
     */
    export interface Schema$UpgradeTargetingRule {
        /**
         * The specific billing period duration, specified in ISO 8601 format, that a user must be currently subscribed to to be eligible for this rule. If not specified, users subscribed to any billing period are matched.
         */
        billingPeriodDuration?: string | null;
        /**
         * Limit this offer to only once per user. If set to true, a user can never be eligible for this offer again if they ever subscribed to this offer.
         */
        oncePerUser?: boolean | null;
        /**
         * Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "specific subscription in app".
         */
        scope?: Schema$TargetingRuleScope;
    }
    /**
     * A user resource.
     */
    export interface Schema$User {
        /**
         * Output only. The state of the user's access to the Play Console.
         */
        accessState?: string | null;
        /**
         * Permissions for the user which apply across the developer account.
         */
        developerAccountPermissions?: string[] | null;
        /**
         * Immutable. The user's email address.
         */
        email?: string | null;
        /**
         * The time at which the user's access expires, if set. When setting this value, it must always be in the future.
         */
        expirationTime?: string | null;
        /**
         * Output only. Per-app permissions for the user.
         */
        grants?: Schema$Grant[];
        /**
         * Required. Resource name for this user, following the pattern "developers/{developer\}/users/{email\}".
         */
        name?: string | null;
        /**
         * Output only. Whether there are more permissions for the user that are not represented here. This can happen if the caller does not have permission to manage all apps in the account. This is also `true` if this user is the account owner. If this field is `true`, it should be taken as a signal that this user cannot be fully managed via the API. That is, the API caller is not be able to manage all of the permissions this user holds, either because it doesn't know about them or because the user is the account owner.
         */
        partial?: boolean | null;
    }
    /**
     * User entry from conversation between user and developer.
     */
    export interface Schema$UserComment {
        /**
         * Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent.
         */
        androidOsVersion?: number | null;
        /**
         * Integer version code of the app as installed at the time the review was written. May be absent.
         */
        appVersionCode?: number | null;
        /**
         * String version name of the app as installed at the time the review was written. May be absent.
         */
        appVersionName?: string | null;
        /**
         * Codename for the reviewer's device, e.g. klte, flounder. May be absent.
         */
        device?: string | null;
        /**
         * Information about the characteristics of the user's device.
         */
        deviceMetadata?: Schema$DeviceMetadata;
        /**
         * The last time at which this comment was updated.
         */
        lastModified?: Schema$Timestamp;
        /**
         * Untranslated text of the review, where the review was translated. If the review was not translated this is left blank.
         */
        originalText?: string | null;
        /**
         * Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent.
         */
        reviewerLanguage?: string | null;
        /**
         * The star rating associated with the review, from 1 to 5.
         */
        starRating?: number | null;
        /**
         * The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character.
         */
        text?: string | null;
        /**
         * Number of users who have given this review a thumbs down.
         */
        thumbsDownCount?: number | null;
        /**
         * Number of users who have given this review a thumbs up.
         */
        thumbsUpCount?: number | null;
    }
    /**
     * Describes an inclusive/exclusive list of country codes that module targets.
     */
    export interface Schema$UserCountriesTargeting {
        /**
         * List of country codes in the two-letter CLDR territory format.
         */
        countryCodes?: string[] | null;
        /**
         * Indicates if the list above is exclusive.
         */
        exclude?: boolean | null;
    }
    /**
     * A set of user countries. A country set determines what variation of app content gets served to a specific location.
     */
    export interface Schema$UserCountrySet {
        /**
         * List of country codes representing countries. A Country code is represented in ISO 3166 alpha-2 format. For Example:- "IT" for Italy, "GE" for Georgia.
         */
        countryCodes?: string[] | null;
        /**
         * Country set name.
         */
        name?: string | null;
    }
    /**
     * Information specific to cancellations initiated by users.
     */
    export interface Schema$UserInitiatedCancellation {
        /**
         * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
         */
        cancelSurveyResult?: Schema$CancelSurveyResult;
        /**
         * The time at which the subscription was canceled by the user. The user might still have access to the subscription after this time. Use line_items.expiry_time to determine if a user still has access.
         */
        cancelTime?: string | null;
    }
    /**
     * A permission used by this APK.
     */
    export interface Schema$UsesPermission {
        /**
         * Optionally, the maximum SDK version for which the permission is required.
         */
        maxSdkVersion?: number | null;
        /**
         * The name of the permission requested.
         */
        name?: string | null;
    }
    /**
     * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
     */
    export interface Schema$Variant {
        /**
         * The device spec used to generate the APK.
         */
        deviceSpec?: Schema$DeviceSpec;
        /**
         * Optional. Options applied to the generated APK.
         */
        options?: Schema$SystemApkOptions;
        /**
         * Output only. The ID of a previously created system APK variant.
         */
        variantId?: number | null;
    }
    /**
     * Targeting on the level of variants.
     */
    export interface Schema$VariantTargeting {
        /**
         * The abi that the variant targets
         */
        abiTargeting?: Schema$AbiTargeting;
        /**
         * Multi-api-level targeting
         */
        multiAbiTargeting?: Schema$MultiAbiTargeting;
        /**
         * The screen densities that this variant supports
         */
        screenDensityTargeting?: Schema$ScreenDensityTargeting;
        /**
         * The sdk version that the variant targets
         */
        sdkVersionTargeting?: Schema$SdkVersionTargeting;
        /**
         * Texture-compression-format-level targeting
         */
        textureCompressionFormatTargeting?: Schema$TextureCompressionFormatTargeting;
    }
    /**
     * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
     */
    export interface Schema$VoidedPurchase {
        /**
         * This kind represents a voided purchase object in the androidpublisher service.
         */
        kind?: string | null;
        /**
         * The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal.
         */
        orderId?: string | null;
        /**
         * The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970).
         */
        purchaseTimeMillis?: string | null;
        /**
         * The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API).
         */
        purchaseToken?: string | null;
        /**
         * The voided quantity as the result of a quantity-based partial refund. Voided purchases of quantity-based partial refunds may only be returned when includeQuantityBasedPartialRefund is set to true.
         */
        voidedQuantity?: number | null;
        /**
         * The reason why the purchase was voided, possible values are: 0. Other 1. Remorse 2. Not_received 3. Defective 4. Accidental_purchase 5. Fraud 6. Friendly_fraud 7. Chargeback
         */
        voidedReason?: number | null;
        /**
         * The initiator of voided purchase, possible values are: 0. User 1. Developer 2. Google
         */
        voidedSource?: number | null;
        /**
         * The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).
         */
        voidedTimeMillis?: string | null;
    }
    /**
     * Response for the voidedpurchases.list API.
     */
    export interface Schema$VoidedPurchasesListResponse {
        /**
         * General pagination information.
         */
        pageInfo?: Schema$PageInfo;
        /**
         * Pagination information for token pagination.
         */
        tokenPagination?: Schema$TokenPagination;
        voidedPurchases?: Schema$VoidedPurchase[];
    }
    export class Resource$Applications {
        context: APIRequestContext;
        deviceTierConfigs: Resource$Applications$Devicetierconfigs;
        constructor(context: APIRequestContext);
        /**
         * Writes the Safety Labels declaration of an app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        dataSafety(params: Params$Resource$Applications$Datasafety, options: StreamMethodOptions): GaxiosPromise<Readable>;
        dataSafety(params?: Params$Resource$Applications$Datasafety, options?: MethodOptions): GaxiosPromise<Schema$SafetyLabelsUpdateResponse>;
        dataSafety(params: Params$Resource$Applications$Datasafety, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        dataSafety(params: Params$Resource$Applications$Datasafety, options: MethodOptions | BodyResponseCallback<Schema$SafetyLabelsUpdateResponse>, callback: BodyResponseCallback<Schema$SafetyLabelsUpdateResponse>): void;
        dataSafety(params: Params$Resource$Applications$Datasafety, callback: BodyResponseCallback<Schema$SafetyLabelsUpdateResponse>): void;
        dataSafety(callback: BodyResponseCallback<Schema$SafetyLabelsUpdateResponse>): void;
    }
    export interface Params$Resource$Applications$Datasafety extends StandardParameters {
        /**
         * Required. Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SafetyLabelsUpdateRequest;
    }
    export class Resource$Applications$Devicetierconfigs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new device tier config for an app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Applications$Devicetierconfigs$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Applications$Devicetierconfigs$Create, options?: MethodOptions): GaxiosPromise<Schema$DeviceTierConfig>;
        create(params: Params$Resource$Applications$Devicetierconfigs$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Applications$Devicetierconfigs$Create, options: MethodOptions | BodyResponseCallback<Schema$DeviceTierConfig>, callback: BodyResponseCallback<Schema$DeviceTierConfig>): void;
        create(params: Params$Resource$Applications$Devicetierconfigs$Create, callback: BodyResponseCallback<Schema$DeviceTierConfig>): void;
        create(callback: BodyResponseCallback<Schema$DeviceTierConfig>): void;
        /**
         * Returns a particular device tier config.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Applications$Devicetierconfigs$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Applications$Devicetierconfigs$Get, options?: MethodOptions): GaxiosPromise<Schema$DeviceTierConfig>;
        get(params: Params$Resource$Applications$Devicetierconfigs$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Applications$Devicetierconfigs$Get, options: MethodOptions | BodyResponseCallback<Schema$DeviceTierConfig>, callback: BodyResponseCallback<Schema$DeviceTierConfig>): void;
        get(params: Params$Resource$Applications$Devicetierconfigs$Get, callback: BodyResponseCallback<Schema$DeviceTierConfig>): void;
        get(callback: BodyResponseCallback<Schema$DeviceTierConfig>): void;
        /**
         * Returns created device tier configs, ordered by descending creation time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Applications$Devicetierconfigs$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Applications$Devicetierconfigs$List, options?: MethodOptions): GaxiosPromise<Schema$ListDeviceTierConfigsResponse>;
        list(params: Params$Resource$Applications$Devicetierconfigs$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Applications$Devicetierconfigs$List, options: MethodOptions | BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>, callback: BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>): void;
        list(params: Params$Resource$Applications$Devicetierconfigs$List, callback: BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDeviceTierConfigsResponse>): void;
    }
    export interface Params$Resource$Applications$Devicetierconfigs$Create extends StandardParameters {
        /**
         * Whether the service should accept device IDs that are unknown to Play's device catalog.
         */
        allowUnknownDevices?: boolean;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DeviceTierConfig;
    }
    export interface Params$Resource$Applications$Devicetierconfigs$Get extends StandardParameters {
        /**
         * Required. Id of an existing device tier config.
         */
        deviceTierConfigId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Applications$Devicetierconfigs$List extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string;
    }
    export class Resource$Apprecovery {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Incrementally update targeting for a recovery action. Note that only the criteria selected during the creation of recovery action can be expanded.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        addTargeting(params: Params$Resource$Apprecovery$Addtargeting, options: StreamMethodOptions): GaxiosPromise<Readable>;
        addTargeting(params?: Params$Resource$Apprecovery$Addtargeting, options?: MethodOptions): GaxiosPromise<Schema$AddTargetingResponse>;
        addTargeting(params: Params$Resource$Apprecovery$Addtargeting, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        addTargeting(params: Params$Resource$Apprecovery$Addtargeting, options: MethodOptions | BodyResponseCallback<Schema$AddTargetingResponse>, callback: BodyResponseCallback<Schema$AddTargetingResponse>): void;
        addTargeting(params: Params$Resource$Apprecovery$Addtargeting, callback: BodyResponseCallback<Schema$AddTargetingResponse>): void;
        addTargeting(callback: BodyResponseCallback<Schema$AddTargetingResponse>): void;
        /**
         * List all app recovery action resources associated with a particular package name and app version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        appRecoveries(params: Params$Resource$Apprecovery$Apprecoveries, options: StreamMethodOptions): GaxiosPromise<Readable>;
        appRecoveries(params?: Params$Resource$Apprecovery$Apprecoveries, options?: MethodOptions): GaxiosPromise<Schema$ListAppRecoveriesResponse>;
        appRecoveries(params: Params$Resource$Apprecovery$Apprecoveries, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        appRecoveries(params: Params$Resource$Apprecovery$Apprecoveries, options: MethodOptions | BodyResponseCallback<Schema$ListAppRecoveriesResponse>, callback: BodyResponseCallback<Schema$ListAppRecoveriesResponse>): void;
        appRecoveries(params: Params$Resource$Apprecovery$Apprecoveries, callback: BodyResponseCallback<Schema$ListAppRecoveriesResponse>): void;
        appRecoveries(callback: BodyResponseCallback<Schema$ListAppRecoveriesResponse>): void;
        /**
         * Cancel an already executing app recovery action. Note that this action changes status of the recovery action to CANCELED.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        cancel(params: Params$Resource$Apprecovery$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Apprecovery$Cancel, options?: MethodOptions): GaxiosPromise<Schema$CancelAppRecoveryResponse>;
        cancel(params: Params$Resource$Apprecovery$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Apprecovery$Cancel, options: MethodOptions | BodyResponseCallback<Schema$CancelAppRecoveryResponse>, callback: BodyResponseCallback<Schema$CancelAppRecoveryResponse>): void;
        cancel(params: Params$Resource$Apprecovery$Cancel, callback: BodyResponseCallback<Schema$CancelAppRecoveryResponse>): void;
        cancel(callback: BodyResponseCallback<Schema$CancelAppRecoveryResponse>): void;
        /**
         * Create an app recovery action with recovery status as DRAFT. Note that this action does not execute the recovery action.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Apprecovery$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Apprecovery$Create, options?: MethodOptions): GaxiosPromise<Schema$AppRecoveryAction>;
        create(params: Params$Resource$Apprecovery$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Apprecovery$Create, options: MethodOptions | BodyResponseCallback<Schema$AppRecoveryAction>, callback: BodyResponseCallback<Schema$AppRecoveryAction>): void;
        create(params: Params$Resource$Apprecovery$Create, callback: BodyResponseCallback<Schema$AppRecoveryAction>): void;
        create(callback: BodyResponseCallback<Schema$AppRecoveryAction>): void;
        /**
         * Deploy an already created app recovery action with recovery status DRAFT. Note that this action activates the recovery action for all targeted users and changes its status to ACTIVE.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        deploy(params: Params$Resource$Apprecovery$Deploy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        deploy(params?: Params$Resource$Apprecovery$Deploy, options?: MethodOptions): GaxiosPromise<Schema$DeployAppRecoveryResponse>;
        deploy(params: Params$Resource$Apprecovery$Deploy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        deploy(params: Params$Resource$Apprecovery$Deploy, options: MethodOptions | BodyResponseCallback<Schema$DeployAppRecoveryResponse>, callback: BodyResponseCallback<Schema$DeployAppRecoveryResponse>): void;
        deploy(params: Params$Resource$Apprecovery$Deploy, callback: BodyResponseCallback<Schema$DeployAppRecoveryResponse>): void;
        deploy(callback: BodyResponseCallback<Schema$DeployAppRecoveryResponse>): void;
    }
    export interface Params$Resource$Apprecovery$Addtargeting extends StandardParameters {
        /**
         * Required. ID corresponding to the app recovery action.
         */
        appRecoveryId?: string;
        /**
         * Required. Package name of the app for which recovery action is to be updated.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AddTargetingRequest;
    }
    export interface Params$Resource$Apprecovery$Apprecoveries extends StandardParameters {
        /**
         * Required. Package name of the app for which list of recovery actions is requested.
         */
        packageName?: string;
        /**
         * Required. Version code targeted by the list of recovery actions.
         */
        versionCode?: string;
    }
    export interface Params$Resource$Apprecovery$Cancel extends StandardParameters {
        /**
         * Required. ID corresponding to the app recovery action.
         */
        appRecoveryId?: string;
        /**
         * Required. Package name of the app for which recovery action cancellation is requested.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CancelAppRecoveryRequest;
    }
    export interface Params$Resource$Apprecovery$Create extends StandardParameters {
        /**
         * Required. Package name of the app on which recovery action is performed.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreateDraftAppRecoveryRequest;
    }
    export interface Params$Resource$Apprecovery$Deploy extends StandardParameters {
        /**
         * Required. ID corresponding to the app recovery action to deploy.
         */
        appRecoveryId?: string;
        /**
         * Required. Package name of the app for which recovery action is deployed.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DeployAppRecoveryRequest;
    }
    export class Resource$Edits {
        context: APIRequestContext;
        apks: Resource$Edits$Apks;
        bundles: Resource$Edits$Bundles;
        countryavailability: Resource$Edits$Countryavailability;
        deobfuscationfiles: Resource$Edits$Deobfuscationfiles;
        details: Resource$Edits$Details;
        expansionfiles: Resource$Edits$Expansionfiles;
        images: Resource$Edits$Images;
        listings: Resource$Edits$Listings;
        testers: Resource$Edits$Testers;
        tracks: Resource$Edits$Tracks;
        constructor(context: APIRequestContext);
        /**
         * Commits an app edit.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        commit(params: Params$Resource$Edits$Commit, options: StreamMethodOptions): GaxiosPromise<Readable>;
        commit(params?: Params$Resource$Edits$Commit, options?: MethodOptions): GaxiosPromise<Schema$AppEdit>;
        commit(params: Params$Resource$Edits$Commit, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        commit(params: Params$Resource$Edits$Commit, options: MethodOptions | BodyResponseCallback<Schema$AppEdit>, callback: BodyResponseCallback<Schema$AppEdit>): void;
        commit(params: Params$Resource$Edits$Commit, callback: BodyResponseCallback<Schema$AppEdit>): void;
        commit(callback: BodyResponseCallback<Schema$AppEdit>): void;
        /**
         * Deletes an app edit.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Edits$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Edits$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Edits$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Edits$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Edits$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets an app edit.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Edits$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Edits$Get, options?: MethodOptions): GaxiosPromise<Schema$AppEdit>;
        get(params: Params$Resource$Edits$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Edits$Get, options: MethodOptions | BodyResponseCallback<Schema$AppEdit>, callback: BodyResponseCallback<Schema$AppEdit>): void;
        get(params: Params$Resource$Edits$Get, callback: BodyResponseCallback<Schema$AppEdit>): void;
        get(callback: BodyResponseCallback<Schema$AppEdit>): void;
        /**
         * Creates a new edit for an app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Edits$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Edits$Insert, options?: MethodOptions): GaxiosPromise<Schema$AppEdit>;
        insert(params: Params$Resource$Edits$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Edits$Insert, options: MethodOptions | BodyResponseCallback<Schema$AppEdit>, callback: BodyResponseCallback<Schema$AppEdit>): void;
        insert(params: Params$Resource$Edits$Insert, callback: BodyResponseCallback<Schema$AppEdit>): void;
        insert(callback: BodyResponseCallback<Schema$AppEdit>): void;
        /**
         * Validates an app edit.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        validate(params: Params$Resource$Edits$Validate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        validate(params?: Params$Resource$Edits$Validate, options?: MethodOptions): GaxiosPromise<Schema$AppEdit>;
        validate(params: Params$Resource$Edits$Validate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        validate(params: Params$Resource$Edits$Validate, options: MethodOptions | BodyResponseCallback<Schema$AppEdit>, callback: BodyResponseCallback<Schema$AppEdit>): void;
        validate(params: Params$Resource$Edits$Validate, callback: BodyResponseCallback<Schema$AppEdit>): void;
        validate(callback: BodyResponseCallback<Schema$AppEdit>): void;
    }
    export interface Params$Resource$Edits$Commit extends StandardParameters {
        /**
         * Indicates that the changes in this edit will not be reviewed until they are explicitly sent for review from the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review.
         */
        changesNotSentForReview?: boolean;
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Delete extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Get extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Insert extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AppEdit;
    }
    export interface Params$Resource$Edits$Validate extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export class Resource$Edits$Apks {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        addexternallyhosted(params: Params$Resource$Edits$Apks$Addexternallyhosted, options: StreamMethodOptions): GaxiosPromise<Readable>;
        addexternallyhosted(params?: Params$Resource$Edits$Apks$Addexternallyhosted, options?: MethodOptions): GaxiosPromise<Schema$ApksAddExternallyHostedResponse>;
        addexternallyhosted(params: Params$Resource$Edits$Apks$Addexternallyhosted, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        addexternallyhosted(params: Params$Resource$Edits$Apks$Addexternallyhosted, options: MethodOptions | BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>, callback: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>): void;
        addexternallyhosted(params: Params$Resource$Edits$Apks$Addexternallyhosted, callback: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>): void;
        addexternallyhosted(callback: BodyResponseCallback<Schema$ApksAddExternallyHostedResponse>): void;
        /**
         * Lists all current APKs of the app and edit.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Edits$Apks$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Edits$Apks$List, options?: MethodOptions): GaxiosPromise<Schema$ApksListResponse>;
        list(params: Params$Resource$Edits$Apks$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Edits$Apks$List, options: MethodOptions | BodyResponseCallback<Schema$ApksListResponse>, callback: BodyResponseCallback<Schema$ApksListResponse>): void;
        list(params: Params$Resource$Edits$Apks$List, callback: BodyResponseCallback<Schema$ApksListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ApksListResponse>): void;
        /**
         * Uploads an APK and adds to the current edit.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        upload(params: Params$Resource$Edits$Apks$Upload, options: StreamMethodOptions): GaxiosPromise<Readable>;
        upload(params?: Params$Resource$Edits$Apks$Upload, options?: MethodOptions): GaxiosPromise<Schema$Apk>;
        upload(params: Params$Resource$Edits$Apks$Upload, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        upload(params: Params$Resource$Edits$Apks$Upload, options: MethodOptions | BodyResponseCallback<Schema$Apk>, callback: BodyResponseCallback<Schema$Apk>): void;
        upload(params: Params$Resource$Edits$Apks$Upload, callback: BodyResponseCallback<Schema$Apk>): void;
        upload(callback: BodyResponseCallback<Schema$Apk>): void;
    }
    export interface Params$Resource$Edits$Apks$Addexternallyhosted extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApksAddExternallyHostedRequest;
    }
    export interface Params$Resource$Edits$Apks$List extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Apks$Upload extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: {};
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export class Resource$Edits$Bundles {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Lists all current Android App Bundles of the app and edit.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Edits$Bundles$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Edits$Bundles$List, options?: MethodOptions): GaxiosPromise<Schema$BundlesListResponse>;
        list(params: Params$Resource$Edits$Bundles$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Edits$Bundles$List, options: MethodOptions | BodyResponseCallback<Schema$BundlesListResponse>, callback: BodyResponseCallback<Schema$BundlesListResponse>): void;
        list(params: Params$Resource$Edits$Bundles$List, callback: BodyResponseCallback<Schema$BundlesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$BundlesListResponse>): void;
        /**
         * Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        upload(params: Params$Resource$Edits$Bundles$Upload, options: StreamMethodOptions): GaxiosPromise<Readable>;
        upload(params?: Params$Resource$Edits$Bundles$Upload, options?: MethodOptions): GaxiosPromise<Schema$Bundle>;
        upload(params: Params$Resource$Edits$Bundles$Upload, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        upload(params: Params$Resource$Edits$Bundles$Upload, options: MethodOptions | BodyResponseCallback<Schema$Bundle>, callback: BodyResponseCallback<Schema$Bundle>): void;
        upload(params: Params$Resource$Edits$Bundles$Upload, callback: BodyResponseCallback<Schema$Bundle>): void;
        upload(callback: BodyResponseCallback<Schema$Bundle>): void;
    }
    export interface Params$Resource$Edits$Bundles$List extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Bundles$Upload extends StandardParameters {
        /**
         * Must be set to true if the app bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).
         */
        ackBundleInstallationWarning?: boolean;
        /**
         * Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC.
         */
        deviceTierConfigId?: string;
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: {};
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export class Resource$Edits$Countryavailability {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets country availability.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Edits$Countryavailability$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Edits$Countryavailability$Get, options?: MethodOptions): GaxiosPromise<Schema$TrackCountryAvailability>;
        get(params: Params$Resource$Edits$Countryavailability$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Edits$Countryavailability$Get, options: MethodOptions | BodyResponseCallback<Schema$TrackCountryAvailability>, callback: BodyResponseCallback<Schema$TrackCountryAvailability>): void;
        get(params: Params$Resource$Edits$Countryavailability$Get, callback: BodyResponseCallback<Schema$TrackCountryAvailability>): void;
        get(callback: BodyResponseCallback<Schema$TrackCountryAvailability>): void;
    }
    export interface Params$Resource$Edits$Countryavailability$Get extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The track to read from.
         */
        track?: string;
    }
    export class Resource$Edits$Deobfuscationfiles {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Uploads a new deobfuscation file and attaches to the specified APK.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        upload(params: Params$Resource$Edits$Deobfuscationfiles$Upload, options: StreamMethodOptions): GaxiosPromise<Readable>;
        upload(params?: Params$Resource$Edits$Deobfuscationfiles$Upload, options?: MethodOptions): GaxiosPromise<Schema$DeobfuscationFilesUploadResponse>;
        upload(params: Params$Resource$Edits$Deobfuscationfiles$Upload, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        upload(params: Params$Resource$Edits$Deobfuscationfiles$Upload, options: MethodOptions | BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>, callback: BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>): void;
        upload(params: Params$Resource$Edits$Deobfuscationfiles$Upload, callback: BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>): void;
        upload(callback: BodyResponseCallback<Schema$DeobfuscationFilesUploadResponse>): void;
    }
    export interface Params$Resource$Edits$Deobfuscationfiles$Upload extends StandardParameters {
        /**
         * The version code of the APK whose Deobfuscation File is being uploaded.
         */
        apkVersionCode?: number;
        /**
         * The type of the deobfuscation file.
         */
        deobfuscationFileType?: string;
        /**
         * Unique identifier for this edit.
         */
        editId?: string;
        /**
         * Unique identifier for the Android app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: {};
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export class Resource$Edits$Details {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets details of an app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Edits$Details$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Edits$Details$Get, options?: MethodOptions): GaxiosPromise<Schema$AppDetails>;
        get(params: Params$Resource$Edits$Details$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Edits$Details$Get, options: MethodOptions | BodyResponseCallback<Schema$AppDetails>, callback: BodyResponseCallback<Schema$AppDetails>): void;
        get(params: Params$Resource$Edits$Details$Get, callback: BodyResponseCallback<Schema$AppDetails>): void;
        get(callback: BodyResponseCallback<Schema$AppDetails>): void;
        /**
         * Patches details of an app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Edits$Details$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Edits$Details$Patch, options?: MethodOptions): GaxiosPromise<Schema$AppDetails>;
        patch(params: Params$Resource$Edits$Details$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Edits$Details$Patch, options: MethodOptions | BodyResponseCallback<Schema$AppDetails>, callback: BodyResponseCallback<Schema$AppDetails>): void;
        patch(params: Params$Resource$Edits$Details$Patch, callback: BodyResponseCallback<Schema$AppDetails>): void;
        patch(callback: BodyResponseCallback<Schema$AppDetails>): void;
        /**
         * Updates details of an app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Edits$Details$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Edits$Details$Update, options?: MethodOptions): GaxiosPromise<Schema$AppDetails>;
        update(params: Params$Resource$Edits$Details$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Edits$Details$Update, options: MethodOptions | BodyResponseCallback<Schema$AppDetails>, callback: BodyResponseCallback<Schema$AppDetails>): void;
        update(params: Params$Resource$Edits$Details$Update, callback: BodyResponseCallback<Schema$AppDetails>): void;
        update(callback: BodyResponseCallback<Schema$AppDetails>): void;
    }
    export interface Params$Resource$Edits$Details$Get extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Details$Patch extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AppDetails;
    }
    export interface Params$Resource$Edits$Details$Update extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AppDetails;
    }
    export class Resource$Edits$Expansionfiles {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Fetches the expansion file configuration for the specified APK.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Edits$Expansionfiles$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Edits$Expansionfiles$Get, options?: MethodOptions): GaxiosPromise<Schema$ExpansionFile>;
        get(params: Params$Resource$Edits$Expansionfiles$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Edits$Expansionfiles$Get, options: MethodOptions | BodyResponseCallback<Schema$ExpansionFile>, callback: BodyResponseCallback<Schema$ExpansionFile>): void;
        get(params: Params$Resource$Edits$Expansionfiles$Get, callback: BodyResponseCallback<Schema$ExpansionFile>): void;
        get(callback: BodyResponseCallback<Schema$ExpansionFile>): void;
        /**
         * Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Edits$Expansionfiles$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Edits$Expansionfiles$Patch, options?: MethodOptions): GaxiosPromise<Schema$ExpansionFile>;
        patch(params: Params$Resource$Edits$Expansionfiles$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Edits$Expansionfiles$Patch, options: MethodOptions | BodyResponseCallback<Schema$ExpansionFile>, callback: BodyResponseCallback<Schema$ExpansionFile>): void;
        patch(params: Params$Resource$Edits$Expansionfiles$Patch, callback: BodyResponseCallback<Schema$ExpansionFile>): void;
        patch(callback: BodyResponseCallback<Schema$ExpansionFile>): void;
        /**
         * Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Edits$Expansionfiles$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Edits$Expansionfiles$Update, options?: MethodOptions): GaxiosPromise<Schema$ExpansionFile>;
        update(params: Params$Resource$Edits$Expansionfiles$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Edits$Expansionfiles$Update, options: MethodOptions | BodyResponseCallback<Schema$ExpansionFile>, callback: BodyResponseCallback<Schema$ExpansionFile>): void;
        update(params: Params$Resource$Edits$Expansionfiles$Update, callback: BodyResponseCallback<Schema$ExpansionFile>): void;
        update(callback: BodyResponseCallback<Schema$ExpansionFile>): void;
        /**
         * Uploads a new expansion file and attaches to the specified APK.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        upload(params: Params$Resource$Edits$Expansionfiles$Upload, options: StreamMethodOptions): GaxiosPromise<Readable>;
        upload(params?: Params$Resource$Edits$Expansionfiles$Upload, options?: MethodOptions): GaxiosPromise<Schema$ExpansionFilesUploadResponse>;
        upload(params: Params$Resource$Edits$Expansionfiles$Upload, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        upload(params: Params$Resource$Edits$Expansionfiles$Upload, options: MethodOptions | BodyResponseCallback<Schema$ExpansionFilesUploadResponse>, callback: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>): void;
        upload(params: Params$Resource$Edits$Expansionfiles$Upload, callback: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>): void;
        upload(callback: BodyResponseCallback<Schema$ExpansionFilesUploadResponse>): void;
    }
    export interface Params$Resource$Edits$Expansionfiles$Get extends StandardParameters {
        /**
         * The version code of the APK whose expansion file configuration is being read or modified.
         */
        apkVersionCode?: number;
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * The file type of the file configuration which is being read or modified.
         */
        expansionFileType?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Expansionfiles$Patch extends StandardParameters {
        /**
         * The version code of the APK whose expansion file configuration is being read or modified.
         */
        apkVersionCode?: number;
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * The file type of the expansion file configuration which is being updated.
         */
        expansionFileType?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ExpansionFile;
    }
    export interface Params$Resource$Edits$Expansionfiles$Update extends StandardParameters {
        /**
         * The version code of the APK whose expansion file configuration is being read or modified.
         */
        apkVersionCode?: number;
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * The file type of the file configuration which is being read or modified.
         */
        expansionFileType?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ExpansionFile;
    }
    export interface Params$Resource$Edits$Expansionfiles$Upload extends StandardParameters {
        /**
         * The version code of the APK whose expansion file configuration is being read or modified.
         */
        apkVersionCode?: number;
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * The file type of the expansion file configuration which is being updated.
         */
        expansionFileType?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: {};
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export class Resource$Edits$Images {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes the image (specified by id) from the edit.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Edits$Images$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Edits$Images$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Edits$Images$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Edits$Images$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Edits$Images$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Deletes all images for the specified language and image type. Returns an empty response if no images are found.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        deleteall(params: Params$Resource$Edits$Images$Deleteall, options: StreamMethodOptions): GaxiosPromise<Readable>;
        deleteall(params?: Params$Resource$Edits$Images$Deleteall, options?: MethodOptions): GaxiosPromise<Schema$ImagesDeleteAllResponse>;
        deleteall(params: Params$Resource$Edits$Images$Deleteall, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        deleteall(params: Params$Resource$Edits$Images$Deleteall, options: MethodOptions | BodyResponseCallback<Schema$ImagesDeleteAllResponse>, callback: BodyResponseCallback<Schema$ImagesDeleteAllResponse>): void;
        deleteall(params: Params$Resource$Edits$Images$Deleteall, callback: BodyResponseCallback<Schema$ImagesDeleteAllResponse>): void;
        deleteall(callback: BodyResponseCallback<Schema$ImagesDeleteAllResponse>): void;
        /**
         * Lists all images. The response may be empty.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Edits$Images$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Edits$Images$List, options?: MethodOptions): GaxiosPromise<Schema$ImagesListResponse>;
        list(params: Params$Resource$Edits$Images$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Edits$Images$List, options: MethodOptions | BodyResponseCallback<Schema$ImagesListResponse>, callback: BodyResponseCallback<Schema$ImagesListResponse>): void;
        list(params: Params$Resource$Edits$Images$List, callback: BodyResponseCallback<Schema$ImagesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ImagesListResponse>): void;
        /**
         * Uploads an image of the specified language and image type, and adds to the edit.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        upload(params: Params$Resource$Edits$Images$Upload, options: StreamMethodOptions): GaxiosPromise<Readable>;
        upload(params?: Params$Resource$Edits$Images$Upload, options?: MethodOptions): GaxiosPromise<Schema$ImagesUploadResponse>;
        upload(params: Params$Resource$Edits$Images$Upload, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        upload(params: Params$Resource$Edits$Images$Upload, options: MethodOptions | BodyResponseCallback<Schema$ImagesUploadResponse>, callback: BodyResponseCallback<Schema$ImagesUploadResponse>): void;
        upload(params: Params$Resource$Edits$Images$Upload, callback: BodyResponseCallback<Schema$ImagesUploadResponse>): void;
        upload(callback: BodyResponseCallback<Schema$ImagesUploadResponse>): void;
    }
    export interface Params$Resource$Edits$Images$Delete extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Unique identifier an image within the set of images attached to this edit.
         */
        imageId?: string;
        /**
         * Type of the Image.
         */
        imageType?: string;
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
         */
        language?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Images$Deleteall extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Type of the Image. Providing an image type that refers to no images is a no-op.
         */
        imageType?: string;
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
         */
        language?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Images$List extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Type of the Image. Providing an image type that refers to no images will return an empty response.
         */
        imageType?: string;
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language.
         */
        language?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Images$Upload extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Type of the Image.
         */
        imageType?: string;
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
         */
        language?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: {};
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export class Resource$Edits$Listings {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes a localized store listing.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Edits$Listings$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Edits$Listings$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Edits$Listings$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Edits$Listings$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Edits$Listings$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Deletes all store listings.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        deleteall(params: Params$Resource$Edits$Listings$Deleteall, options: StreamMethodOptions): GaxiosPromise<Readable>;
        deleteall(params?: Params$Resource$Edits$Listings$Deleteall, options?: MethodOptions): GaxiosPromise<void>;
        deleteall(params: Params$Resource$Edits$Listings$Deleteall, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        deleteall(params: Params$Resource$Edits$Listings$Deleteall, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        deleteall(params: Params$Resource$Edits$Listings$Deleteall, callback: BodyResponseCallback<void>): void;
        deleteall(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a localized store listing.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Edits$Listings$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Edits$Listings$Get, options?: MethodOptions): GaxiosPromise<Schema$Listing>;
        get(params: Params$Resource$Edits$Listings$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Edits$Listings$Get, options: MethodOptions | BodyResponseCallback<Schema$Listing>, callback: BodyResponseCallback<Schema$Listing>): void;
        get(params: Params$Resource$Edits$Listings$Get, callback: BodyResponseCallback<Schema$Listing>): void;
        get(callback: BodyResponseCallback<Schema$Listing>): void;
        /**
         * Lists all localized store listings.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Edits$Listings$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Edits$Listings$List, options?: MethodOptions): GaxiosPromise<Schema$ListingsListResponse>;
        list(params: Params$Resource$Edits$Listings$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Edits$Listings$List, options: MethodOptions | BodyResponseCallback<Schema$ListingsListResponse>, callback: BodyResponseCallback<Schema$ListingsListResponse>): void;
        list(params: Params$Resource$Edits$Listings$List, callback: BodyResponseCallback<Schema$ListingsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListingsListResponse>): void;
        /**
         * Patches a localized store listing.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Edits$Listings$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Edits$Listings$Patch, options?: MethodOptions): GaxiosPromise<Schema$Listing>;
        patch(params: Params$Resource$Edits$Listings$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Edits$Listings$Patch, options: MethodOptions | BodyResponseCallback<Schema$Listing>, callback: BodyResponseCallback<Schema$Listing>): void;
        patch(params: Params$Resource$Edits$Listings$Patch, callback: BodyResponseCallback<Schema$Listing>): void;
        patch(callback: BodyResponseCallback<Schema$Listing>): void;
        /**
         * Creates or updates a localized store listing.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Edits$Listings$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Edits$Listings$Update, options?: MethodOptions): GaxiosPromise<Schema$Listing>;
        update(params: Params$Resource$Edits$Listings$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Edits$Listings$Update, options: MethodOptions | BodyResponseCallback<Schema$Listing>, callback: BodyResponseCallback<Schema$Listing>): void;
        update(params: Params$Resource$Edits$Listings$Update, callback: BodyResponseCallback<Schema$Listing>): void;
        update(callback: BodyResponseCallback<Schema$Listing>): void;
    }
    export interface Params$Resource$Edits$Listings$Delete extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
         */
        language?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Listings$Deleteall extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Listings$Get extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
         */
        language?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Listings$List extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Listings$Patch extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
         */
        language?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Listing;
    }
    export interface Params$Resource$Edits$Listings$Update extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
         */
        language?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Listing;
    }
    export class Resource$Edits$Testers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets testers. Note: Testers resource does not support email lists.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Edits$Testers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Edits$Testers$Get, options?: MethodOptions): GaxiosPromise<Schema$Testers>;
        get(params: Params$Resource$Edits$Testers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Edits$Testers$Get, options: MethodOptions | BodyResponseCallback<Schema$Testers>, callback: BodyResponseCallback<Schema$Testers>): void;
        get(params: Params$Resource$Edits$Testers$Get, callback: BodyResponseCallback<Schema$Testers>): void;
        get(callback: BodyResponseCallback<Schema$Testers>): void;
        /**
         * Patches testers. Note: Testers resource does not support email lists.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Edits$Testers$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Edits$Testers$Patch, options?: MethodOptions): GaxiosPromise<Schema$Testers>;
        patch(params: Params$Resource$Edits$Testers$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Edits$Testers$Patch, options: MethodOptions | BodyResponseCallback<Schema$Testers>, callback: BodyResponseCallback<Schema$Testers>): void;
        patch(params: Params$Resource$Edits$Testers$Patch, callback: BodyResponseCallback<Schema$Testers>): void;
        patch(callback: BodyResponseCallback<Schema$Testers>): void;
        /**
         * Updates testers. Note: Testers resource does not support email lists.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Edits$Testers$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Edits$Testers$Update, options?: MethodOptions): GaxiosPromise<Schema$Testers>;
        update(params: Params$Resource$Edits$Testers$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Edits$Testers$Update, options: MethodOptions | BodyResponseCallback<Schema$Testers>, callback: BodyResponseCallback<Schema$Testers>): void;
        update(params: Params$Resource$Edits$Testers$Update, callback: BodyResponseCallback<Schema$Testers>): void;
        update(callback: BodyResponseCallback<Schema$Testers>): void;
    }
    export interface Params$Resource$Edits$Testers$Get extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The track to read from.
         */
        track?: string;
    }
    export interface Params$Resource$Edits$Testers$Patch extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The track to update.
         */
        track?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Testers;
    }
    export interface Params$Resource$Edits$Testers$Update extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The track to update.
         */
        track?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Testers;
    }
    export class Resource$Edits$Tracks {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new track.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Edits$Tracks$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Edits$Tracks$Create, options?: MethodOptions): GaxiosPromise<Schema$Track>;
        create(params: Params$Resource$Edits$Tracks$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Edits$Tracks$Create, options: MethodOptions | BodyResponseCallback<Schema$Track>, callback: BodyResponseCallback<Schema$Track>): void;
        create(params: Params$Resource$Edits$Tracks$Create, callback: BodyResponseCallback<Schema$Track>): void;
        create(callback: BodyResponseCallback<Schema$Track>): void;
        /**
         * Gets a track.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Edits$Tracks$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Edits$Tracks$Get, options?: MethodOptions): GaxiosPromise<Schema$Track>;
        get(params: Params$Resource$Edits$Tracks$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Edits$Tracks$Get, options: MethodOptions | BodyResponseCallback<Schema$Track>, callback: BodyResponseCallback<Schema$Track>): void;
        get(params: Params$Resource$Edits$Tracks$Get, callback: BodyResponseCallback<Schema$Track>): void;
        get(callback: BodyResponseCallback<Schema$Track>): void;
        /**
         * Lists all tracks.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Edits$Tracks$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Edits$Tracks$List, options?: MethodOptions): GaxiosPromise<Schema$TracksListResponse>;
        list(params: Params$Resource$Edits$Tracks$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Edits$Tracks$List, options: MethodOptions | BodyResponseCallback<Schema$TracksListResponse>, callback: BodyResponseCallback<Schema$TracksListResponse>): void;
        list(params: Params$Resource$Edits$Tracks$List, callback: BodyResponseCallback<Schema$TracksListResponse>): void;
        list(callback: BodyResponseCallback<Schema$TracksListResponse>): void;
        /**
         * Patches a track.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Edits$Tracks$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Edits$Tracks$Patch, options?: MethodOptions): GaxiosPromise<Schema$Track>;
        patch(params: Params$Resource$Edits$Tracks$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Edits$Tracks$Patch, options: MethodOptions | BodyResponseCallback<Schema$Track>, callback: BodyResponseCallback<Schema$Track>): void;
        patch(params: Params$Resource$Edits$Tracks$Patch, callback: BodyResponseCallback<Schema$Track>): void;
        patch(callback: BodyResponseCallback<Schema$Track>): void;
        /**
         * Updates a track.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Edits$Tracks$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Edits$Tracks$Update, options?: MethodOptions): GaxiosPromise<Schema$Track>;
        update(params: Params$Resource$Edits$Tracks$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Edits$Tracks$Update, options: MethodOptions | BodyResponseCallback<Schema$Track>, callback: BodyResponseCallback<Schema$Track>): void;
        update(params: Params$Resource$Edits$Tracks$Update, callback: BodyResponseCallback<Schema$Track>): void;
        update(callback: BodyResponseCallback<Schema$Track>): void;
    }
    export interface Params$Resource$Edits$Tracks$Create extends StandardParameters {
        /**
         * Required. Identifier of the edit.
         */
        editId?: string;
        /**
         * Required. Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TrackConfig;
    }
    export interface Params$Resource$Edits$Tracks$Get extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
         */
        track?: string;
    }
    export interface Params$Resource$Edits$Tracks$List extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
    }
    export interface Params$Resource$Edits$Tracks$Patch extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
         */
        track?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Track;
    }
    export interface Params$Resource$Edits$Tracks$Update extends StandardParameters {
        /**
         * Identifier of the edit.
         */
        editId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
         */
        track?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Track;
    }
    export class Resource$Externaltransactions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new external transaction.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        createexternaltransaction(params: Params$Resource$Externaltransactions$Createexternaltransaction, options: StreamMethodOptions): GaxiosPromise<Readable>;
        createexternaltransaction(params?: Params$Resource$Externaltransactions$Createexternaltransaction, options?: MethodOptions): GaxiosPromise<Schema$ExternalTransaction>;
        createexternaltransaction(params: Params$Resource$Externaltransactions$Createexternaltransaction, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        createexternaltransaction(params: Params$Resource$Externaltransactions$Createexternaltransaction, options: MethodOptions | BodyResponseCallback<Schema$ExternalTransaction>, callback: BodyResponseCallback<Schema$ExternalTransaction>): void;
        createexternaltransaction(params: Params$Resource$Externaltransactions$Createexternaltransaction, callback: BodyResponseCallback<Schema$ExternalTransaction>): void;
        createexternaltransaction(callback: BodyResponseCallback<Schema$ExternalTransaction>): void;
        /**
         * Gets an existing external transaction.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getexternaltransaction(params: Params$Resource$Externaltransactions$Getexternaltransaction, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getexternaltransaction(params?: Params$Resource$Externaltransactions$Getexternaltransaction, options?: MethodOptions): GaxiosPromise<Schema$ExternalTransaction>;
        getexternaltransaction(params: Params$Resource$Externaltransactions$Getexternaltransaction, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getexternaltransaction(params: Params$Resource$Externaltransactions$Getexternaltransaction, options: MethodOptions | BodyResponseCallback<Schema$ExternalTransaction>, callback: BodyResponseCallback<Schema$ExternalTransaction>): void;
        getexternaltransaction(params: Params$Resource$Externaltransactions$Getexternaltransaction, callback: BodyResponseCallback<Schema$ExternalTransaction>): void;
        getexternaltransaction(callback: BodyResponseCallback<Schema$ExternalTransaction>): void;
        /**
         * Refunds or partially refunds an existing external transaction.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        refundexternaltransaction(params: Params$Resource$Externaltransactions$Refundexternaltransaction, options: StreamMethodOptions): GaxiosPromise<Readable>;
        refundexternaltransaction(params?: Params$Resource$Externaltransactions$Refundexternaltransaction, options?: MethodOptions): GaxiosPromise<Schema$ExternalTransaction>;
        refundexternaltransaction(params: Params$Resource$Externaltransactions$Refundexternaltransaction, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        refundexternaltransaction(params: Params$Resource$Externaltransactions$Refundexternaltransaction, options: MethodOptions | BodyResponseCallback<Schema$ExternalTransaction>, callback: BodyResponseCallback<Schema$ExternalTransaction>): void;
        refundexternaltransaction(params: Params$Resource$Externaltransactions$Refundexternaltransaction, callback: BodyResponseCallback<Schema$ExternalTransaction>): void;
        refundexternaltransaction(callback: BodyResponseCallback<Schema$ExternalTransaction>): void;
    }
    export interface Params$Resource$Externaltransactions$Createexternaltransaction extends StandardParameters {
        /**
         * Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-zA-Z0-9_-/. Do not use this field to store any Personally Identifiable Information (PII) such as emails. Attempting to store PII in this field may result in requests being blocked.
         */
        externalTransactionId?: string;
        /**
         * Required. The parent resource where this external transaction will be created. Format: applications/{package_name\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ExternalTransaction;
    }
    export interface Params$Resource$Externaltransactions$Getexternaltransaction extends StandardParameters {
        /**
         * Required. The name of the external transaction to retrieve. Format: applications/{package_name\}/externalTransactions/{external_transaction\}
         */
        name?: string;
    }
    export interface Params$Resource$Externaltransactions$Refundexternaltransaction extends StandardParameters {
        /**
         * Required. The name of the external transaction that will be refunded. Format: applications/{package_name\}/externalTransactions/{external_transaction\}
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RefundExternalTransactionRequest;
    }
    export class Resource$Generatedapks {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Downloads a single signed APK generated from an app bundle.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        download(params: Params$Resource$Generatedapks$Download, options: StreamMethodOptions): GaxiosPromise<Readable>;
        download(params?: Params$Resource$Generatedapks$Download, options?: MethodOptions): GaxiosPromise<unknown>;
        download(params: Params$Resource$Generatedapks$Download, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        download(params: Params$Resource$Generatedapks$Download, options: MethodOptions | BodyResponseCallback<unknown>, callback: BodyResponseCallback<unknown>): void;
        download(params: Params$Resource$Generatedapks$Download, callback: BodyResponseCallback<unknown>): void;
        download(callback: BodyResponseCallback<unknown>): void;
        /**
         * Returns download metadata for all APKs that were generated from a given app bundle.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Generatedapks$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Generatedapks$List, options?: MethodOptions): GaxiosPromise<Schema$GeneratedApksListResponse>;
        list(params: Params$Resource$Generatedapks$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Generatedapks$List, options: MethodOptions | BodyResponseCallback<Schema$GeneratedApksListResponse>, callback: BodyResponseCallback<Schema$GeneratedApksListResponse>): void;
        list(params: Params$Resource$Generatedapks$List, callback: BodyResponseCallback<Schema$GeneratedApksListResponse>): void;
        list(callback: BodyResponseCallback<Schema$GeneratedApksListResponse>): void;
    }
    export interface Params$Resource$Generatedapks$Download extends StandardParameters {
        /**
         * Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method.
         */
        downloadId?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Version code of the app bundle.
         */
        versionCode?: number;
    }
    export interface Params$Resource$Generatedapks$List extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Version code of the app bundle.
         */
        versionCode?: number;
    }
    export class Resource$Grants {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Grant access for a user to the given package.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Grants$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Grants$Create, options?: MethodOptions): GaxiosPromise<Schema$Grant>;
        create(params: Params$Resource$Grants$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Grants$Create, options: MethodOptions | BodyResponseCallback<Schema$Grant>, callback: BodyResponseCallback<Schema$Grant>): void;
        create(params: Params$Resource$Grants$Create, callback: BodyResponseCallback<Schema$Grant>): void;
        create(callback: BodyResponseCallback<Schema$Grant>): void;
        /**
         * Removes all access for the user to the given package or developer account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Grants$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Grants$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Grants$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Grants$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Grants$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Updates access for the user to the given package.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Grants$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Grants$Patch, options?: MethodOptions): GaxiosPromise<Schema$Grant>;
        patch(params: Params$Resource$Grants$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Grants$Patch, options: MethodOptions | BodyResponseCallback<Schema$Grant>, callback: BodyResponseCallback<Schema$Grant>): void;
        patch(params: Params$Resource$Grants$Patch, callback: BodyResponseCallback<Schema$Grant>): void;
        patch(callback: BodyResponseCallback<Schema$Grant>): void;
    }
    export interface Params$Resource$Grants$Create extends StandardParameters {
        /**
         * Required. The user which needs permission. Format: developers/{developer\}/users/{user\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Grant;
    }
    export interface Params$Resource$Grants$Delete extends StandardParameters {
        /**
         * Required. The name of the grant to delete. Format: developers/{developer\}/users/{email\}/grants/{package_name\}
         */
        name?: string;
    }
    export interface Params$Resource$Grants$Patch extends StandardParameters {
        /**
         * Required. Resource name for this grant, following the pattern "developers/{developer\}/users/{email\}/grants/{package_name\}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.
         */
        name?: string;
        /**
         * Optional. The list of fields to be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Grant;
    }
    export class Resource$Inappproducts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should not be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchDelete(params: Params$Resource$Inappproducts$Batchdelete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchDelete(params?: Params$Resource$Inappproducts$Batchdelete, options?: MethodOptions): GaxiosPromise<void>;
        batchDelete(params: Params$Resource$Inappproducts$Batchdelete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchDelete(params: Params$Resource$Inappproducts$Batchdelete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        batchDelete(params: Params$Resource$Inappproducts$Batchdelete, callback: BodyResponseCallback<void>): void;
        batchDelete(callback: BodyResponseCallback<void>): void;
        /**
         * Reads multiple in-app products, which can be managed products or subscriptions. This method should not be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchGet(params: Params$Resource$Inappproducts$Batchget, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchGet(params?: Params$Resource$Inappproducts$Batchget, options?: MethodOptions): GaxiosPromise<Schema$InappproductsBatchGetResponse>;
        batchGet(params: Params$Resource$Inappproducts$Batchget, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchGet(params: Params$Resource$Inappproducts$Batchget, options: MethodOptions | BodyResponseCallback<Schema$InappproductsBatchGetResponse>, callback: BodyResponseCallback<Schema$InappproductsBatchGetResponse>): void;
        batchGet(params: Params$Resource$Inappproducts$Batchget, callback: BodyResponseCallback<Schema$InappproductsBatchGetResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$InappproductsBatchGetResponse>): void;
        /**
         * Updates or inserts one or more in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchUpdate(params: Params$Resource$Inappproducts$Batchupdate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchUpdate(params?: Params$Resource$Inappproducts$Batchupdate, options?: MethodOptions): GaxiosPromise<Schema$InappproductsBatchUpdateResponse>;
        batchUpdate(params: Params$Resource$Inappproducts$Batchupdate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchUpdate(params: Params$Resource$Inappproducts$Batchupdate, options: MethodOptions | BodyResponseCallback<Schema$InappproductsBatchUpdateResponse>, callback: BodyResponseCallback<Schema$InappproductsBatchUpdateResponse>): void;
        batchUpdate(params: Params$Resource$Inappproducts$Batchupdate, callback: BodyResponseCallback<Schema$InappproductsBatchUpdateResponse>): void;
        batchUpdate(callback: BodyResponseCallback<Schema$InappproductsBatchUpdateResponse>): void;
        /**
         * Deletes an in-app product (a managed product or a subscription). This method should no longer be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Inappproducts$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Inappproducts$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Inappproducts$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Inappproducts$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Inappproducts$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets an in-app product, which can be a managed product or a subscription. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Inappproducts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Inappproducts$Get, options?: MethodOptions): GaxiosPromise<Schema$InAppProduct>;
        get(params: Params$Resource$Inappproducts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Inappproducts$Get, options: MethodOptions | BodyResponseCallback<Schema$InAppProduct>, callback: BodyResponseCallback<Schema$InAppProduct>): void;
        get(params: Params$Resource$Inappproducts$Get, callback: BodyResponseCallback<Schema$InAppProduct>): void;
        get(callback: BodyResponseCallback<Schema$InAppProduct>): void;
        /**
         * Creates an in-app product (a managed product or a subscription). This method should no longer be used to create subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Inappproducts$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Inappproducts$Insert, options?: MethodOptions): GaxiosPromise<Schema$InAppProduct>;
        insert(params: Params$Resource$Inappproducts$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Inappproducts$Insert, options: MethodOptions | BodyResponseCallback<Schema$InAppProduct>, callback: BodyResponseCallback<Schema$InAppProduct>): void;
        insert(params: Params$Resource$Inappproducts$Insert, callback: BodyResponseCallback<Schema$InAppProduct>): void;
        insert(callback: BodyResponseCallback<Schema$InAppProduct>): void;
        /**
         * Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Inappproducts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Inappproducts$List, options?: MethodOptions): GaxiosPromise<Schema$InappproductsListResponse>;
        list(params: Params$Resource$Inappproducts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Inappproducts$List, options: MethodOptions | BodyResponseCallback<Schema$InappproductsListResponse>, callback: BodyResponseCallback<Schema$InappproductsListResponse>): void;
        list(params: Params$Resource$Inappproducts$List, callback: BodyResponseCallback<Schema$InappproductsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$InappproductsListResponse>): void;
        /**
         * Patches an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Inappproducts$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Inappproducts$Patch, options?: MethodOptions): GaxiosPromise<Schema$InAppProduct>;
        patch(params: Params$Resource$Inappproducts$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Inappproducts$Patch, options: MethodOptions | BodyResponseCallback<Schema$InAppProduct>, callback: BodyResponseCallback<Schema$InAppProduct>): void;
        patch(params: Params$Resource$Inappproducts$Patch, callback: BodyResponseCallback<Schema$InAppProduct>): void;
        patch(callback: BodyResponseCallback<Schema$InAppProduct>): void;
        /**
         * Updates an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Inappproducts$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Inappproducts$Update, options?: MethodOptions): GaxiosPromise<Schema$InAppProduct>;
        update(params: Params$Resource$Inappproducts$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Inappproducts$Update, options: MethodOptions | BodyResponseCallback<Schema$InAppProduct>, callback: BodyResponseCallback<Schema$InAppProduct>): void;
        update(params: Params$Resource$Inappproducts$Update, callback: BodyResponseCallback<Schema$InAppProduct>): void;
        update(callback: BodyResponseCallback<Schema$InAppProduct>): void;
    }
    export interface Params$Resource$Inappproducts$Batchdelete extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InappproductsBatchDeleteRequest;
    }
    export interface Params$Resource$Inappproducts$Batchget extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Unique identifier for the in-app products.
         */
        sku?: string[];
    }
    export interface Params$Resource$Inappproducts$Batchupdate extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InappproductsBatchUpdateRequest;
    }
    export interface Params$Resource$Inappproducts$Delete extends StandardParameters {
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Unique identifier for the in-app product.
         */
        sku?: string;
    }
    export interface Params$Resource$Inappproducts$Get extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Unique identifier for the in-app product.
         */
        sku?: string;
    }
    export interface Params$Resource$Inappproducts$Insert extends StandardParameters {
        /**
         * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         */
        autoConvertMissingPrices?: boolean;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InAppProduct;
    }
    export interface Params$Resource$Inappproducts$List extends StandardParameters {
        /**
         * Deprecated and ignored. The page size is determined by the server.
         */
        maxResults?: number;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Deprecated and ignored. Set the `token` parameter to retrieve the next page.
         */
        startIndex?: number;
        /**
         * Pagination token. If empty, list starts at the first product.
         */
        token?: string;
    }
    export interface Params$Resource$Inappproducts$Patch extends StandardParameters {
        /**
         * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         */
        autoConvertMissingPrices?: boolean;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Unique identifier for the in-app product.
         */
        sku?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InAppProduct;
    }
    export interface Params$Resource$Inappproducts$Update extends StandardParameters {
        /**
         * If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created.
         */
        allowMissing?: boolean;
        /**
         * If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         */
        autoConvertMissingPrices?: boolean;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Unique identifier for the in-app product.
         */
        sku?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InAppProduct;
    }
    export class Resource$Internalappsharingartifacts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        uploadapk(params: Params$Resource$Internalappsharingartifacts$Uploadapk, options: StreamMethodOptions): GaxiosPromise<Readable>;
        uploadapk(params?: Params$Resource$Internalappsharingartifacts$Uploadapk, options?: MethodOptions): GaxiosPromise<Schema$InternalAppSharingArtifact>;
        uploadapk(params: Params$Resource$Internalappsharingartifacts$Uploadapk, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        uploadapk(params: Params$Resource$Internalappsharingartifacts$Uploadapk, options: MethodOptions | BodyResponseCallback<Schema$InternalAppSharingArtifact>, callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>): void;
        uploadapk(params: Params$Resource$Internalappsharingartifacts$Uploadapk, callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>): void;
        uploadapk(callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>): void;
        /**
         * Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        uploadbundle(params: Params$Resource$Internalappsharingartifacts$Uploadbundle, options: StreamMethodOptions): GaxiosPromise<Readable>;
        uploadbundle(params?: Params$Resource$Internalappsharingartifacts$Uploadbundle, options?: MethodOptions): GaxiosPromise<Schema$InternalAppSharingArtifact>;
        uploadbundle(params: Params$Resource$Internalappsharingartifacts$Uploadbundle, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        uploadbundle(params: Params$Resource$Internalappsharingartifacts$Uploadbundle, options: MethodOptions | BodyResponseCallback<Schema$InternalAppSharingArtifact>, callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>): void;
        uploadbundle(params: Params$Resource$Internalappsharingartifacts$Uploadbundle, callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>): void;
        uploadbundle(callback: BodyResponseCallback<Schema$InternalAppSharingArtifact>): void;
    }
    export interface Params$Resource$Internalappsharingartifacts$Uploadapk extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: {};
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export interface Params$Resource$Internalappsharingartifacts$Uploadbundle extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: {};
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export class Resource$Monetization {
        context: APIRequestContext;
        subscriptions: Resource$Monetization$Subscriptions;
        constructor(context: APIRequestContext);
        /**
         * Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        convertRegionPrices(params: Params$Resource$Monetization$Convertregionprices, options: StreamMethodOptions): GaxiosPromise<Readable>;
        convertRegionPrices(params?: Params$Resource$Monetization$Convertregionprices, options?: MethodOptions): GaxiosPromise<Schema$ConvertRegionPricesResponse>;
        convertRegionPrices(params: Params$Resource$Monetization$Convertregionprices, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        convertRegionPrices(params: Params$Resource$Monetization$Convertregionprices, options: MethodOptions | BodyResponseCallback<Schema$ConvertRegionPricesResponse>, callback: BodyResponseCallback<Schema$ConvertRegionPricesResponse>): void;
        convertRegionPrices(params: Params$Resource$Monetization$Convertregionprices, callback: BodyResponseCallback<Schema$ConvertRegionPricesResponse>): void;
        convertRegionPrices(callback: BodyResponseCallback<Schema$ConvertRegionPricesResponse>): void;
    }
    export interface Params$Resource$Monetization$Convertregionprices extends StandardParameters {
        /**
         * Required. The app package name.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ConvertRegionPricesRequest;
    }
    export class Resource$Monetization$Subscriptions {
        context: APIRequestContext;
        basePlans: Resource$Monetization$Subscriptions$Baseplans;
        constructor(context: APIRequestContext);
        /**
         * Deprecated: subscription archiving is not supported.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        archive(params: Params$Resource$Monetization$Subscriptions$Archive, options: StreamMethodOptions): GaxiosPromise<Readable>;
        archive(params?: Params$Resource$Monetization$Subscriptions$Archive, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        archive(params: Params$Resource$Monetization$Subscriptions$Archive, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        archive(params: Params$Resource$Monetization$Subscriptions$Archive, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        archive(params: Params$Resource$Monetization$Subscriptions$Archive, callback: BodyResponseCallback<Schema$Subscription>): void;
        archive(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * Reads one or more subscriptions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchGet(params: Params$Resource$Monetization$Subscriptions$Batchget, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchGet(params?: Params$Resource$Monetization$Subscriptions$Batchget, options?: MethodOptions): GaxiosPromise<Schema$BatchGetSubscriptionsResponse>;
        batchGet(params: Params$Resource$Monetization$Subscriptions$Batchget, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchGet(params: Params$Resource$Monetization$Subscriptions$Batchget, options: MethodOptions | BodyResponseCallback<Schema$BatchGetSubscriptionsResponse>, callback: BodyResponseCallback<Schema$BatchGetSubscriptionsResponse>): void;
        batchGet(params: Params$Resource$Monetization$Subscriptions$Batchget, callback: BodyResponseCallback<Schema$BatchGetSubscriptionsResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$BatchGetSubscriptionsResponse>): void;
        /**
         * Updates a batch of subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchUpdate(params: Params$Resource$Monetization$Subscriptions$Batchupdate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchUpdate(params?: Params$Resource$Monetization$Subscriptions$Batchupdate, options?: MethodOptions): GaxiosPromise<Schema$BatchUpdateSubscriptionsResponse>;
        batchUpdate(params: Params$Resource$Monetization$Subscriptions$Batchupdate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchUpdate(params: Params$Resource$Monetization$Subscriptions$Batchupdate, options: MethodOptions | BodyResponseCallback<Schema$BatchUpdateSubscriptionsResponse>, callback: BodyResponseCallback<Schema$BatchUpdateSubscriptionsResponse>): void;
        batchUpdate(params: Params$Resource$Monetization$Subscriptions$Batchupdate, callback: BodyResponseCallback<Schema$BatchUpdateSubscriptionsResponse>): void;
        batchUpdate(callback: BodyResponseCallback<Schema$BatchUpdateSubscriptionsResponse>): void;
        /**
         * Creates a new subscription. Newly added base plans will remain in draft state until activated.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Monetization$Subscriptions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Monetization$Subscriptions$Create, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        create(params: Params$Resource$Monetization$Subscriptions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Monetization$Subscriptions$Create, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        create(params: Params$Resource$Monetization$Subscriptions$Create, callback: BodyResponseCallback<Schema$Subscription>): void;
        create(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Monetization$Subscriptions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Monetization$Subscriptions$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Monetization$Subscriptions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Monetization$Subscriptions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Monetization$Subscriptions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Reads a single subscription.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Monetization$Subscriptions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Monetization$Subscriptions$Get, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        get(params: Params$Resource$Monetization$Subscriptions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Monetization$Subscriptions$Get, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        get(params: Params$Resource$Monetization$Subscriptions$Get, callback: BodyResponseCallback<Schema$Subscription>): void;
        get(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * Lists all subscriptions under a given app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Monetization$Subscriptions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Monetization$Subscriptions$List, options?: MethodOptions): GaxiosPromise<Schema$ListSubscriptionsResponse>;
        list(params: Params$Resource$Monetization$Subscriptions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Monetization$Subscriptions$List, options: MethodOptions | BodyResponseCallback<Schema$ListSubscriptionsResponse>, callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
        list(params: Params$Resource$Monetization$Subscriptions$List, callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
        /**
         * Updates an existing subscription.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Monetization$Subscriptions$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Monetization$Subscriptions$Patch, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        patch(params: Params$Resource$Monetization$Subscriptions$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Monetization$Subscriptions$Patch, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        patch(params: Params$Resource$Monetization$Subscriptions$Patch, callback: BodyResponseCallback<Schema$Subscription>): void;
        patch(callback: BodyResponseCallback<Schema$Subscription>): void;
    }
    export interface Params$Resource$Monetization$Subscriptions$Archive extends StandardParameters {
        /**
         * Required. The parent app (package name) of the app of the subscription to delete.
         */
        packageName?: string;
        /**
         * Required. The unique product ID of the subscription to delete.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ArchiveSubscriptionRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Batchget extends StandardParameters {
        /**
         * Required. The parent app (package name) for which the subscriptions should be retrieved. Must be equal to the package_name field on all the requests.
         */
        packageName?: string;
        /**
         * Required. A list of up to 100 subscription product IDs to retrieve. All the IDs must be different.
         */
        productIds?: string[];
    }
    export interface Params$Resource$Monetization$Subscriptions$Batchupdate extends StandardParameters {
        /**
         * Required. The parent app (package name) for which the subscriptions should be updated. Must be equal to the package_name field on all the Subscription resources.
         */
        packageName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchUpdateSubscriptionsRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Create extends StandardParameters {
        /**
         * Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource.
         */
        packageName?: string;
        /**
         * Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource.
         */
        productId?: string;
        /**
         * Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02.
         */
        'regionsVersion.version'?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Subscription;
    }
    export interface Params$Resource$Monetization$Subscriptions$Delete extends StandardParameters {
        /**
         * Required. The parent app (package name) of the app of the subscription to delete.
         */
        packageName?: string;
        /**
         * Required. The unique product ID of the subscription to delete.
         */
        productId?: string;
    }
    export interface Params$Resource$Monetization$Subscriptions$Get extends StandardParameters {
        /**
         * Required. The parent app (package name) of the subscription to get.
         */
        packageName?: string;
        /**
         * Required. The unique product ID of the subscription to get.
         */
        productId?: string;
    }
    export interface Params$Resource$Monetization$Subscriptions$List extends StandardParameters {
        /**
         * Required. The parent app (package name) for which the subscriptions should be read.
         */
        packageName?: string;
        /**
         * The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Deprecated: subscription archiving is not supported.
         */
        showArchived?: boolean;
    }
    export interface Params$Resource$Monetization$Subscriptions$Patch extends StandardParameters {
        /**
         * Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored.
         */
        allowMissing?: boolean;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string;
        /**
         * Immutable. Package name of the parent app.
         */
        packageName?: string;
        /**
         * Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
         */
        productId?: string;
        /**
         * Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02.
         */
        'regionsVersion.version'?: string;
        /**
         * Required. The list of fields to be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Subscription;
    }
    export class Resource$Monetization$Subscriptions$Baseplans {
        context: APIRequestContext;
        offers: Resource$Monetization$Subscriptions$Baseplans$Offers;
        constructor(context: APIRequestContext);
        /**
         * Activates a base plan. Once activated, base plans will be available to new subscribers.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        activate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Activate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        activate(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Activate, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        activate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Activate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        activate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Activate, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        activate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Activate, callback: BodyResponseCallback<Schema$Subscription>): void;
        activate(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * Batch variant of the MigrateBasePlanPrices endpoint. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchMigratePrices(params: Params$Resource$Monetization$Subscriptions$Baseplans$Batchmigrateprices, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchMigratePrices(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Batchmigrateprices, options?: MethodOptions): GaxiosPromise<Schema$BatchMigrateBasePlanPricesResponse>;
        batchMigratePrices(params: Params$Resource$Monetization$Subscriptions$Baseplans$Batchmigrateprices, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchMigratePrices(params: Params$Resource$Monetization$Subscriptions$Baseplans$Batchmigrateprices, options: MethodOptions | BodyResponseCallback<Schema$BatchMigrateBasePlanPricesResponse>, callback: BodyResponseCallback<Schema$BatchMigrateBasePlanPricesResponse>): void;
        batchMigratePrices(params: Params$Resource$Monetization$Subscriptions$Baseplans$Batchmigrateprices, callback: BodyResponseCallback<Schema$BatchMigrateBasePlanPricesResponse>): void;
        batchMigratePrices(callback: BodyResponseCallback<Schema$BatchMigrateBasePlanPricesResponse>): void;
        /**
         * Activates or deactivates base plans across one or multiple subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchUpdateStates(params: Params$Resource$Monetization$Subscriptions$Baseplans$Batchupdatestates, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchUpdateStates(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Batchupdatestates, options?: MethodOptions): GaxiosPromise<Schema$BatchUpdateBasePlanStatesResponse>;
        batchUpdateStates(params: Params$Resource$Monetization$Subscriptions$Baseplans$Batchupdatestates, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchUpdateStates(params: Params$Resource$Monetization$Subscriptions$Baseplans$Batchupdatestates, options: MethodOptions | BodyResponseCallback<Schema$BatchUpdateBasePlanStatesResponse>, callback: BodyResponseCallback<Schema$BatchUpdateBasePlanStatesResponse>): void;
        batchUpdateStates(params: Params$Resource$Monetization$Subscriptions$Baseplans$Batchupdatestates, callback: BodyResponseCallback<Schema$BatchUpdateBasePlanStatesResponse>): void;
        batchUpdateStates(callback: BodyResponseCallback<Schema$BatchUpdateBasePlanStatesResponse>): void;
        /**
         * Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        deactivate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        deactivate(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        deactivate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        deactivate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        deactivate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate, callback: BodyResponseCallback<Schema$Subscription>): void;
        deactivate(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Monetization$Subscriptions$Baseplans$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Monetization$Subscriptions$Baseplans$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Monetization$Subscriptions$Baseplans$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Monetization$Subscriptions$Baseplans$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        migratePrices(params: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices, options: StreamMethodOptions): GaxiosPromise<Readable>;
        migratePrices(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices, options?: MethodOptions): GaxiosPromise<Schema$MigrateBasePlanPricesResponse>;
        migratePrices(params: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        migratePrices(params: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices, options: MethodOptions | BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>, callback: BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>): void;
        migratePrices(params: Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices, callback: BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>): void;
        migratePrices(callback: BodyResponseCallback<Schema$MigrateBasePlanPricesResponse>): void;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Activate extends StandardParameters {
        /**
         * Required. The unique base plan ID of the base plan to activate.
         */
        basePlanId?: string;
        /**
         * Required. The parent app (package name) of the base plan to activate.
         */
        packageName?: string;
        /**
         * Required. The parent subscription (ID) of the base plan to activate.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ActivateBasePlanRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Batchmigrateprices extends StandardParameters {
        /**
         * Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the Subscription resources.
         */
        packageName?: string;
        /**
         * Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchMigrateBasePlanPricesRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Batchupdatestates extends StandardParameters {
        /**
         * Required. The parent app (package name) of the updated base plans.
         */
        packageName?: string;
        /**
         * Required. The product ID of the parent subscription, if all updated base plans belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchUpdateBasePlanStatesRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Deactivate extends StandardParameters {
        /**
         * Required. The unique base plan ID of the base plan to deactivate.
         */
        basePlanId?: string;
        /**
         * Required. The parent app (package name) of the base plan to deactivate.
         */
        packageName?: string;
        /**
         * Required. The parent subscription (ID) of the base plan to deactivate.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DeactivateBasePlanRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Delete extends StandardParameters {
        /**
         * Required. The unique offer ID of the base plan to delete.
         */
        basePlanId?: string;
        /**
         * Required. The parent app (package name) of the base plan to delete.
         */
        packageName?: string;
        /**
         * Required. The parent subscription (ID) of the base plan to delete.
         */
        productId?: string;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Migrateprices extends StandardParameters {
        /**
         * Required. The unique base plan ID of the base plan to update prices on.
         */
        basePlanId?: string;
        /**
         * Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource.
         */
        packageName?: string;
        /**
         * Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$MigrateBasePlanPricesRequest;
    }
    export class Resource$Monetization$Subscriptions$Baseplans$Offers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        activate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        activate(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate, options?: MethodOptions): GaxiosPromise<Schema$SubscriptionOffer>;
        activate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        activate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate, options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        activate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        activate(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        /**
         * Reads one or more subscription offers.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchGet(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchget, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchGet(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchget, options?: MethodOptions): GaxiosPromise<Schema$BatchGetSubscriptionOffersResponse>;
        batchGet(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchget, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchGet(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchget, options: MethodOptions | BodyResponseCallback<Schema$BatchGetSubscriptionOffersResponse>, callback: BodyResponseCallback<Schema$BatchGetSubscriptionOffersResponse>): void;
        batchGet(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchget, callback: BodyResponseCallback<Schema$BatchGetSubscriptionOffersResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$BatchGetSubscriptionOffersResponse>): void;
        /**
         * Updates a batch of subscription offers. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchUpdate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchUpdate(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdate, options?: MethodOptions): GaxiosPromise<Schema$BatchUpdateSubscriptionOffersResponse>;
        batchUpdate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchUpdate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdate, options: MethodOptions | BodyResponseCallback<Schema$BatchUpdateSubscriptionOffersResponse>, callback: BodyResponseCallback<Schema$BatchUpdateSubscriptionOffersResponse>): void;
        batchUpdate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdate, callback: BodyResponseCallback<Schema$BatchUpdateSubscriptionOffersResponse>): void;
        batchUpdate(callback: BodyResponseCallback<Schema$BatchUpdateSubscriptionOffersResponse>): void;
        /**
         * Updates a batch of subscription offer states. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchUpdateStates(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdatestates, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchUpdateStates(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdatestates, options?: MethodOptions): GaxiosPromise<Schema$BatchUpdateSubscriptionOfferStatesResponse>;
        batchUpdateStates(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdatestates, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchUpdateStates(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdatestates, options: MethodOptions | BodyResponseCallback<Schema$BatchUpdateSubscriptionOfferStatesResponse>, callback: BodyResponseCallback<Schema$BatchUpdateSubscriptionOfferStatesResponse>): void;
        batchUpdateStates(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdatestates, callback: BodyResponseCallback<Schema$BatchUpdateSubscriptionOfferStatesResponse>): void;
        batchUpdateStates(callback: BodyResponseCallback<Schema$BatchUpdateSubscriptionOfferStatesResponse>): void;
        /**
         * Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create, options?: MethodOptions): GaxiosPromise<Schema$SubscriptionOffer>;
        create(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create, options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        create(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        create(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        /**
         * Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        deactivate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        deactivate(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate, options?: MethodOptions): GaxiosPromise<Schema$SubscriptionOffer>;
        deactivate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        deactivate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate, options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        deactivate(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        deactivate(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        /**
         * Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Reads a single offer
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get, options?: MethodOptions): GaxiosPromise<Schema$SubscriptionOffer>;
        get(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get, options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        get(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        get(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        /**
         * Lists all offers under a given subscription.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List, options?: MethodOptions): GaxiosPromise<Schema$ListSubscriptionOffersResponse>;
        list(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List, options: MethodOptions | BodyResponseCallback<Schema$ListSubscriptionOffersResponse>, callback: BodyResponseCallback<Schema$ListSubscriptionOffersResponse>): void;
        list(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List, callback: BodyResponseCallback<Schema$ListSubscriptionOffersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListSubscriptionOffersResponse>): void;
        /**
         * Updates an existing subscription offer.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch, options?: MethodOptions): GaxiosPromise<Schema$SubscriptionOffer>;
        patch(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch, options: MethodOptions | BodyResponseCallback<Schema$SubscriptionOffer>, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        patch(params: Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch, callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
        patch(callback: BodyResponseCallback<Schema$SubscriptionOffer>): void;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Activate extends StandardParameters {
        /**
         * Required. The parent base plan (ID) of the offer to activate.
         */
        basePlanId?: string;
        /**
         * Required. The unique offer ID of the offer to activate.
         */
        offerId?: string;
        /**
         * Required. The parent app (package name) of the offer to activate.
         */
        packageName?: string;
        /**
         * Required. The parent subscription (ID) of the offer to activate.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ActivateSubscriptionOfferRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchget extends StandardParameters {
        /**
         * Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read offers from multiple base plans.
         */
        basePlanId?: string;
        /**
         * Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the requests.
         */
        packageName?: string;
        /**
         * Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchGetSubscriptionOffersRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdate extends StandardParameters {
        /**
         * Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans.
         */
        basePlanId?: string;
        /**
         * Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources.
         */
        packageName?: string;
        /**
         * Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchUpdateSubscriptionOffersRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Batchupdatestates extends StandardParameters {
        /**
         * Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans.
         */
        basePlanId?: string;
        /**
         * Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources.
         */
        packageName?: string;
        /**
         * Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchUpdateSubscriptionOfferStatesRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Create extends StandardParameters {
        /**
         * Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource.
         */
        basePlanId?: string;
        /**
         * Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource.
         */
        offerId?: string;
        /**
         * Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource.
         */
        packageName?: string;
        /**
         * Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource.
         */
        productId?: string;
        /**
         * Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02.
         */
        'regionsVersion.version'?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SubscriptionOffer;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Deactivate extends StandardParameters {
        /**
         * Required. The parent base plan (ID) of the offer to deactivate.
         */
        basePlanId?: string;
        /**
         * Required. The unique offer ID of the offer to deactivate.
         */
        offerId?: string;
        /**
         * Required. The parent app (package name) of the offer to deactivate.
         */
        packageName?: string;
        /**
         * Required. The parent subscription (ID) of the offer to deactivate.
         */
        productId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DeactivateSubscriptionOfferRequest;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Delete extends StandardParameters {
        /**
         * Required. The parent base plan (ID) of the offer to delete.
         */
        basePlanId?: string;
        /**
         * Required. The unique offer ID of the offer to delete.
         */
        offerId?: string;
        /**
         * Required. The parent app (package name) of the offer to delete.
         */
        packageName?: string;
        /**
         * Required. The parent subscription (ID) of the offer to delete.
         */
        productId?: string;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Get extends StandardParameters {
        /**
         * Required. The parent base plan (ID) of the offer to get.
         */
        basePlanId?: string;
        /**
         * Required. The unique offer ID of the offer to get.
         */
        offerId?: string;
        /**
         * Required. The parent app (package name) of the offer to get.
         */
        packageName?: string;
        /**
         * Required. The parent subscription (ID) of the offer to get.
         */
        productId?: string;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$List extends StandardParameters {
        /**
         * Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription or an app. Must be specified as '-' if product_id is specified as '-'.
         */
        basePlanId?: string;
        /**
         * Required. The parent app (package name) for which the subscriptions should be read.
         */
        packageName?: string;
        /**
         * The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent subscription (ID) for which the offers should be read. May be specified as '-' to read all offers under an app.
         */
        productId?: string;
    }
    export interface Params$Resource$Monetization$Subscriptions$Baseplans$Offers$Patch extends StandardParameters {
        /**
         * Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored.
         */
        allowMissing?: boolean;
        /**
         * Required. Immutable. The ID of the base plan to which this offer is an extension.
         */
        basePlanId?: string;
        /**
         * Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
         */
        latencyTolerance?: string;
        /**
         * Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
         */
        offerId?: string;
        /**
         * Required. Immutable. The package name of the app the parent subscription belongs to.
         */
        packageName?: string;
        /**
         * Required. Immutable. The ID of the parent subscription this offer belongs to.
         */
        productId?: string;
        /**
         * Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02.
         */
        'regionsVersion.version'?: string;
        /**
         * Required. The list of fields to be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SubscriptionOffer;
    }
    export class Resource$Orders {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Refunds a user's subscription or in-app purchase order. Orders older than 3 years cannot be refunded.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        refund(params: Params$Resource$Orders$Refund, options: StreamMethodOptions): GaxiosPromise<Readable>;
        refund(params?: Params$Resource$Orders$Refund, options?: MethodOptions): GaxiosPromise<void>;
        refund(params: Params$Resource$Orders$Refund, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        refund(params: Params$Resource$Orders$Refund, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        refund(params: Params$Resource$Orders$Refund, callback: BodyResponseCallback<void>): void;
        refund(callback: BodyResponseCallback<void>): void;
    }
    export interface Params$Resource$Orders$Refund extends StandardParameters {
        /**
         * The order ID provided to the user when the subscription or in-app order was purchased.
         */
        orderId?: string;
        /**
         * The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional).
         */
        revoke?: boolean;
    }
    export class Resource$Purchases {
        context: APIRequestContext;
        products: Resource$Purchases$Products;
        subscriptions: Resource$Purchases$Subscriptions;
        subscriptionsv2: Resource$Purchases$Subscriptionsv2;
        voidedpurchases: Resource$Purchases$Voidedpurchases;
        constructor(context: APIRequestContext);
    }
    export class Resource$Purchases$Products {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Acknowledges a purchase of an inapp item.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        acknowledge(params: Params$Resource$Purchases$Products$Acknowledge, options: StreamMethodOptions): GaxiosPromise<Readable>;
        acknowledge(params?: Params$Resource$Purchases$Products$Acknowledge, options?: MethodOptions): GaxiosPromise<void>;
        acknowledge(params: Params$Resource$Purchases$Products$Acknowledge, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        acknowledge(params: Params$Resource$Purchases$Products$Acknowledge, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        acknowledge(params: Params$Resource$Purchases$Products$Acknowledge, callback: BodyResponseCallback<void>): void;
        acknowledge(callback: BodyResponseCallback<void>): void;
        /**
         * Consumes a purchase for an inapp item.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        consume(params: Params$Resource$Purchases$Products$Consume, options: StreamMethodOptions): GaxiosPromise<Readable>;
        consume(params?: Params$Resource$Purchases$Products$Consume, options?: MethodOptions): GaxiosPromise<void>;
        consume(params: Params$Resource$Purchases$Products$Consume, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        consume(params: Params$Resource$Purchases$Products$Consume, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        consume(params: Params$Resource$Purchases$Products$Consume, callback: BodyResponseCallback<void>): void;
        consume(callback: BodyResponseCallback<void>): void;
        /**
         * Checks the purchase and consumption status of an inapp item.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Purchases$Products$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Purchases$Products$Get, options?: MethodOptions): GaxiosPromise<Schema$ProductPurchase>;
        get(params: Params$Resource$Purchases$Products$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Purchases$Products$Get, options: MethodOptions | BodyResponseCallback<Schema$ProductPurchase>, callback: BodyResponseCallback<Schema$ProductPurchase>): void;
        get(params: Params$Resource$Purchases$Products$Get, callback: BodyResponseCallback<Schema$ProductPurchase>): void;
        get(callback: BodyResponseCallback<Schema$ProductPurchase>): void;
    }
    export interface Params$Resource$Purchases$Products$Acknowledge extends StandardParameters {
        /**
         * The package name of the application the inapp product was sold in (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The inapp product SKU (for example, 'com.some.thing.inapp1').
         */
        productId?: string;
        /**
         * The token provided to the user's device when the inapp product was purchased.
         */
        token?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ProductPurchasesAcknowledgeRequest;
    }
    export interface Params$Resource$Purchases$Products$Consume extends StandardParameters {
        /**
         * The package name of the application the inapp product was sold in (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The inapp product SKU (for example, 'com.some.thing.inapp1').
         */
        productId?: string;
        /**
         * The token provided to the user's device when the inapp product was purchased.
         */
        token?: string;
    }
    export interface Params$Resource$Purchases$Products$Get extends StandardParameters {
        /**
         * The package name of the application the inapp product was sold in (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The inapp product SKU (for example, 'com.some.thing.inapp1').
         */
        productId?: string;
        /**
         * The token provided to the user's device when the inapp product was purchased.
         */
        token?: string;
    }
    export class Resource$Purchases$Subscriptions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Acknowledges a subscription purchase.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        acknowledge(params: Params$Resource$Purchases$Subscriptions$Acknowledge, options: StreamMethodOptions): GaxiosPromise<Readable>;
        acknowledge(params?: Params$Resource$Purchases$Subscriptions$Acknowledge, options?: MethodOptions): GaxiosPromise<void>;
        acknowledge(params: Params$Resource$Purchases$Subscriptions$Acknowledge, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        acknowledge(params: Params$Resource$Purchases$Subscriptions$Acknowledge, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        acknowledge(params: Params$Resource$Purchases$Subscriptions$Acknowledge, callback: BodyResponseCallback<void>): void;
        acknowledge(callback: BodyResponseCallback<void>): void;
        /**
         * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        cancel(params: Params$Resource$Purchases$Subscriptions$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Purchases$Subscriptions$Cancel, options?: MethodOptions): GaxiosPromise<void>;
        cancel(params: Params$Resource$Purchases$Subscriptions$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Purchases$Subscriptions$Cancel, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        cancel(params: Params$Resource$Purchases$Subscriptions$Cancel, callback: BodyResponseCallback<void>): void;
        cancel(callback: BodyResponseCallback<void>): void;
        /**
         * Defers a user's subscription purchase until a specified future expiration time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        defer(params: Params$Resource$Purchases$Subscriptions$Defer, options: StreamMethodOptions): GaxiosPromise<Readable>;
        defer(params?: Params$Resource$Purchases$Subscriptions$Defer, options?: MethodOptions): GaxiosPromise<Schema$SubscriptionPurchasesDeferResponse>;
        defer(params: Params$Resource$Purchases$Subscriptions$Defer, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        defer(params: Params$Resource$Purchases$Subscriptions$Defer, options: MethodOptions | BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>, callback: BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>): void;
        defer(params: Params$Resource$Purchases$Subscriptions$Defer, callback: BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>): void;
        defer(callback: BodyResponseCallback<Schema$SubscriptionPurchasesDeferResponse>): void;
        /**
         * Checks whether a user's subscription purchase is valid and returns its expiry time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Purchases$Subscriptions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Purchases$Subscriptions$Get, options?: MethodOptions): GaxiosPromise<Schema$SubscriptionPurchase>;
        get(params: Params$Resource$Purchases$Subscriptions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Purchases$Subscriptions$Get, options: MethodOptions | BodyResponseCallback<Schema$SubscriptionPurchase>, callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
        get(params: Params$Resource$Purchases$Subscriptions$Get, callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
        get(callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
        /**
         * Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        refund(params: Params$Resource$Purchases$Subscriptions$Refund, options: StreamMethodOptions): GaxiosPromise<Readable>;
        refund(params?: Params$Resource$Purchases$Subscriptions$Refund, options?: MethodOptions): GaxiosPromise<void>;
        refund(params: Params$Resource$Purchases$Subscriptions$Refund, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        refund(params: Params$Resource$Purchases$Subscriptions$Refund, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        refund(params: Params$Resource$Purchases$Subscriptions$Refund, callback: BodyResponseCallback<void>): void;
        refund(callback: BodyResponseCallback<void>): void;
        /**
         * Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revoke(params: Params$Resource$Purchases$Subscriptions$Revoke, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revoke(params?: Params$Resource$Purchases$Subscriptions$Revoke, options?: MethodOptions): GaxiosPromise<void>;
        revoke(params: Params$Resource$Purchases$Subscriptions$Revoke, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revoke(params: Params$Resource$Purchases$Subscriptions$Revoke, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        revoke(params: Params$Resource$Purchases$Subscriptions$Revoke, callback: BodyResponseCallback<void>): void;
        revoke(callback: BodyResponseCallback<void>): void;
    }
    export interface Params$Resource$Purchases$Subscriptions$Acknowledge extends StandardParameters {
        /**
         * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The purchased subscription ID (for example, 'monthly001').
         */
        subscriptionId?: string;
        /**
         * The token provided to the user's device when the subscription was purchased.
         */
        token?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SubscriptionPurchasesAcknowledgeRequest;
    }
    export interface Params$Resource$Purchases$Subscriptions$Cancel extends StandardParameters {
        /**
         * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The purchased subscription ID (for example, 'monthly001').
         */
        subscriptionId?: string;
        /**
         * The token provided to the user's device when the subscription was purchased.
         */
        token?: string;
    }
    export interface Params$Resource$Purchases$Subscriptions$Defer extends StandardParameters {
        /**
         * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The purchased subscription ID (for example, 'monthly001').
         */
        subscriptionId?: string;
        /**
         * The token provided to the user's device when the subscription was purchased.
         */
        token?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SubscriptionPurchasesDeferRequest;
    }
    export interface Params$Resource$Purchases$Subscriptions$Get extends StandardParameters {
        /**
         * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The purchased subscription ID (for example, 'monthly001').
         */
        subscriptionId?: string;
        /**
         * The token provided to the user's device when the subscription was purchased.
         */
        token?: string;
    }
    export interface Params$Resource$Purchases$Subscriptions$Refund extends StandardParameters {
        /**
         * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * "The purchased subscription ID (for example, 'monthly001').
         */
        subscriptionId?: string;
        /**
         * The token provided to the user's device when the subscription was purchased.
         */
        token?: string;
    }
    export interface Params$Resource$Purchases$Subscriptions$Revoke extends StandardParameters {
        /**
         * The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The purchased subscription ID (for example, 'monthly001').
         */
        subscriptionId?: string;
        /**
         * The token provided to the user's device when the subscription was purchased.
         */
        token?: string;
    }
    export class Resource$Purchases$Subscriptionsv2 {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Get metadata about a subscription
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Purchases$Subscriptionsv2$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Purchases$Subscriptionsv2$Get, options?: MethodOptions): GaxiosPromise<Schema$SubscriptionPurchaseV2>;
        get(params: Params$Resource$Purchases$Subscriptionsv2$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Purchases$Subscriptionsv2$Get, options: MethodOptions | BodyResponseCallback<Schema$SubscriptionPurchaseV2>, callback: BodyResponseCallback<Schema$SubscriptionPurchaseV2>): void;
        get(params: Params$Resource$Purchases$Subscriptionsv2$Get, callback: BodyResponseCallback<Schema$SubscriptionPurchaseV2>): void;
        get(callback: BodyResponseCallback<Schema$SubscriptionPurchaseV2>): void;
        /**
         * Revoke a subscription purchase for the user.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revoke(params: Params$Resource$Purchases$Subscriptionsv2$Revoke, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revoke(params?: Params$Resource$Purchases$Subscriptionsv2$Revoke, options?: MethodOptions): GaxiosPromise<Schema$RevokeSubscriptionPurchaseResponse>;
        revoke(params: Params$Resource$Purchases$Subscriptionsv2$Revoke, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revoke(params: Params$Resource$Purchases$Subscriptionsv2$Revoke, options: MethodOptions | BodyResponseCallback<Schema$RevokeSubscriptionPurchaseResponse>, callback: BodyResponseCallback<Schema$RevokeSubscriptionPurchaseResponse>): void;
        revoke(params: Params$Resource$Purchases$Subscriptionsv2$Revoke, callback: BodyResponseCallback<Schema$RevokeSubscriptionPurchaseResponse>): void;
        revoke(callback: BodyResponseCallback<Schema$RevokeSubscriptionPurchaseResponse>): void;
    }
    export interface Params$Resource$Purchases$Subscriptionsv2$Get extends StandardParameters {
        /**
         * The package of the application for which this subscription was purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * Required. The token provided to the user's device when the subscription was purchased.
         */
        token?: string;
    }
    export interface Params$Resource$Purchases$Subscriptionsv2$Revoke extends StandardParameters {
        /**
         * Required. The package of the application for which this subscription was purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * Required. The token provided to the user's device when the subscription was purchased.
         */
        token?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RevokeSubscriptionPurchaseRequest;
    }
    export class Resource$Purchases$Voidedpurchases {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Lists the purchases that were canceled, refunded or charged-back.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Purchases$Voidedpurchases$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Purchases$Voidedpurchases$List, options?: MethodOptions): GaxiosPromise<Schema$VoidedPurchasesListResponse>;
        list(params: Params$Resource$Purchases$Voidedpurchases$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Purchases$Voidedpurchases$List, options: MethodOptions | BodyResponseCallback<Schema$VoidedPurchasesListResponse>, callback: BodyResponseCallback<Schema$VoidedPurchasesListResponse>): void;
        list(params: Params$Resource$Purchases$Voidedpurchases$List, callback: BodyResponseCallback<Schema$VoidedPurchasesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$VoidedPurchasesListResponse>): void;
    }
    export interface Params$Resource$Purchases$Voidedpurchases$List extends StandardParameters {
        /**
         * The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
         */
        endTime?: string;
        /**
         * Optional. Whether to include voided purchases of quantity-based partial refunds, which are applicable only to multi-quantity purchases. If true, additional voided purchases may be returned with voidedQuantity that indicates the refund quantity of a quantity-based partial refund. The default value is false.
         */
        includeQuantityBasedPartialRefund?: boolean;
        /**
         * Defines how many results the list operation should return. The default number depends on the resource collection.
         */
        maxResults?: number;
        /**
         * The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * Defines the index of the first element to return. This can only be used if indexed paging is enabled.
         */
        startIndex?: number;
        /**
         * The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
         */
        startTime?: string;
        /**
         * Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
         */
        token?: string;
        /**
         * The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
         */
        type?: number;
    }
    export class Resource$Reviews {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets a single review.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Reviews$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Reviews$Get, options?: MethodOptions): GaxiosPromise<Schema$Review>;
        get(params: Params$Resource$Reviews$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Reviews$Get, options: MethodOptions | BodyResponseCallback<Schema$Review>, callback: BodyResponseCallback<Schema$Review>): void;
        get(params: Params$Resource$Reviews$Get, callback: BodyResponseCallback<Schema$Review>): void;
        get(callback: BodyResponseCallback<Schema$Review>): void;
        /**
         * Lists all reviews.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Reviews$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Reviews$List, options?: MethodOptions): GaxiosPromise<Schema$ReviewsListResponse>;
        list(params: Params$Resource$Reviews$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Reviews$List, options: MethodOptions | BodyResponseCallback<Schema$ReviewsListResponse>, callback: BodyResponseCallback<Schema$ReviewsListResponse>): void;
        list(params: Params$Resource$Reviews$List, callback: BodyResponseCallback<Schema$ReviewsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ReviewsListResponse>): void;
        /**
         * Replies to a single review, or updates an existing reply.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        reply(params: Params$Resource$Reviews$Reply, options: StreamMethodOptions): GaxiosPromise<Readable>;
        reply(params?: Params$Resource$Reviews$Reply, options?: MethodOptions): GaxiosPromise<Schema$ReviewsReplyResponse>;
        reply(params: Params$Resource$Reviews$Reply, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        reply(params: Params$Resource$Reviews$Reply, options: MethodOptions | BodyResponseCallback<Schema$ReviewsReplyResponse>, callback: BodyResponseCallback<Schema$ReviewsReplyResponse>): void;
        reply(params: Params$Resource$Reviews$Reply, callback: BodyResponseCallback<Schema$ReviewsReplyResponse>): void;
        reply(callback: BodyResponseCallback<Schema$ReviewsReplyResponse>): void;
    }
    export interface Params$Resource$Reviews$Get extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Unique identifier for a review.
         */
        reviewId?: string;
        /**
         * Language localization code.
         */
        translationLanguage?: string;
    }
    export interface Params$Resource$Reviews$List extends StandardParameters {
        /**
         * How many results the list operation should return.
         */
        maxResults?: number;
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The index of the first element to return.
         */
        startIndex?: number;
        /**
         * Pagination token. If empty, list starts at the first review.
         */
        token?: string;
        /**
         * Language localization code.
         */
        translationLanguage?: string;
    }
    export interface Params$Resource$Reviews$Reply extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * Unique identifier for a review.
         */
        reviewId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ReviewsReplyRequest;
    }
    export class Resource$Systemapks {
        context: APIRequestContext;
        variants: Resource$Systemapks$Variants;
        constructor(context: APIRequestContext);
    }
    export class Resource$Systemapks$Variants {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Systemapks$Variants$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Systemapks$Variants$Create, options?: MethodOptions): GaxiosPromise<Schema$Variant>;
        create(params: Params$Resource$Systemapks$Variants$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Systemapks$Variants$Create, options: MethodOptions | BodyResponseCallback<Schema$Variant>, callback: BodyResponseCallback<Schema$Variant>): void;
        create(params: Params$Resource$Systemapks$Variants$Create, callback: BodyResponseCallback<Schema$Variant>): void;
        create(callback: BodyResponseCallback<Schema$Variant>): void;
        /**
         * Downloads a previously created system APK which is suitable for inclusion in a system image.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        download(params: Params$Resource$Systemapks$Variants$Download, options: StreamMethodOptions): GaxiosPromise<Readable>;
        download(params?: Params$Resource$Systemapks$Variants$Download, options?: MethodOptions): GaxiosPromise<unknown>;
        download(params: Params$Resource$Systemapks$Variants$Download, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        download(params: Params$Resource$Systemapks$Variants$Download, options: MethodOptions | BodyResponseCallback<unknown>, callback: BodyResponseCallback<unknown>): void;
        download(params: Params$Resource$Systemapks$Variants$Download, callback: BodyResponseCallback<unknown>): void;
        download(callback: BodyResponseCallback<unknown>): void;
        /**
         * Returns a previously created system APK variant.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Systemapks$Variants$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Systemapks$Variants$Get, options?: MethodOptions): GaxiosPromise<Schema$Variant>;
        get(params: Params$Resource$Systemapks$Variants$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Systemapks$Variants$Get, options: MethodOptions | BodyResponseCallback<Schema$Variant>, callback: BodyResponseCallback<Schema$Variant>): void;
        get(params: Params$Resource$Systemapks$Variants$Get, callback: BodyResponseCallback<Schema$Variant>): void;
        get(callback: BodyResponseCallback<Schema$Variant>): void;
        /**
         * Returns the list of previously created system APK variants.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Systemapks$Variants$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Systemapks$Variants$List, options?: MethodOptions): GaxiosPromise<Schema$SystemApksListResponse>;
        list(params: Params$Resource$Systemapks$Variants$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Systemapks$Variants$List, options: MethodOptions | BodyResponseCallback<Schema$SystemApksListResponse>, callback: BodyResponseCallback<Schema$SystemApksListResponse>): void;
        list(params: Params$Resource$Systemapks$Variants$List, callback: BodyResponseCallback<Schema$SystemApksListResponse>): void;
        list(callback: BodyResponseCallback<Schema$SystemApksListResponse>): void;
    }
    export interface Params$Resource$Systemapks$Variants$Create extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The version code of the App Bundle.
         */
        versionCode?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Variant;
    }
    export interface Params$Resource$Systemapks$Variants$Download extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The ID of a previously created system APK variant.
         */
        variantId?: number;
        /**
         * The version code of the App Bundle.
         */
        versionCode?: string;
    }
    export interface Params$Resource$Systemapks$Variants$Get extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The ID of a previously created system APK variant.
         */
        variantId?: number;
        /**
         * The version code of the App Bundle.
         */
        versionCode?: string;
    }
    export interface Params$Resource$Systemapks$Variants$List extends StandardParameters {
        /**
         * Package name of the app.
         */
        packageName?: string;
        /**
         * The version code of the App Bundle.
         */
        versionCode?: string;
    }
    export class Resource$Users {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Grant access for a user to the given developer account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Users$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Users$Create, options?: MethodOptions): GaxiosPromise<Schema$User>;
        create(params: Params$Resource$Users$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Users$Create, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        create(params: Params$Resource$Users$Create, callback: BodyResponseCallback<Schema$User>): void;
        create(callback: BodyResponseCallback<Schema$User>): void;
        /**
         * Removes all access for the user to the given developer account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Users$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Users$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Users$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Users$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Users$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Lists all users with access to a developer account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Users$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Users$List, options?: MethodOptions): GaxiosPromise<Schema$ListUsersResponse>;
        list(params: Params$Resource$Users$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Users$List, options: MethodOptions | BodyResponseCallback<Schema$ListUsersResponse>, callback: BodyResponseCallback<Schema$ListUsersResponse>): void;
        list(params: Params$Resource$Users$List, callback: BodyResponseCallback<Schema$ListUsersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListUsersResponse>): void;
        /**
         * Updates access for the user to the developer account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Users$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Users$Patch, options?: MethodOptions): GaxiosPromise<Schema$User>;
        patch(params: Params$Resource$Users$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Users$Patch, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        patch(params: Params$Resource$Users$Patch, callback: BodyResponseCallback<Schema$User>): void;
        patch(callback: BodyResponseCallback<Schema$User>): void;
    }
    export interface Params$Resource$Users$Create extends StandardParameters {
        /**
         * Required. The developer account to add the user to. Format: developers/{developer\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$User;
    }
    export interface Params$Resource$Users$Delete extends StandardParameters {
        /**
         * Required. The name of the user to delete. Format: developers/{developer\}/users/{email\}
         */
        name?: string;
    }
    export interface Params$Resource$Users$List extends StandardParameters {
        /**
         * The maximum number of results to return. This must be set to -1 to disable pagination.
         */
        pageSize?: number;
        /**
         * A token received from a previous call to this method, in order to retrieve further results.
         */
        pageToken?: string;
        /**
         * Required. The developer account to fetch users from. Format: developers/{developer\}
         */
        parent?: string;
    }
    export interface Params$Resource$Users$Patch extends StandardParameters {
        /**
         * Required. Resource name for this user, following the pattern "developers/{developer\}/users/{email\}".
         */
        name?: string;
        /**
         * Optional. The list of fields to be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$User;
    }
    export {};
}
