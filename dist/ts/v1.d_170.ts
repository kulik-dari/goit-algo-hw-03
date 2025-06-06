/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace chromemanagement_v1 {
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
     * Chrome Management API
     *
     * The Chrome Management API is a suite of services that allows Chrome administrators to view, manage and gain insights on their Chrome OS and Chrome Browser devices.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     * ```
     */
    export class Chromemanagement {
        context: APIRequestContext;
        customers: Resource$Customers;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Android app information.
     */
    export interface Schema$GoogleChromeManagementV1AndroidAppInfo {
        /**
         * Output only. Permissions requested by an Android app.
         */
        permissions?: Schema$GoogleChromeManagementV1AndroidAppPermission[];
    }
    /**
     * Permission requested by an Android app.
     */
    export interface Schema$GoogleChromeManagementV1AndroidAppPermission {
        /**
         * Output only. The type of the permission.
         */
        type?: string | null;
    }
    /**
     * Resource representing app details.
     */
    export interface Schema$GoogleChromeManagementV1AppDetails {
        /**
         * Output only. Android app information.
         */
        androidAppInfo?: Schema$GoogleChromeManagementV1AndroidAppInfo;
        /**
         * Output only. Unique store identifier for the item. Examples: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension, "com.google.android.apps.docs" for the Google Drive Android app.
         */
        appId?: string | null;
        /**
         * Output only. Chrome Web Store app information.
         */
        chromeAppInfo?: Schema$GoogleChromeManagementV1ChromeAppInfo;
        /**
         * Output only. App's description.
         */
        description?: string | null;
        /**
         * Output only. The uri for the detail page of the item.
         */
        detailUri?: string | null;
        /**
         * Output only. App's display name.
         */
        displayName?: string | null;
        /**
         * Output only. First published time.
         */
        firstPublishTime?: string | null;
        /**
         * Output only. Home page or Website uri.
         */
        homepageUri?: string | null;
        /**
         * Output only. A link to an image that can be used as an icon for the product.
         */
        iconUri?: string | null;
        /**
         * Output only. Indicates if the app has to be paid for OR has paid content.
         */
        isPaidApp?: boolean | null;
        /**
         * Output only. Latest published time.
         */
        latestPublishTime?: string | null;
        /**
         * Output only. Format: name=customers/{customer_id\}/apps/{chrome|android|web\}/{app_id\}@{version\}
         */
        name?: string | null;
        /**
         * Output only. The URI pointing to the privacy policy of the app, if it was provided by the developer. Version-specific field that will only be set when the requested app version is found.
         */
        privacyPolicyUri?: string | null;
        /**
         * Output only. The publisher of the item.
         */
        publisher?: string | null;
        /**
         * Output only. Number of reviews received. Chrome Web Store review information will always be for the latest version of an app.
         */
        reviewNumber?: string | null;
        /**
         * Output only. The rating of the app (on 5 stars). Chrome Web Store review information will always be for the latest version of an app.
         */
        reviewRating?: number | null;
        /**
         * Output only. App version. A new revision is committed whenever a new version of the app is published.
         */
        revisionId?: string | null;
        /**
         * Output only. Information about a partial service error if applicable.
         */
        serviceError?: Schema$GoogleRpcStatus;
        /**
         * Output only. App type.
         */
        type?: string | null;
    }
    /**
     * App report.
     */
    export interface Schema$GoogleChromeManagementV1AppReport {
        /**
         * Timestamp when the report was collected.
         */
        reportTime?: string | null;
        /**
         * App usage data.
         */
        usageData?: Schema$GoogleChromeManagementV1AppUsageData[];
    }
    /**
     * App usage data.
     */
    export interface Schema$GoogleChromeManagementV1AppUsageData {
        /**
         * App id.
         */
        appId?: string | null;
        /**
         * Application instance id. This will be unique per window/instance.
         */
        appInstanceId?: string | null;
        /**
         * Type of app.
         */
        appType?: string | null;
        /**
         * App foreground running time.
         */
        runningDuration?: string | null;
    }
    /**
     * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_AUDIO_REPORT
     */
    export interface Schema$GoogleChromeManagementV1AudioStatusReport {
        /**
         * Output only. Active input device's name.
         */
        inputDevice?: string | null;
        /**
         * Output only. Active input device's gain in [0, 100].
         */
        inputGain?: number | null;
        /**
         * Output only. Is active input device mute or not.
         */
        inputMute?: boolean | null;
        /**
         * Output only. Active output device's name.
         */
        outputDevice?: string | null;
        /**
         * Output only. Is active output device mute or not.
         */
        outputMute?: boolean | null;
        /**
         * Output only. Active output device's volume in [0, 100].
         */
        outputVolume?: number | null;
        /**
         * Output only. Timestamp of when the sample was collected on device.
         */
        reportTime?: string | null;
    }
    /**
     * Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_INFO
     */
    export interface Schema$GoogleChromeManagementV1BatteryInfo {
        /**
         * Output only. Design capacity (mAmpere-hours).
         */
        designCapacity?: string | null;
        /**
         * Output only. Designed minimum output voltage (mV)
         */
        designMinVoltage?: number | null;
        /**
         * Output only. The date the battery was manufactured.
         */
        manufactureDate?: Schema$GoogleTypeDate;
        /**
         * Output only. Battery manufacturer.
         */
        manufacturer?: string | null;
        /**
         * Output only. Battery serial number.
         */
        serialNumber?: string | null;
        /**
         * Output only. Technology of the battery. Example: Li-ion
         */
        technology?: string | null;
    }
    /**
     * Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
     */
    export interface Schema$GoogleChromeManagementV1BatterySampleReport {
        /**
         * Output only. Battery charge percentage.
         */
        chargeRate?: number | null;
        /**
         * Output only. Battery current (mA).
         */
        current?: string | null;
        /**
         * Output only. The battery discharge rate measured in mW. Positive if the battery is being discharged, negative if it's being charged.
         */
        dischargeRate?: number | null;
        /**
         * Output only. Battery remaining capacity (mAmpere-hours).
         */
        remainingCapacity?: string | null;
        /**
         * Output only. Timestamp of when the sample was collected on device
         */
        reportTime?: string | null;
        /**
         * Output only. Battery status read from sysfs. Example: Discharging
         */
        status?: string | null;
        /**
         * Output only. Temperature in Celsius degrees.
         */
        temperature?: number | null;
        /**
         * Output only. Battery voltage (millivolt).
         */
        voltage?: string | null;
    }
    /**
     * Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_REPORT
     */
    export interface Schema$GoogleChromeManagementV1BatteryStatusReport {
        /**
         * Output only. Battery health.
         */
        batteryHealth?: string | null;
        /**
         * Output only. Cycle count.
         */
        cycleCount?: number | null;
        /**
         * Output only. Full charge capacity (mAmpere-hours).
         */
        fullChargeCapacity?: string | null;
        /**
         * Output only. Timestamp of when the sample was collected on device
         */
        reportTime?: string | null;
        /**
         * Output only. Sampling data for the battery sorted in a decreasing order of report_time.
         */
        sample?: Schema$GoogleChromeManagementV1BatterySampleReport[];
        /**
         * Output only. Battery serial number.
         */
        serialNumber?: string | null;
    }
    /**
     * Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT
     */
    export interface Schema$GoogleChromeManagementV1BootPerformanceReport {
        /**
         * Total time to boot up.
         */
        bootUpDuration?: string | null;
        /**
         * The timestamp when power came on.
         */
        bootUpTime?: string | null;
        /**
         * Timestamp when the report was collected.
         */
        reportTime?: string | null;
        /**
         * Total time since shutdown start to power off.
         */
        shutdownDuration?: string | null;
        /**
         * The shutdown reason.
         */
        shutdownReason?: string | null;
        /**
         * The timestamp when shutdown.
         */
        shutdownTime?: string | null;
    }
    /**
     * Describes a browser version and its install count.
     */
    export interface Schema$GoogleChromeManagementV1BrowserVersion {
        /**
         * Output only. The release channel of the installed browser.
         */
        channel?: string | null;
        /**
         * Output only. Count grouped by device_system and major version
         */
        count?: string | null;
        /**
         * Output only. Version of the system-specified operating system.
         */
        deviceOsVersion?: string | null;
        /**
         * Output only. The device operating system.
         */
        system?: string | null;
        /**
         * Output only. The full version of the installed browser.
         */
        version?: string | null;
    }
    /**
     * Chrome Web Store app information.
     */
    export interface Schema$GoogleChromeManagementV1ChromeAppInfo {
        /**
         * Output only. Whether the app or extension is built and maintained by Google. Version-specific field that will only be set when the requested app version is found.
         */
        googleOwned?: boolean | null;
        /**
         * Output only. Whether the app or extension is in a published state in the Chrome Web Store.
         */
        isCwsHosted?: boolean | null;
        /**
         * Output only. Whether an app supports policy for extensions.
         */
        isExtensionPolicySupported?: boolean | null;
        /**
         * Output only. Whether the app is only for Kiosk mode on ChromeOS devices
         */
        isKioskOnly?: boolean | null;
        /**
         * Output only. Whether the app or extension is a theme.
         */
        isTheme?: boolean | null;
        /**
         * Output only. Whether this app is enabled for Kiosk mode on ChromeOS devices
         */
        kioskEnabled?: boolean | null;
        /**
         * Output only. The minimum number of users using this app.
         */
        minUserCount?: number | null;
        /**
         * Output only. Every custom permission requested by the app. Version-specific field that will only be set when the requested app version is found.
         */
        permissions?: Schema$GoogleChromeManagementV1ChromeAppPermission[];
        /**
         * Output only. Every permission giving access to domains or broad host patterns. ( e.g. www.google.com). This includes the matches from content scripts as well as hosts in the permissions node of the manifest. Version-specific field that will only be set when the requested app version is found.
         */
        siteAccess?: Schema$GoogleChromeManagementV1ChromeAppSiteAccess[];
        /**
         * Output only. The app developer has enabled support for their app. Version-specific field that will only be set when the requested app version is found.
         */
        supportEnabled?: boolean | null;
        /**
         * Output only. Types of an item in the Chrome Web Store
         */
        type?: string | null;
    }
    /**
     * Permission requested by a Chrome app or extension.
     */
    export interface Schema$GoogleChromeManagementV1ChromeAppPermission {
        /**
         * Output only. If available, whether this permissions grants the app/extension access to user data.
         */
        accessUserData?: boolean | null;
        /**
         * Output only. If available, a URI to a page that has documentation for the current permission.
         */
        documentationUri?: string | null;
        /**
         * Output only. The type of the permission.
         */
        type?: string | null;
    }
    /**
     * Details of an app installation request.
     */
    export interface Schema$GoogleChromeManagementV1ChromeAppRequest {
        /**
         * Output only. Format: app_details=customers/{customer_id\}/apps/chrome/{app_id\}
         */
        appDetails?: string | null;
        /**
         * Output only. Unique store identifier for the app. Example: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension.
         */
        appId?: string | null;
        /**
         * Output only. The uri for the detail page of the item.
         */
        detailUri?: string | null;
        /**
         * Output only. App's display name.
         */
        displayName?: string | null;
        /**
         * Output only. A link to an image that can be used as an icon for the product.
         */
        iconUri?: string | null;
        /**
         * Output only. The timestamp of the most recently made request for this app.
         */
        latestRequestTime?: string | null;
        /**
         * Output only. Total count of requests for this app.
         */
        requestCount?: string | null;
    }
    /**
     * Represent one host permission.
     */
    export interface Schema$GoogleChromeManagementV1ChromeAppSiteAccess {
        /**
         * Output only. This can contain very specific hosts, or patterns like "*.com" for instance.
         */
        hostMatch?: string | null;
    }
    /**
     * Response containing summary of requested app installations.
     */
    export interface Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse {
        /**
         * Token to specify the next page in the list.
         */
        nextPageToken?: string | null;
        /**
         * Count of requested apps matching request.
         */
        requestedApps?: Schema$GoogleChromeManagementV1ChromeAppRequest[];
        /**
         * Total number of matching app requests.
         */
        totalSize?: number | null;
    }
    /**
     * Response containing counts for browsers that need attention.
     */
    export interface Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse {
        /**
         * Number of browsers that haven’t had any recent activity
         */
        noRecentActivityCount?: string | null;
        /**
         * Number of browsers that are pending an OS update
         */
        pendingBrowserUpdateCount?: string | null;
        /**
         * Number of browsers that have been recently enrolled
         */
        recentlyEnrolledCount?: string | null;
    }
    /**
     * Response contains a list of CrashEventCountByVersionPerDay which count the chrome crash at the certain date.
     */
    export interface Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse {
        /**
         * Crash event counts grouped by date and browser version.
         */
        crashEventCounts?: Schema$GoogleChromeManagementV1CountChromeCrashEventsResponseCrashEventCount[];
    }
    /**
     * The `count` of the Chrome crash events at the `date`.
     */
    export interface Schema$GoogleChromeManagementV1CountChromeCrashEventsResponseCrashEventCount {
        /**
         * Browser version this is counting.
         */
        browserVersion?: string | null;
        /**
         * Total count of crash events.
         */
        count?: string | null;
        /**
         * Date of the crash event.
         */
        date?: Schema$GoogleTypeDate;
    }
    /**
     * Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.
     */
    export interface Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse {
        /**
         * The list of reports sorted by auto update expiration date in ascending order.
         */
        deviceAueCountReports?: Schema$GoogleChromeManagementV1DeviceAueCountReport[];
    }
    /**
     * Response containing counts for devices that need attention.
     */
    export interface Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse {
        /**
         * Number of ChromeOS devices have not synced policies in the past 28 days.
         */
        noRecentPolicySyncCount?: string | null;
        /**
         * Number of ChromeOS devices that have not seen any user activity in the past 28 days.
         */
        noRecentUserActivityCount?: string | null;
        /**
         * Number of devices whose OS version is not compliant.
         */
        osVersionNotCompliantCount?: string | null;
        /**
         * Number of devices that are pending an OS update.
         */
        pendingUpdate?: string | null;
        /**
         * Number of devices that are unable to apply a policy due to an OS version mismatch.
         */
        unsupportedPolicyCount?: string | null;
    }
    /**
     * Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
     */
    export interface Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse {
        /**
         * The DeviceHardwareCountReport for device cpu type (for example Intel(R) Core(TM) i7-10610U CPU @ 1.80GHz).
         */
        cpuReports?: Schema$GoogleChromeManagementV1DeviceHardwareCountReport[];
        /**
         * The DeviceHardwareCountReport for device memory amount in gigabytes (for example 16).
         */
        memoryReports?: Schema$GoogleChromeManagementV1DeviceHardwareCountReport[];
        /**
         * The DeviceHardwareCountReport for device model type (for example Acer C7 Chromebook).
         */
        modelReports?: Schema$GoogleChromeManagementV1DeviceHardwareCountReport[];
        /**
         * The DeviceHardwareCountReport for device storage amount in gigabytes (for example 128).
         */
        storageReports?: Schema$GoogleChromeManagementV1DeviceHardwareCountReport[];
    }
    /**
     * Response containing requested browser versions details and counts.
     */
    export interface Schema$GoogleChromeManagementV1CountChromeVersionsResponse {
        /**
         * List of all browser versions and their install counts.
         */
        browserVersions?: Schema$GoogleChromeManagementV1BrowserVersion[];
        /**
         * Token to specify the next page of the request.
         */
        nextPageToken?: string | null;
        /**
         * Total number browser versions matching request.
         */
        totalSize?: number | null;
    }
    /**
     * Response containing details of queried installed apps.
     */
    export interface Schema$GoogleChromeManagementV1CountInstalledAppsResponse {
        /**
         * List of installed apps matching request.
         */
        installedApps?: Schema$GoogleChromeManagementV1InstalledApp[];
        /**
         * Token to specify the next page of the request.
         */
        nextPageToken?: string | null;
        /**
         * Total number of installed apps matching request.
         */
        totalSize?: number | null;
    }
    /**
     * Response containing a summary printing report for each printer from the specified organizational unit for the requested time interval.
     */
    export interface Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse {
        /**
         * Pagination token for requesting the next page.
         */
        nextPageToken?: string | null;
        /**
         * List of PrinterReports matching request.
         */
        printerReports?: Schema$GoogleChromeManagementV1PrinterReport[];
        /**
         * Total number of printers matching request.
         */
        totalSize?: string | null;
    }
    /**
     * Response containing a summary printing report for each user that has initiated a print job with a printer from the specified organizational unit during the requested time interval.
     */
    export interface Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse {
        /**
         * Pagination token for requesting the next page.
         */
        nextPageToken?: string | null;
        /**
         * Total number of users matching request.
         */
        totalSize?: string | null;
        /**
         * List of UserPrintReports matching request.
         */
        userPrintReports?: Schema$GoogleChromeManagementV1UserPrintReport[];
    }
    /**
     * CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_INFO
     */
    export interface Schema$GoogleChromeManagementV1CpuInfo {
        /**
         * Output only. Architecture type for the CPU. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
         */
        architecture?: string | null;
        /**
         * Output only. Whether keylocker is configured.`TRUE` = Enabled; `FALSE` = disabled. Only reported if keylockerSupported = `TRUE`.
         */
        keylockerConfigured?: boolean | null;
        /**
         * Output only. Whether keylocker is supported.
         */
        keylockerSupported?: boolean | null;
        /**
         * Output only. The max CPU clock speed in kHz.
         */
        maxClockSpeed?: number | null;
        /**
         * Output only. The CPU model name. Example: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
         */
        model?: string | null;
    }
    /**
     * Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_REPORT
     */
    export interface Schema$GoogleChromeManagementV1CpuStatusReport {
        /**
         * Output only. CPU temperature sample info per CPU core in Celsius
         */
        cpuTemperatureInfo?: Schema$GoogleChromeManagementV1CpuTemperatureInfo[];
        /**
         * Output only. Sample of CPU utilization (0-100 percent).
         */
        cpuUtilizationPct?: number | null;
        /**
         * Output only. The timestamp in milliseconds representing time at which this report was sampled.
         */
        reportTime?: string | null;
        /**
         * Output only. Frequency the report is sampled.
         */
        sampleFrequency?: string | null;
    }
    /**
     * CPU temperature of a device. Sampled per CPU core in Celsius. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
     */
    export interface Schema$GoogleChromeManagementV1CpuTemperatureInfo {
        /**
         * Output only. CPU label. Example: Core 0
         */
        label?: string | null;
        /**
         * Output only. CPU temperature in Celsius.
         */
        temperatureCelsius?: number | null;
    }
    /**
     * Describes a device reporting Chrome browser information.
     */
    export interface Schema$GoogleChromeManagementV1Device {
        /**
         * Output only. The ID of the device that reported this Chrome browser information.
         */
        deviceId?: string | null;
        /**
         * Output only. The name of the machine within its local network.
         */
        machine?: string | null;
    }
    /**
     * Device activity report. * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT
     */
    export interface Schema$GoogleChromeManagementV1DeviceActivityReport {
        /**
         * Output only. Device activity state.
         */
        deviceActivityState?: string | null;
        /**
         * Output only. Timestamp of when the report was collected.
         */
        reportTime?: string | null;
    }
    /**
     * Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.
     */
    export interface Schema$GoogleChromeManagementV1DeviceAueCountReport {
        /**
         * Enum value of month corresponding to the auto update expiration date in UTC time zone. If the device is already expired, this field is empty.
         */
        aueMonth?: string | null;
        /**
         * Int value of year corresponding to the Auto Update Expiration date in UTC time zone. If the device is already expired, this field is empty.
         */
        aueYear?: string | null;
        /**
         * Count of devices of this model.
         */
        count?: string | null;
        /**
         * Boolean value for whether or not the device has already expired.
         */
        expired?: boolean | null;
        /**
         * Public model name of the devices.
         */
        model?: string | null;
    }
    /**
     * Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.
     */
    export interface Schema$GoogleChromeManagementV1DeviceHardwareCountReport {
        /**
         * Public name of the hardware specification.
         */
        bucket?: string | null;
        /**
         * Count of devices with a unique hardware specification.
         */
        count?: string | null;
    }
    /**
     * Details of a device requesting an extension, including the name of the device and the justification of the request.
     */
    export interface Schema$GoogleChromeManagementV1DeviceRequestingExtensionDetails {
        /**
         * The name of a device that has requested the extension.
         */
        deviceName?: string | null;
        /**
         * Request justification as entered by the user.
         */
        justification?: string | null;
    }
    /**
     * Status of the single storage device.
     */
    export interface Schema$GoogleChromeManagementV1DiskInfo {
        /**
         * Output only. Number of bytes read since last boot.
         */
        bytesReadThisSession?: string | null;
        /**
         * Output only. Number of bytes written since last boot.
         */
        bytesWrittenThisSession?: string | null;
        /**
         * Output only. Time spent discarding since last boot. Discarding is writing to clear blocks which are no longer in use. Supported on kernels 4.18+.
         */
        discardTimeThisSession?: string | null;
        /**
         * Output only. Disk health.
         */
        health?: string | null;
        /**
         * Output only. Counts the time the disk and queue were busy, so unlike the fields above, parallel requests are not counted multiple times.
         */
        ioTimeThisSession?: string | null;
        /**
         * Output only. Disk manufacturer.
         */
        manufacturer?: string | null;
        /**
         * Output only. Disk model.
         */
        model?: string | null;
        /**
         * Output only. Time spent reading from disk since last boot.
         */
        readTimeThisSession?: string | null;
        /**
         * Output only. Disk serial number.
         */
        serialNumber?: string | null;
        /**
         * Output only. Disk size.
         */
        sizeBytes?: string | null;
        /**
         * Output only. Disk type: eMMC / NVMe / ATA / SCSI.
         */
        type?: string | null;
        /**
         * Output only. Disk volumes.
         */
        volumeIds?: string[] | null;
        /**
         * Output only. Time spent writing to disk since last boot.
         */
        writeTimeThisSession?: string | null;
    }
    /**
     * Information of a display device.
     */
    export interface Schema$GoogleChromeManagementV1DisplayDevice {
        /**
         * Output only. Display height in millimeters.
         */
        displayHeightMm?: number | null;
        /**
         * Output only. Display device name.
         */
        displayName?: string | null;
        /**
         * Output only. Display width in millimeters.
         */
        displayWidthMm?: number | null;
        /**
         * Output only. Is display internal or not.
         */
        internal?: boolean | null;
        /**
         * Output only. Three letter manufacturer ID.
         */
        manufacturerId?: string | null;
        /**
         * Output only. Year of manufacture.
         */
        manufactureYear?: number | null;
        /**
         * Output only. Manufacturer product code.
         */
        modelId?: number | null;
    }
    /**
     * Information for a display.
     */
    export interface Schema$GoogleChromeManagementV1DisplayInfo {
        /**
         * Output only. Represents the graphics card device id.
         */
        deviceId?: string | null;
        /**
         * Output only. Display device name.
         */
        displayName?: string | null;
        /**
         * Output only. Indicates if display is internal or not.
         */
        isInternal?: boolean | null;
        /**
         * Output only. Refresh rate in Hz.
         */
        refreshRate?: number | null;
        /**
         * Output only. Resolution height in pixels.
         */
        resolutionHeight?: number | null;
        /**
         * Output only. Resolution width in pixels.
         */
        resolutionWidth?: number | null;
    }
    /**
     * Response containing a list of print jobs.
     */
    export interface Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse {
        /**
         * A token, which can be used in a subsequent request to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * List of requested print jobs.
         */
        printJobs?: Schema$GoogleChromeManagementV1PrintJob[];
        /**
         * Total number of print jobs matching request.
         */
        totalSize?: string | null;
    }
    /**
     * Response containing a list of devices that have requested the queried extension.
     */
    export interface Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse {
        /**
         * Details of devices that have requested the queried extension.
         */
        deviceDetails?: Schema$GoogleChromeManagementV1DeviceRequestingExtensionDetails[];
        /**
         * Optional. Token to specify the next page in the list. Token expires after 1 day.
         */
        nextPageToken?: string | null;
        /**
         * Optional. Total number of devices in response.
         */
        totalSize?: number | null;
    }
    /**
     * Response containing a list of users that have requested the queried extension.
     */
    export interface Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse {
        /**
         * Token to specify the next page in the list.
         */
        nextPageToken?: string | null;
        /**
         * Total number of users in response.
         */
        totalSize?: number | null;
        /**
         * Details of users that have requested the queried extension.
         */
        userDetails?: Schema$GoogleChromeManagementV1UserRequestingExtensionDetails[];
    }
    /**
     * Response containing a list of devices with queried app installed.
     */
    export interface Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse {
        /**
         * A list of devices which have the app installed. Sorted in ascending alphabetical order on the Device.machine field.
         */
        devices?: Schema$GoogleChromeManagementV1Device[];
        /**
         * Token to specify the next page of the request.
         */
        nextPageToken?: string | null;
        /**
         * Total number of devices matching request.
         */
        totalSize?: number | null;
    }
    /**
     * Information of a graphics adapter (GPU).
     */
    export interface Schema$GoogleChromeManagementV1GraphicsAdapterInfo {
        /**
         * Output only. Adapter name. Example: Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2).
         */
        adapter?: string | null;
        /**
         * Output only. Represents the graphics card device id.
         */
        deviceId?: string | null;
        /**
         * Output only. Version of the GPU driver.
         */
        driverVersion?: string | null;
    }
    /**
     * Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_INFO
     */
    export interface Schema$GoogleChromeManagementV1GraphicsInfo {
        /**
         * Output only. Information about the graphics adapter (GPU).
         */
        adapterInfo?: Schema$GoogleChromeManagementV1GraphicsAdapterInfo;
        /**
         * Output only. Information about the display(s) of the device.
         */
        displayDevices?: Schema$GoogleChromeManagementV1DisplayDevice[];
        /**
         * Output only. Is ePrivacy screen supported or not.
         */
        eprivacySupported?: boolean | null;
        /**
         * Output only. Information about the internal touch screen(s) of the device.
         */
        touchScreenInfo?: Schema$GoogleChromeManagementV1TouchScreenInfo;
    }
    /**
     * Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: 3 hours. * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_REPORT
     */
    export interface Schema$GoogleChromeManagementV1GraphicsStatusReport {
        /**
         * Output only. Information about the displays for the device.
         */
        displays?: Schema$GoogleChromeManagementV1DisplayInfo[];
        /**
         * Output only. Time at which the graphics data was reported.
         */
        reportTime?: string | null;
    }
    /**
     * Heartbeat status report of a device. * Available for Kiosks * This field provides online/offline/unknown status of a device and will only be included if the status has changed (e.g. Online -\> Offline) * Data for this field is controlled via policy: [HeartbeatEnabled](https://chromeenterprise.google/policies/#HeartbeatEnabled) [More Info](https://support.google.com/chrome/a/answer/6179663#:~:text=On%20the%20Chrome,device%20status%20alerts) * Heartbeat Frequency: 2 mins * Note: If a device goes offline, it can take up to 12 minutes for the online status of the device to be updated * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: N/A * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT
     */
    export interface Schema$GoogleChromeManagementV1HeartbeatStatusReport {
        /**
         * Timestamp of when status changed was detected
         */
        reportTime?: string | null;
        /**
         * State the device changed to
         */
        state?: string | null;
    }
    /**
     * Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
     */
    export interface Schema$GoogleChromeManagementV1HttpsLatencyRoutineData {
        /**
         * Output only. HTTPS latency if routine succeeded or failed because of HIGH_LATENCY or VERY_HIGH_LATENCY.
         */
        latency?: string | null;
        /**
         * Output only. HTTPS latency routine problem if a problem occurred.
         */
        problem?: string | null;
    }
    /**
     * Describes an installed app.
     */
    export interface Schema$GoogleChromeManagementV1InstalledApp {
        /**
         * Output only. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
         */
        appId?: string | null;
        /**
         * Output only. How the app was installed.
         */
        appInstallType?: string | null;
        /**
         * Output only. Source of the installed app.
         */
        appSource?: string | null;
        /**
         * Output only. Type of the app.
         */
        appType?: string | null;
        /**
         * Output only. Count of browser devices with this app installed.
         */
        browserDeviceCount?: string | null;
        /**
         * Output only. Description of the installed app.
         */
        description?: string | null;
        /**
         * Output only. Whether the app is disabled.
         */
        disabled?: boolean | null;
        /**
         * Output only. Name of the installed app.
         */
        displayName?: string | null;
        /**
         * Output only. Homepage uri of the installed app.
         */
        homepageUri?: string | null;
        /**
         * Output only. Count of ChromeOS users with this app installed.
         */
        osUserCount?: string | null;
        /**
         * Output only. Permissions of the installed app.
         */
        permissions?: string[] | null;
    }
    /**
     * Kiosk app status report of a device. * Available for Kiosks * This field provides the app id and version number running on a kiosk device and the timestamp of when the report was last updated * Data for this field is controlled via policy: [ReportDeviceSessionStatus](https://chromeenterprise.google/policies/#ReportDeviceSessionStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_APPS_REPORT
     */
    export interface Schema$GoogleChromeManagementV1KioskAppStatusReport {
        /**
         * App id of kiosk app for example "mdmkkicfmmkgmpkmkdikhlbggogpicma"
         */
        appId?: string | null;
        /**
         * App version number of kiosk app for example "1.10.118"
         */
        appVersion?: string | null;
        /**
         * Timestamp of when report was collected
         */
        reportTime?: string | null;
    }
    export interface Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse {
        /**
         * Telemetry devices returned in the response.
         */
        devices?: Schema$GoogleChromeManagementV1TelemetryDevice[];
        /**
         * Token to specify next page in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for listing telemetry events for a customer.
     */
    export interface Schema$GoogleChromeManagementV1ListTelemetryEventsResponse {
        /**
         * Token to specify next page in the list.
         */
        nextPageToken?: string | null;
        /**
         * Telemetry events returned in the response.
         */
        telemetryEvents?: Schema$GoogleChromeManagementV1TelemetryEvent[];
    }
    /**
     * Response message for listing notification configs for a customer.
     */
    export interface Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse {
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * The telemetry notification configs from the specified customer.
         */
        telemetryNotificationConfigs?: Schema$GoogleChromeManagementV1TelemetryNotificationConfig[];
    }
    /**
     * Response message for listing telemetry users for a customer.
     */
    export interface Schema$GoogleChromeManagementV1ListTelemetryUsersResponse {
        /**
         * Token to specify next page in the list.
         */
        nextPageToken?: string | null;
        /**
         * Telemetry users returned in the response.
         */
        telemetryUsers?: Schema$GoogleChromeManagementV1TelemetryUser[];
    }
    /**
     * Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_INFO
     */
    export interface Schema$GoogleChromeManagementV1MemoryInfo {
        /**
         * Output only. Amount of available RAM in bytes.
         */
        availableRamBytes?: string | null;
        /**
         * Output only. Total memory encryption info for the device.
         */
        totalMemoryEncryption?: Schema$GoogleChromeManagementV1TotalMemoryEncryptionInfo;
        /**
         * Output only. Total RAM in bytes.
         */
        totalRamBytes?: string | null;
    }
    /**
     * Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_REPORT
     */
    export interface Schema$GoogleChromeManagementV1MemoryStatusReport {
        /**
         * Output only. Number of page faults during this collection
         */
        pageFaults?: number | null;
        /**
         * Output only. The timestamp in milliseconds representing time at which this report was sampled.
         */
        reportTime?: string | null;
        /**
         * Output only. Frequency the report is sampled.
         */
        sampleFrequency?: string | null;
        /**
         * Output only. Amount of free RAM in bytes (unreliable due to Garbage Collection).
         */
        systemRamFreeBytes?: string | null;
    }
    /**
     * Network bandwidth report. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
     */
    export interface Schema$GoogleChromeManagementV1NetworkBandwidthReport {
        /**
         * Output only. Download speed in kilobits per second.
         */
        downloadSpeedKbps?: string | null;
        /**
         * Output only. Timestamp of when the report was collected.
         */
        reportTime?: string | null;
    }
    /**
     * Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
     */
    export interface Schema$GoogleChromeManagementV1NetworkDevice {
        /**
         * Output only. The integrated circuit card ID associated with the device's sim card.
         */
        iccid?: string | null;
        /**
         * Output only. IMEI (if applicable) of the corresponding network device.
         */
        imei?: string | null;
        /**
         * Output only. MAC address (if applicable) of the corresponding network device.
         */
        macAddress?: string | null;
        /**
         * Output only. The mobile directory number associated with the device's sim card.
         */
        mdn?: string | null;
        /**
         * Output only. MEID (if applicable) of the corresponding network device.
         */
        meid?: string | null;
        /**
         * Output only. Network device type.
         */
        type?: string | null;
    }
    /**
     * Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
     */
    export interface Schema$GoogleChromeManagementV1NetworkDiagnosticsReport {
        /**
         * Output only. HTTPS latency test data.
         */
        httpsLatencyData?: Schema$GoogleChromeManagementV1HttpsLatencyRoutineData;
        /**
         * Output only. Timestamp of when the diagnostics were collected.
         */
        reportTime?: string | null;
    }
    /**
     * Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_NETWORK_INFO
     */
    export interface Schema$GoogleChromeManagementV1NetworkInfo {
        /**
         * Output only. List of network devices.
         */
        networkDevices?: Schema$GoogleChromeManagementV1NetworkDevice[];
    }
    /**
     * State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
     */
    export interface Schema$GoogleChromeManagementV1NetworkStatusReport {
        /**
         * Output only. Current connection state of the network.
         */
        connectionState?: string | null;
        /**
         * Output only. Network connection type.
         */
        connectionType?: string | null;
        /**
         * Output only. Whether the wifi encryption key is turned off.
         */
        encryptionOn?: boolean | null;
        /**
         * Output only. Gateway IP address.
         */
        gatewayIpAddress?: string | null;
        /**
         * Output only. Network connection guid.
         */
        guid?: string | null;
        /**
         * Output only. LAN IP address.
         */
        lanIpAddress?: string | null;
        /**
         * Output only. Receiving bit rate measured in Megabits per second.
         */
        receivingBitRateMbps?: string | null;
        /**
         * Output only. Time at which the network state was reported.
         */
        reportTime?: string | null;
        /**
         * Output only. Frequency the report is sampled.
         */
        sampleFrequency?: string | null;
        /**
         * Output only. Signal strength for wireless networks measured in decibels.
         */
        signalStrengthDbm?: number | null;
        /**
         * Output only. Transmission bit rate measured in Megabits per second.
         */
        transmissionBitRateMbps?: string | null;
        /**
         * Output only. Transmission power measured in decibels.
         */
        transmissionPowerDbm?: number | null;
        /**
         * Output only. Wifi link quality. Value ranges from [0, 70]. 0 indicates no signal and 70 indicates a strong signal.
         */
        wifiLinkQuality?: string | null;
        /**
         * Output only. Wifi power management enabled
         */
        wifiPowerManagementEnabled?: boolean | null;
    }
    /**
     * Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT
     */
    export interface Schema$GoogleChromeManagementV1OsUpdateStatus {
        /**
         * Output only. Timestamp of the last reboot.
         */
        lastRebootTime?: string | null;
        /**
         * Output only. Timestamp of the last update check.
         */
        lastUpdateCheckTime?: string | null;
        /**
         * Output only. Timestamp of the last successful update.
         */
        lastUpdateTime?: string | null;
        /**
         * Output only. New platform version of the os image being downloaded and applied. It is only set when update status is OS_IMAGE_DOWNLOAD_IN_PROGRESS or OS_UPDATE_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for OS_UPDATE_NEED_REBOOT status for some edge cases, e.g. update engine is restarted without a reboot.
         */
        newPlatformVersion?: string | null;
        /**
         * Output only. New requested platform version from the pending updated kiosk app.
         */
        newRequestedPlatformVersion?: string | null;
        /**
         * Output only. Current state of the os update.
         */
        updateState?: string | null;
    }
    /**
     * Peripherals report. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT
     */
    export interface Schema$GoogleChromeManagementV1PeripheralsReport {
        /**
         * Output only. Timestamp of when the report was collected.
         */
        reportTime?: string | null;
        /**
         * Reports of all usb connected devices.
         */
        usbPeripheralReport?: Schema$GoogleChromeManagementV1UsbPeripheralReport[];
    }
    /**
     * Report for CountPrintJobsByPrinter, contains statistics on printer usage. Contains the total number of print jobs initiated with this printer, the number of users and the number of devices that have initiated at least one print job with this printer.
     */
    export interface Schema$GoogleChromeManagementV1PrinterReport {
        /**
         * Number of chrome devices that have been used to send print jobs to the specified printer.
         */
        deviceCount?: string | null;
        /**
         * Number of print jobs sent to the printer.
         */
        jobCount?: string | null;
        /**
         * Printer name.
         */
        printer?: string | null;
        /**
         * Printer API ID.
         */
        printerId?: string | null;
        /**
         * Printer model.
         */
        printerModel?: string | null;
        /**
         * Number of users that have sent print jobs to the printer.
         */
        userCount?: string | null;
    }
    /**
     * Represents a request to print a document that has been submitted to a printer.
     */
    export interface Schema$GoogleChromeManagementV1PrintJob {
        /**
         * Color mode.
         */
        colorMode?: string | null;
        /**
         * Print job completion timestamp.
         */
        completeTime?: string | null;
        /**
         * Number of copies.
         */
        copyCount?: number | null;
        /**
         * Print job creation timestamp.
         */
        createTime?: string | null;
        /**
         * Number of pages in the document.
         */
        documentPageCount?: number | null;
        /**
         * Duplex mode.
         */
        duplexMode?: string | null;
        /**
         * Unique ID of the print job.
         */
        id?: string | null;
        /**
         * Name of the printer used for printing.
         */
        printer?: string | null;
        /**
         * API ID of the printer used for printing.
         */
        printerId?: string | null;
        /**
         * The final state of the job.
         */
        state?: string | null;
        /**
         * The title of the document.
         */
        title?: string | null;
        /**
         * The primary e-mail address of the user who submitted the print job.
         */
        userEmail?: string | null;
        /**
         * The unique Directory API ID of the user who submitted the print job.
         */
        userId?: string | null;
    }
    /**
     * Runtime counters retrieved from CPU. Currently the runtime counters telemetry is only supported by Intel vPro PSR on Gen 14+.
     */
    export interface Schema$GoogleChromeManagementV1RuntimeCountersReport {
        /**
         * Number of times that the device has entered into the hibernation state. Currently obtained via the PSR, count from S0-\>S4.
         */
        enterHibernationCount?: string | null;
        /**
         * Number of times that the device has entered into the power-off state. Currently obtained via the PSR, count from S0-\>S5.
         */
        enterPoweroffCount?: string | null;
        /**
         * Number of times that the device has entered into the sleep state. Currently obtained via the PSR, count from S0-\>S3.
         */
        enterSleepCount?: string | null;
        /**
         * Timestamp when the report was collected.
         */
        reportTime?: string | null;
        /**
         * Total lifetime runtime. Currently always S0 runtime from Intel vPro PSR.
         */
        uptimeRuntimeDuration?: string | null;
    }
    /**
     * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_INFO
     */
    export interface Schema$GoogleChromeManagementV1StorageInfo {
        /**
         * The available space for user data storage in the device in bytes.
         */
        availableDiskBytes?: string | null;
        /**
         * The total space for user data storage in the device in bytes.
         */
        totalDiskBytes?: string | null;
        /**
         * Information for disk volumes
         */
        volume?: Schema$GoogleChromeManagementV1StorageInfoDiskVolume[];
    }
    /**
     * Information for disk volumes
     */
    export interface Schema$GoogleChromeManagementV1StorageInfoDiskVolume {
        /**
         * Free storage space in bytes.
         */
        storageFreeBytes?: string | null;
        /**
         * Total storage space in bytes.
         */
        storageTotalBytes?: string | null;
        /**
         * Disk volume id.
         */
        volumeId?: string | null;
    }
    /**
     * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_REPORT
     */
    export interface Schema$GoogleChromeManagementV1StorageStatusReport {
        /**
         * Output only. Reports on disk.
         */
        disk?: Schema$GoogleChromeManagementV1DiskInfo[];
        /**
         * Output only. Timestamp of when the sample was collected on device
         */
        reportTime?: string | null;
    }
    /**
     * App installation data.
     */
    export interface Schema$GoogleChromeManagementV1TelemetryAppInstallEvent {
        /**
         * App id. For PWAs this is the start URL, and for extensions this is the extension id.
         */
        appId?: string | null;
        /**
         * App installation reason.
         */
        appInstallReason?: string | null;
        /**
         * App installation source.
         */
        appInstallSource?: string | null;
        /**
         * App installation time depending on the app lifecycle.
         */
        appInstallTime?: string | null;
        /**
         * Type of app.
         */
        appType?: string | null;
    }
    /**
     * App launch data.
     */
    export interface Schema$GoogleChromeManagementV1TelemetryAppLaunchEvent {
        /**
         * App id. For PWAs this is the start URL, and for extensions this is the extension id.
         */
        appId?: string | null;
        /**
         * App launch source.
         */
        appLaunchSource?: string | null;
        /**
         * Type of app.
         */
        appType?: string | null;
    }
    /**
     * App uninstall data.
     */
    export interface Schema$GoogleChromeManagementV1TelemetryAppUninstallEvent {
        /**
         * App id. For PWAs this is the start URL, and for extensions this is the extension id.
         */
        appId?: string | null;
        /**
         * Type of app.
         */
        appType?: string | null;
        /**
         * App uninstall source.
         */
        appUninstallSource?: string | null;
    }
    /**
     * `TelemetryAudioSevereUnderrunEvent` is triggered when a audio devices run out of buffer data for more than 5 seconds. * Granular permission needed: TELEMETRY_API_AUDIO_REPORT
     */
    export interface Schema$GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent {
    }
    /**
     * Telemetry data collected from a managed device. * Granular permission needed: TELEMETRY_API_DEVICE
     */
    export interface Schema$GoogleChromeManagementV1TelemetryDevice {
        /**
         * Output only. App reports collected periodically sorted in a decreasing order of report_time.
         */
        appReport?: Schema$GoogleChromeManagementV1AppReport[];
        /**
         * Output only. Audio reports collected periodically sorted in a decreasing order of report_time.
         */
        audioStatusReport?: Schema$GoogleChromeManagementV1AudioStatusReport[];
        /**
         * Output only. Information on battery specs for the device.
         */
        batteryInfo?: Schema$GoogleChromeManagementV1BatteryInfo[];
        /**
         * Output only. Battery reports collected periodically.
         */
        batteryStatusReport?: Schema$GoogleChromeManagementV1BatteryStatusReport[];
        /**
         * Output only. Boot performance reports of the device.
         */
        bootPerformanceReport?: Schema$GoogleChromeManagementV1BootPerformanceReport[];
        /**
         * Output only. Information regarding CPU specs for the device.
         */
        cpuInfo?: Schema$GoogleChromeManagementV1CpuInfo[];
        /**
         * Output only. CPU status reports collected periodically sorted in a decreasing order of report_time.
         */
        cpuStatusReport?: Schema$GoogleChromeManagementV1CpuStatusReport[];
        /**
         * Output only. Google Workspace Customer whose enterprise enrolled the device.
         */
        customer?: string | null;
        /**
         * Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab
         */
        deviceId?: string | null;
        /**
         * Output only. Contains information regarding Graphic peripherals for the device.
         */
        graphicsInfo?: Schema$GoogleChromeManagementV1GraphicsInfo;
        /**
         * Output only. Graphics reports collected periodically.
         */
        graphicsStatusReport?: Schema$GoogleChromeManagementV1GraphicsStatusReport[];
        /**
         * Output only. Heartbeat status report containing timestamps periodically sorted in decreasing order of report_time
         */
        heartbeatStatusReport?: Schema$GoogleChromeManagementV1HeartbeatStatusReport[];
        /**
         * Output only. Kiosk app status report for the kiosk device
         */
        kioskAppStatusReport?: Schema$GoogleChromeManagementV1KioskAppStatusReport[];
        /**
         * Output only. Information regarding memory specs for the device.
         */
        memoryInfo?: Schema$GoogleChromeManagementV1MemoryInfo;
        /**
         * Output only. Memory status reports collected periodically sorted decreasing by report_time.
         */
        memoryStatusReport?: Schema$GoogleChromeManagementV1MemoryStatusReport[];
        /**
         * Output only. Resource name of the device.
         */
        name?: string | null;
        /**
         * Output only. Network bandwidth reports collected periodically sorted in a decreasing order of report_time.
         */
        networkBandwidthReport?: Schema$GoogleChromeManagementV1NetworkBandwidthReport[];
        /**
         * Output only. Network diagnostics collected periodically.
         */
        networkDiagnosticsReport?: Schema$GoogleChromeManagementV1NetworkDiagnosticsReport[];
        /**
         * Output only. Network devices information.
         */
        networkInfo?: Schema$GoogleChromeManagementV1NetworkInfo;
        /**
         * Output only. Network specs collected periodically.
         */
        networkStatusReport?: Schema$GoogleChromeManagementV1NetworkStatusReport[];
        /**
         * Output only. Organization unit ID of the device.
         */
        orgUnitId?: string | null;
        /**
         * Output only. Contains relevant information regarding ChromeOS update status.
         */
        osUpdateStatus?: Schema$GoogleChromeManagementV1OsUpdateStatus[];
        /**
         * Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.
         */
        peripheralsReport?: Schema$GoogleChromeManagementV1PeripheralsReport[];
        /**
         * Output only. Runtime counters reports collected device lifetime runtime, as well as the counts of S0-\>S3, S0-\>S4, and S0-\>S5 transitions, meaning entering into sleep, hibernation, and power-off states
         */
        runtimeCountersReport?: Schema$GoogleChromeManagementV1RuntimeCountersReport[];
        /**
         * Output only. Device serial number. This value is the same as the Admin Console's Serial Number in the ChromeOS Devices tab.
         */
        serialNumber?: string | null;
        /**
         * Output only. Information of storage specs for the device.
         */
        storageInfo?: Schema$GoogleChromeManagementV1StorageInfo;
        /**
         * Output only. Storage reports collected periodically.
         */
        storageStatusReport?: Schema$GoogleChromeManagementV1StorageStatusReport[];
        /**
         * Output only. Information on Thunderbolt bus.
         */
        thunderboltInfo?: Schema$GoogleChromeManagementV1ThunderboltInfo[];
    }
    /**
     * Information about a device associated with telemetry data. * Granular Permission needed: TELEMETRY_API_DEVICE
     */
    export interface Schema$GoogleChromeManagementV1TelemetryDeviceInfo {
        /**
         * Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.
         */
        deviceId?: string | null;
        /**
         * Output only. Organization unit ID of the device.
         */
        orgUnitId?: string | null;
    }
    /**
     * Telemetry data reported by a managed device.
     */
    export interface Schema$GoogleChromeManagementV1TelemetryEvent {
        /**
         * Output only. Payload for app install event. Present only when `event_type` is `APP_INSTALLED`.
         */
        appInstallEvent?: Schema$GoogleChromeManagementV1TelemetryAppInstallEvent;
        /**
         * Output only. Payload for app launch event.Present only when `event_type` is `APP_LAUNCHED`.
         */
        appLaunchEvent?: Schema$GoogleChromeManagementV1TelemetryAppLaunchEvent;
        /**
         * Output only. Payload for app uninstall event. Present only when `event_type` is `APP_UNINSTALLED`.
         */
        appUninstallEvent?: Schema$GoogleChromeManagementV1TelemetryAppUninstallEvent;
        /**
         * Output only. Payload for audio severe underrun event. Present only when the `event_type` field is `AUDIO_SEVERE_UNDERRUN`.
         */
        audioSevereUnderrunEvent?: Schema$GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent;
        /**
         * Output only. Information about the device associated with the event.
         */
        device?: Schema$GoogleChromeManagementV1TelemetryDeviceInfo;
        /**
         * The event type of the current event.
         */
        eventType?: string | null;
        /**
         * Output only. Payload for HTTPS latency change event. Present only when `event_type` is `NETWORK_HTTPS_LATENCY_CHANGE`.
         */
        httpsLatencyChangeEvent?: Schema$GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent;
        /**
         * Output only. Resource name of the event.
         */
        name?: string | null;
        /**
         * Output only. Payload for network connection state change event. Present only when `event_type` is `NETWORK_STATE_CHANGE`.
         */
        networkStateChangeEvent?: Schema$GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent;
        /**
         * Timestamp that represents when the event was reported.
         */
        reportTime?: string | null;
        /**
         * Output only. Payload for usb peripherals event. Present only when the `event_type` field is either `USB_ADDED` or `USB_REMOVED`.
         */
        usbPeripheralsEvent?: Schema$GoogleChromeManagementV1TelemetryUsbPeripheralsEvent;
        /**
         * Output only. Information about the user associated with the event.
         */
        user?: Schema$GoogleChromeManagementV1TelemetryUserInfo;
        /**
         * Output only. Payload for VPN connection state change event. Present only when `event_type` is `VPN_CONNECTION_STATE_CHANGE`.
         */
        vpnConnectionStateChangeEvent?: Schema$GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent;
        /**
         * Output only. Payload for WiFi signal strength events. Present only when `event_type` is `WIFI_SIGNAL_STRENGTH_LOW` or `WIFI_SIGNAL_STRENGTH_RECOVERED`.
         */
        wifiSignalStrengthEvent?: Schema$GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent;
    }
    /**
     * Configures how the telemetry events should be filtered.
     */
    export interface Schema$GoogleChromeManagementV1TelemetryEventNotificationFilter {
        /**
         * Only sends the notifications for events of these types. Must not be empty.
         */
        eventTypes?: string[] | null;
    }
    /**
     * Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
     */
    export interface Schema$GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent {
        /**
         * HTTPS latency routine data that triggered the event.
         */
        httpsLatencyRoutineData?: Schema$GoogleChromeManagementV1HttpsLatencyRoutineData;
        /**
         * Current HTTPS latency state.
         */
        httpsLatencyState?: string | null;
    }
    /**
     * `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
     */
    export interface Schema$GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent {
        /**
         * Current connection state of the network.
         */
        connectionState?: string | null;
        /**
         * Unique identifier of the network.
         */
        guid?: string | null;
    }
    /**
     * `TelemetryNetworkSignalStrengthEvent` is triggered on WiFi signal strength events. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
     */
    export interface Schema$GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent {
        /**
         * Unique identifier of the network.
         */
        guid?: string | null;
        /**
         * Signal strength RSSI value.
         */
        signalStrengthDbm?: number | null;
    }
    /**
     * Configuration to receive notifications of telemetry data.
     */
    export interface Schema$GoogleChromeManagementV1TelemetryNotificationConfig {
        /**
         * Output only. Google Workspace customer that owns the resource.
         */
        customer?: string | null;
        /**
         * Only send notifications for telemetry data matching this filter.
         */
        filter?: Schema$GoogleChromeManagementV1TelemetryNotificationFilter;
        /**
         * The pubsub topic to which notifications are published to.
         */
        googleCloudPubsubTopic?: string | null;
        /**
         * Output only. Resource name of the notification configuration.
         */
        name?: string | null;
    }
    /**
     * Configures how the telemetry data should be filtered.
     */
    export interface Schema$GoogleChromeManagementV1TelemetryNotificationFilter {
        /**
         * If set, only sends notifications for telemetry data coming from this device.
         */
        deviceId?: string | null;
        /**
         * If set, only sends notifications for telemetry data coming from devices in this org unit.
         */
        deviceOrgUnitId?: string | null;
        /**
         * Only sends notifications for the telemetry events matching this filter.
         */
        telemetryEventNotificationFilter?: Schema$GoogleChromeManagementV1TelemetryEventNotificationFilter;
        /**
         * If set, only sends notifications for telemetry data coming from devices owned by this user.
         */
        userEmail?: string | null;
        /**
         * If set, only sends notifications for telemetry data coming from devices owned by users in this org unit.
         */
        userOrgUnitId?: string | null;
    }
    /**
     * `TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT
     */
    export interface Schema$GoogleChromeManagementV1TelemetryUsbPeripheralsEvent {
        /**
         * List of usb devices that were either added or removed.
         */
        usbPeripheralReport?: Schema$GoogleChromeManagementV1UsbPeripheralReport[];
    }
    /**
     * Telemetry data collected from a managed user. * Granular permission needed: TELEMETRY_API_USER
     */
    export interface Schema$GoogleChromeManagementV1TelemetryUser {
        /**
         * G Suite Customer whose enterprise enrolled the device.
         */
        customer?: string | null;
        /**
         * Resource name of the user.
         */
        name?: string | null;
        /**
         * Organization unit of the user.
         */
        orgUnitId?: string | null;
        /**
         * Telemetry data collected from a managed user and device.
         */
        userDevice?: Schema$GoogleChromeManagementV1TelemetryUserDevice[];
        /**
         * Email address of the user.
         */
        userEmail?: string | null;
        /**
         * Directory ID of the user.
         */
        userId?: string | null;
    }
    /**
     * Telemetry data collected for a managed user and device. * Granular permission needed: TELEMETRY_API_DEVICE
     */
    export interface Schema$GoogleChromeManagementV1TelemetryUserDevice {
        /**
         * Output only. App reports collected periodically sorted in a decreasing order of report_time.
         */
        appReport?: Schema$GoogleChromeManagementV1AppReport[];
        /**
         * Output only. Audio reports collected periodically sorted in a decreasing order of report_time.
         */
        audioStatusReport?: Schema$GoogleChromeManagementV1AudioStatusReport[];
        /**
         * Output only. Device activity reports collected periodically sorted in a decreasing order of report_time.
         */
        deviceActivityReport?: Schema$GoogleChromeManagementV1DeviceActivityReport[];
        /**
         * The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.
         */
        deviceId?: string | null;
        /**
         * Output only. Network bandwidth reports collected periodically sorted in a decreasing order of report_time.
         */
        networkBandwidthReport?: Schema$GoogleChromeManagementV1NetworkBandwidthReport[];
        /**
         * Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.
         */
        peripheralsReport?: Schema$GoogleChromeManagementV1PeripheralsReport[];
    }
    /**
     * Information about a user associated with telemetry data. * Granular permission needed: TELEMETRY_API_USER
     */
    export interface Schema$GoogleChromeManagementV1TelemetryUserInfo {
        /**
         * Output only. User's email.
         */
        email?: string | null;
        /**
         * Output only. Organization unit ID of the user.
         */
        orgUnitId?: string | null;
    }
    /**
     * Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BUS_DEVICE_INFO
     */
    export interface Schema$GoogleChromeManagementV1ThunderboltInfo {
        /**
         * Security level of the Thunderbolt bus.
         */
        securityLevel?: string | null;
    }
    /**
     * Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
     */
    export interface Schema$GoogleChromeManagementV1TotalMemoryEncryptionInfo {
        /**
         * Memory encryption algorithm.
         */
        encryptionAlgorithm?: string | null;
        /**
         * The state of memory encryption on the device.
         */
        encryptionState?: string | null;
        /**
         * The length of the encryption keys.
         */
        keyLength?: string | null;
        /**
         * The maximum number of keys that can be used for encryption.
         */
        maxKeys?: string | null;
    }
    /**
     * Information of an internal touch screen device.
     */
    export interface Schema$GoogleChromeManagementV1TouchScreenDevice {
        /**
         * Output only. Touch screen device display name.
         */
        displayName?: string | null;
        /**
         * Output only. Touch screen device is stylus capable or not.
         */
        stylusCapable?: boolean | null;
        /**
         * Output only. Number of touch points supported on the device.
         */
        touchPointCount?: number | null;
    }
    /**
     * Information on the device touch screen.
     */
    export interface Schema$GoogleChromeManagementV1TouchScreenInfo {
        /**
         * Output only. List of the internal touch screen devices.
         */
        devices?: Schema$GoogleChromeManagementV1TouchScreenDevice[];
        /**
         * Output only. Touchpad library name used by the input stack.
         */
        touchpadLibrary?: string | null;
    }
    /**
     * USB connected peripheral report.
     */
    export interface Schema$GoogleChromeManagementV1UsbPeripheralReport {
        /**
         * Output only. Categories the device belongs to https://www.usb.org/defined-class-codes
         */
        categories?: string[] | null;
        /**
         * Output only. Class ID https://www.usb.org/defined-class-codes
         */
        classId?: number | null;
        /**
         * Output only. Firmware version
         */
        firmwareVersion?: string | null;
        /**
         * Output only. Device name, model name, or product name
         */
        name?: string | null;
        /**
         * Output only. Product ID
         */
        pid?: number | null;
        /**
         * Output only. Subclass ID https://www.usb.org/defined-class-codes
         */
        subclassId?: number | null;
        /**
         * Output only. Vendor name
         */
        vendor?: string | null;
        /**
         * Output only. Vendor ID
         */
        vid?: number | null;
    }
    /**
     * Report for CountPrintJobsByUser, contains printing statistics for a user. Contains the number of printers, the number of devices used to initiate print jobs, and the number of print jobs initiated.
     */
    export interface Schema$GoogleChromeManagementV1UserPrintReport {
        /**
         * Number of chrome devices that have been used to initiate print jobs by the user.
         */
        deviceCount?: string | null;
        /**
         * Number of print jobs initiated by the user.
         */
        jobCount?: string | null;
        /**
         * Number of printers used by the user.
         */
        printerCount?: string | null;
        /**
         * The primary e-mail address of the user.
         */
        userEmail?: string | null;
        /**
         * The unique Directory API ID of the user.
         */
        userId?: string | null;
    }
    /**
     * Details of a user requesting an extension, including the email and the justification.
     */
    export interface Schema$GoogleChromeManagementV1UserRequestingExtensionDetails {
        /**
         * The e-mail address of a user that has requested the extension.
         */
        email?: string | null;
        /**
         * Request justification as entered by the user.
         */
        justification?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$GoogleProtobufEmpty {
    }
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    export interface Schema$GoogleRpcStatus {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number | null;
        /**
         * A list of messages that carry the error details. There is a common set of message types for APIs to use.
         */
        details?: Array<{
            [key: string]: any;
        }> | null;
        /**
         * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
         */
        message?: string | null;
    }
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    export interface Schema$GoogleTypeDate {
        /**
         * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
         */
        day?: number | null;
        /**
         * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
         */
        month?: number | null;
        /**
         * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
         */
        year?: number | null;
    }
    export class Resource$Customers {
        context: APIRequestContext;
        apps: Resource$Customers$Apps;
        reports: Resource$Customers$Reports;
        telemetry: Resource$Customers$Telemetry;
        constructor(context: APIRequestContext);
    }
    export class Resource$Customers$Apps {
        context: APIRequestContext;
        android: Resource$Customers$Apps$Android;
        chrome: Resource$Customers$Apps$Chrome;
        web: Resource$Customers$Apps$Web;
        constructor(context: APIRequestContext);
        /**
         * Generate summary of app installation requests.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countChromeAppRequests(params: Params$Resource$Customers$Apps$Countchromeapprequests, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countChromeAppRequests(params?: Params$Resource$Customers$Apps$Countchromeapprequests, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>;
        countChromeAppRequests(params: Params$Resource$Customers$Apps$Countchromeapprequests, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countChromeAppRequests(params: Params$Resource$Customers$Apps$Countchromeapprequests, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>): void;
        countChromeAppRequests(params: Params$Resource$Customers$Apps$Countchromeapprequests, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>): void;
        countChromeAppRequests(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeAppRequestsResponse>): void;
        /**
         * Get a list of devices that have requested to install an extension.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        fetchDevicesRequestingExtension(params: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension, options: StreamMethodOptions): GaxiosPromise<Readable>;
        fetchDevicesRequestingExtension(params?: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>;
        fetchDevicesRequestingExtension(params: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        fetchDevicesRequestingExtension(params: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>): void;
        fetchDevicesRequestingExtension(params: Params$Resource$Customers$Apps$Fetchdevicesrequestingextension, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>): void;
        fetchDevicesRequestingExtension(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchDevicesRequestingExtensionResponse>): void;
        /**
         * Get a list of users that have requested to install an extension.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        fetchUsersRequestingExtension(params: Params$Resource$Customers$Apps$Fetchusersrequestingextension, options: StreamMethodOptions): GaxiosPromise<Readable>;
        fetchUsersRequestingExtension(params?: Params$Resource$Customers$Apps$Fetchusersrequestingextension, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>;
        fetchUsersRequestingExtension(params: Params$Resource$Customers$Apps$Fetchusersrequestingextension, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        fetchUsersRequestingExtension(params: Params$Resource$Customers$Apps$Fetchusersrequestingextension, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>): void;
        fetchUsersRequestingExtension(params: Params$Resource$Customers$Apps$Fetchusersrequestingextension, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>): void;
        fetchUsersRequestingExtension(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FetchUsersRequestingExtensionResponse>): void;
    }
    export interface Params$Resource$Customers$Apps$Countchromeapprequests extends StandardParameters {
        /**
         * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
         */
        customer?: string;
        /**
         * Field used to order results. Supported fields: * request_count * latest_request_time
         */
        orderBy?: string;
        /**
         * The ID of the organizational unit.
         */
        orgUnitId?: string;
        /**
         * Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50.
         */
        pageSize?: number;
        /**
         * Token to specify the page of the request to be returned.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Customers$Apps$Fetchdevicesrequestingextension extends StandardParameters {
        /**
         * Required. The customer ID or "my_customer" prefixed with "customers/".
         */
        customer?: string;
        /**
         * Required. The extension for which we want to find requesting devices.
         */
        extensionId?: string;
        /**
         * The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
         */
        orgUnitId?: string;
        /**
         * Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
         */
        pageSize?: number;
        /**
         * Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Customers$Apps$Fetchusersrequestingextension extends StandardParameters {
        /**
         * Required. The customer ID or "my_customer" prefixed with "customers/".
         */
        customer?: string;
        /**
         * Required. The extension for which we want to find the requesting users.
         */
        extensionId?: string;
        /**
         * The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
         */
        orgUnitId?: string;
        /**
         * Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
         */
        pageSize?: number;
        /**
         * Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
         */
        pageToken?: string;
    }
    export class Resource$Customers$Apps$Android {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Get a specific app for a customer by its resource name.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Customers$Apps$Android$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Customers$Apps$Android$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>;
        get(params: Params$Resource$Customers$Apps$Android$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Customers$Apps$Android$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>): void;
        get(params: Params$Resource$Customers$Apps$Android$Get, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>): void;
        get(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>): void;
    }
    export interface Params$Resource$Customers$Apps$Android$Get extends StandardParameters {
        /**
         * Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
         */
        name?: string;
    }
    export class Resource$Customers$Apps$Chrome {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Get a specific app for a customer by its resource name.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Customers$Apps$Chrome$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Customers$Apps$Chrome$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>;
        get(params: Params$Resource$Customers$Apps$Chrome$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Customers$Apps$Chrome$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>): void;
        get(params: Params$Resource$Customers$Apps$Chrome$Get, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>): void;
        get(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>): void;
    }
    export interface Params$Resource$Customers$Apps$Chrome$Get extends StandardParameters {
        /**
         * Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
         */
        name?: string;
    }
    export class Resource$Customers$Apps$Web {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Get a specific app for a customer by its resource name.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Customers$Apps$Web$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Customers$Apps$Web$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>;
        get(params: Params$Resource$Customers$Apps$Web$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Customers$Apps$Web$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>): void;
        get(params: Params$Resource$Customers$Apps$Web$Get, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>): void;
        get(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>): void;
    }
    export interface Params$Resource$Customers$Apps$Web$Get extends StandardParameters {
        /**
         * Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
         */
        name?: string;
    }
    export class Resource$Customers$Reports {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countChromeBrowsersNeedingAttention(params: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countChromeBrowsersNeedingAttention(params?: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>;
        countChromeBrowsersNeedingAttention(params: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countChromeBrowsersNeedingAttention(params: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>): void;
        countChromeBrowsersNeedingAttention(params: Params$Resource$Customers$Reports$Countchromebrowsersneedingattention, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>): void;
        countChromeBrowsersNeedingAttention(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse>): void;
        /**
         * Get a count of Chrome crash events.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countChromeCrashEvents(params: Params$Resource$Customers$Reports$Countchromecrashevents, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countChromeCrashEvents(params?: Params$Resource$Customers$Reports$Countchromecrashevents, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>;
        countChromeCrashEvents(params: Params$Resource$Customers$Reports$Countchromecrashevents, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countChromeCrashEvents(params: Params$Resource$Customers$Reports$Countchromecrashevents, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>): void;
        countChromeCrashEvents(params: Params$Resource$Customers$Reports$Countchromecrashevents, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>): void;
        countChromeCrashEvents(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeCrashEventsResponse>): void;
        /**
         * Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countChromeDevicesReachingAutoExpirationDate(params: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countChromeDevicesReachingAutoExpirationDate(params?: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>;
        countChromeDevicesReachingAutoExpirationDate(params: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countChromeDevicesReachingAutoExpirationDate(params: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>): void;
        countChromeDevicesReachingAutoExpirationDate(params: Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>): void;
        countChromeDevicesReachingAutoExpirationDate(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse>): void;
        /**
         * Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countChromeDevicesThatNeedAttention(params: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countChromeDevicesThatNeedAttention(params?: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>;
        countChromeDevicesThatNeedAttention(params: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countChromeDevicesThatNeedAttention(params: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>): void;
        countChromeDevicesThatNeedAttention(params: Params$Resource$Customers$Reports$Countchromedevicesthatneedattention, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>): void;
        countChromeDevicesThatNeedAttention(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse>): void;
        /**
         * Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countChromeHardwareFleetDevices(params: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countChromeHardwareFleetDevices(params?: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>;
        countChromeHardwareFleetDevices(params: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countChromeHardwareFleetDevices(params: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>): void;
        countChromeHardwareFleetDevices(params: Params$Resource$Customers$Reports$Countchromehardwarefleetdevices, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>): void;
        countChromeHardwareFleetDevices(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse>): void;
        /**
         * Generate report of installed Chrome versions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countChromeVersions(params: Params$Resource$Customers$Reports$Countchromeversions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countChromeVersions(params?: Params$Resource$Customers$Reports$Countchromeversions, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>;
        countChromeVersions(params: Params$Resource$Customers$Reports$Countchromeversions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countChromeVersions(params: Params$Resource$Customers$Reports$Countchromeversions, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>): void;
        countChromeVersions(params: Params$Resource$Customers$Reports$Countchromeversions, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>): void;
        countChromeVersions(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>): void;
        /**
         * Generate report of app installations.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countInstalledApps(params: Params$Resource$Customers$Reports$Countinstalledapps, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countInstalledApps(params?: Params$Resource$Customers$Reports$Countinstalledapps, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>;
        countInstalledApps(params: Params$Resource$Customers$Reports$Countinstalledapps, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countInstalledApps(params: Params$Resource$Customers$Reports$Countinstalledapps, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>): void;
        countInstalledApps(params: Params$Resource$Customers$Reports$Countinstalledapps, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>): void;
        countInstalledApps(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>): void;
        /**
         * Get a summary of printing done by each printer.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countPrintJobsByPrinter(params: Params$Resource$Customers$Reports$Countprintjobsbyprinter, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countPrintJobsByPrinter(params?: Params$Resource$Customers$Reports$Countprintjobsbyprinter, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>;
        countPrintJobsByPrinter(params: Params$Resource$Customers$Reports$Countprintjobsbyprinter, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countPrintJobsByPrinter(params: Params$Resource$Customers$Reports$Countprintjobsbyprinter, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>): void;
        countPrintJobsByPrinter(params: Params$Resource$Customers$Reports$Countprintjobsbyprinter, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>): void;
        countPrintJobsByPrinter(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByPrinterResponse>): void;
        /**
         * Get a summary of printing done by each user.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        countPrintJobsByUser(params: Params$Resource$Customers$Reports$Countprintjobsbyuser, options: StreamMethodOptions): GaxiosPromise<Readable>;
        countPrintJobsByUser(params?: Params$Resource$Customers$Reports$Countprintjobsbyuser, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>;
        countPrintJobsByUser(params: Params$Resource$Customers$Reports$Countprintjobsbyuser, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        countPrintJobsByUser(params: Params$Resource$Customers$Reports$Countprintjobsbyuser, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>): void;
        countPrintJobsByUser(params: Params$Resource$Customers$Reports$Countprintjobsbyuser, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>): void;
        countPrintJobsByUser(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountPrintJobsByUserResponse>): void;
        /**
         * Get a list of print jobs.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        enumeratePrintJobs(params: Params$Resource$Customers$Reports$Enumerateprintjobs, options: StreamMethodOptions): GaxiosPromise<Readable>;
        enumeratePrintJobs(params?: Params$Resource$Customers$Reports$Enumerateprintjobs, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>;
        enumeratePrintJobs(params: Params$Resource$Customers$Reports$Enumerateprintjobs, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        enumeratePrintJobs(params: Params$Resource$Customers$Reports$Enumerateprintjobs, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>): void;
        enumeratePrintJobs(params: Params$Resource$Customers$Reports$Enumerateprintjobs, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>): void;
        enumeratePrintJobs(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1EnumeratePrintJobsResponse>): void;
        /**
         * Generate report of managed Chrome browser devices that have a specified app installed.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        findInstalledAppDevices(params: Params$Resource$Customers$Reports$Findinstalledappdevices, options: StreamMethodOptions): GaxiosPromise<Readable>;
        findInstalledAppDevices(params?: Params$Resource$Customers$Reports$Findinstalledappdevices, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>;
        findInstalledAppDevices(params: Params$Resource$Customers$Reports$Findinstalledappdevices, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        findInstalledAppDevices(params: Params$Resource$Customers$Reports$Findinstalledappdevices, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>): void;
        findInstalledAppDevices(params: Params$Resource$Customers$Reports$Findinstalledappdevices, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>): void;
        findInstalledAppDevices(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>): void;
    }
    export interface Params$Resource$Customers$Reports$Countchromebrowsersneedingattention extends StandardParameters {
        /**
         * Required. The customer ID or "my_customer" prefixed with "customers/".
         */
        customer?: string;
        /**
         * Optional. The ID of the organizational unit. If omitted, all data will be returned.
         */
        orgUnitId?: string;
    }
    export interface Params$Resource$Customers$Reports$Countchromecrashevents extends StandardParameters {
        /**
         * Customer ID.
         */
        customer?: string;
        /**
         * Query string to filter results, AND-separated fields in EBNF syntax. Supported filter fields: * major_browser_version * minor_browser_version * browser_channel * device_platform * past_number_days Example: `major_browser_version = 'M115' AND past_number_days = '28'`.
         */
        filter?: string;
        /**
         * Field used to order results. Supported order by fields: * browser_version * count * date
         */
        orderBy?: string;
        /**
         * If specified, only count the number of crash events of the devices in this organizational unit.
         */
        orgUnitId?: string;
    }
    export interface Params$Resource$Customers$Reports$Countchromedevicesreachingautoexpirationdate extends StandardParameters {
        /**
         * Required. The customer ID or "my_customer" prefixed with "customers/".
         */
        customer?: string;
        /**
         * Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date.
         */
        maxAueDate?: string;
        /**
         * Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date.
         */
        minAueDate?: string;
        /**
         * Optional. The organizational unit ID, if omitted, will return data for all organizational units.
         */
        orgUnitId?: string;
    }
    export interface Params$Resource$Customers$Reports$Countchromedevicesthatneedattention extends StandardParameters {
        /**
         * Required. The customer ID or "my_customer" prefixed with "customers/".
         */
        customer?: string;
        /**
         * Optional. The ID of the organizational unit. If omitted, all data will be returned.
         */
        orgUnitId?: string;
        /**
         * Required. Mask of the fields that should be populated in the returned report.
         */
        readMask?: string;
    }
    export interface Params$Resource$Customers$Reports$Countchromehardwarefleetdevices extends StandardParameters {
        /**
         * Required. The customer ID or "my_customer".
         */
        customer?: string;
        /**
         * Optional. The ID of the organizational unit. If omitted, all data will be returned.
         */
        orgUnitId?: string;
        /**
         * Required. Mask of the fields that should be populated in the returned report.
         */
        readMask?: string;
    }
    export interface Params$Resource$Customers$Reports$Countchromeversions extends StandardParameters {
        /**
         * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
         */
        customer?: string;
        /**
         * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
         */
        filter?: string;
        /**
         * The ID of the organizational unit.
         */
        orgUnitId?: string;
        /**
         * Maximum number of results to return. Maximum and default are 100.
         */
        pageSize?: number;
        /**
         * Token to specify the page of the request to be returned.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Customers$Reports$Countinstalledapps extends StandardParameters {
        /**
         * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
         */
        customer?: string;
        /**
         * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id
         */
        filter?: string;
        /**
         * Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id
         */
        orderBy?: string;
        /**
         * The ID of the organizational unit.
         */
        orgUnitId?: string;
        /**
         * Maximum number of results to return. Maximum and default are 100.
         */
        pageSize?: number;
        /**
         * Token to specify the page of the request to be returned.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Customers$Reports$Countprintjobsbyprinter extends StandardParameters {
        /**
         * Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
         */
        customer?: string;
        /**
         * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only \>= and <= comparators are supported in this filter. Supported filter fields: * complete_time
         */
        filter?: string;
        /**
         * Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count
         */
        orderBy?: string;
        /**
         * Maximum number of results to return. Maximum and default are 100.
         */
        pageSize?: number;
        /**
         * Token to specify the page of the response to be returned.
         */
        pageToken?: string;
        /**
         * The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned.
         */
        printerOrgUnitId?: string;
    }
    export interface Params$Resource$Customers$Reports$Countprintjobsbyuser extends StandardParameters {
        /**
         * Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
         */
        customer?: string;
        /**
         * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only \>= and <= comparators are supported in this filter. Supported filter fields: * complete_time
         */
        filter?: string;
        /**
         * Field used to order results. If omitted, results will be ordered in ascending order of the 'user_email' field. Supported order_by fields: * user_email * job_count * printer_count * device_count
         */
        orderBy?: string;
        /**
         * Maximum number of results to return. Maximum and default are 100.
         */
        pageSize?: number;
        /**
         * Token to specify the page of the response to be returned.
         */
        pageToken?: string;
        /**
         * The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted.
         */
        printerOrgUnitId?: string;
    }
    export interface Params$Resource$Customers$Reports$Enumerateprintjobs extends StandardParameters {
        /**
         * Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
         */
        customer?: string;
        /**
         * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only \>= and <= comparators are supported for `complete_time`. Note: Only = comparator supported for `user_id` and `printer_id`. Supported filter fields: * complete_time * printer_id * user_id
         */
        filter?: string;
        /**
         * Field used to order results. If not specified, results will be ordered in descending order of the `complete_time` field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email
         */
        orderBy?: string;
        /**
         * The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50.
         */
        pageSize?: number;
        /**
         * A page token received from a previous `EnumeratePrintJobs` call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to `EnumeratePrintJobs` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned.
         */
        printerOrgUnitId?: string;
    }
    export interface Params$Resource$Customers$Reports$Findinstalledappdevices extends StandardParameters {
        /**
         * Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
         */
        appId?: string;
        /**
         * Type of the app.
         */
        appType?: string;
        /**
         * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
         */
        customer?: string;
        /**
         * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
         */
        filter?: string;
        /**
         * Field used to order results. Supported order by fields: * machine * device_id
         */
        orderBy?: string;
        /**
         * The ID of the organizational unit.
         */
        orgUnitId?: string;
        /**
         * Maximum number of results to return. Maximum and default are 100.
         */
        pageSize?: number;
        /**
         * Token to specify the page of the request to be returned.
         */
        pageToken?: string;
    }
    export class Resource$Customers$Telemetry {
        context: APIRequestContext;
        devices: Resource$Customers$Telemetry$Devices;
        events: Resource$Customers$Telemetry$Events;
        notificationConfigs: Resource$Customers$Telemetry$Notificationconfigs;
        users: Resource$Customers$Telemetry$Users;
        constructor(context: APIRequestContext);
    }
    export class Resource$Customers$Telemetry$Devices {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Get telemetry device.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Customers$Telemetry$Devices$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Customers$Telemetry$Devices$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1TelemetryDevice>;
        get(params: Params$Resource$Customers$Telemetry$Devices$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Customers$Telemetry$Devices$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>): void;
        get(params: Params$Resource$Customers$Telemetry$Devices$Get, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>): void;
        get(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryDevice>): void;
        /**
         * List all telemetry devices.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Customers$Telemetry$Devices$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Customers$Telemetry$Devices$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>;
        list(params: Params$Resource$Customers$Telemetry$Devices$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Customers$Telemetry$Devices$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>): void;
        list(params: Params$Resource$Customers$Telemetry$Devices$List, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryDevicesResponse>): void;
    }
    export interface Params$Resource$Customers$Telemetry$Devices$Get extends StandardParameters {
        /**
         * Required. Name of the `TelemetryDevice` to return.
         */
        name?: string;
        /**
         * Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
         */
        readMask?: string;
    }
    export interface Params$Resource$Customers$Telemetry$Devices$List extends StandardParameters {
        /**
         * Optional. Only include resources that match the filter. Requests that don't specify a "reports_timestamp" value will default to returning only recent reports. Specify "reports_timestamp\>=0" to get all report data. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
         */
        filter?: string;
        /**
         * Maximum number of results to return. Default value is 100. Maximum value is 1000.
         */
        pageSize?: number;
        /**
         * Token to specify next page in the list.
         */
        pageToken?: string;
        /**
         * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
         */
        parent?: string;
        /**
         * Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
         */
        readMask?: string;
    }
    export class Resource$Customers$Telemetry$Events {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * List telemetry events.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Customers$Telemetry$Events$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Customers$Telemetry$Events$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>;
        list(params: Params$Resource$Customers$Telemetry$Events$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Customers$Telemetry$Events$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>): void;
        list(params: Params$Resource$Customers$Telemetry$Events$List, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryEventsResponse>): void;
    }
    export interface Params$Resource$Customers$Telemetry$Events$List extends StandardParameters {
        /**
         * Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
         */
        filter?: string;
        /**
         * Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000.
         */
        pageSize?: number;
        /**
         * Optional. Token to specify next page in the list.
         */
        pageToken?: string;
        /**
         * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
         */
        parent?: string;
        /**
         * Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required. Supported read_mask paths are: - device - user - audio_severe_underrun_event - usb_peripherals_event - https_latency_change_event - network_state_change_event - wifi_signal_strength_event - vpn_connection_state_change_event - app_install_event - app_uninstall_event - app_launch_event
         */
        readMask?: string;
    }
    export class Resource$Customers$Telemetry$Notificationconfigs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Create a telemetry notification config.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Customers$Telemetry$Notificationconfigs$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Customers$Telemetry$Notificationconfigs$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>;
        create(params: Params$Resource$Customers$Telemetry$Notificationconfigs$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Customers$Telemetry$Notificationconfigs$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>): void;
        create(params: Params$Resource$Customers$Telemetry$Notificationconfigs$Create, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>): void;
        create(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryNotificationConfig>): void;
        /**
         * Delete a telemetry notification config.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Customers$Telemetry$Notificationconfigs$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * List all telemetry notification configs.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Customers$Telemetry$Notificationconfigs$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Customers$Telemetry$Notificationconfigs$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>;
        list(params: Params$Resource$Customers$Telemetry$Notificationconfigs$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Customers$Telemetry$Notificationconfigs$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>): void;
        list(params: Params$Resource$Customers$Telemetry$Notificationconfigs$List, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse>): void;
    }
    export interface Params$Resource$Customers$Telemetry$Notificationconfigs$Create extends StandardParameters {
        /**
         * Required. The parent resource where this notification config will be created. Format: `customers/{customer\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleChromeManagementV1TelemetryNotificationConfig;
    }
    export interface Params$Resource$Customers$Telemetry$Notificationconfigs$Delete extends StandardParameters {
        /**
         * Required. The name of the notification config to delete. Format: `customers/{customer\}/telemetry/notificationConfigs/{notification_config\}`
         */
        name?: string;
    }
    export interface Params$Resource$Customers$Telemetry$Notificationconfigs$List extends StandardParameters {
        /**
         * The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListTelemetryNotificationConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTelemetryNotificationConfigs` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent which owns the notification configs.
         */
        parent?: string;
    }
    export class Resource$Customers$Telemetry$Users {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Get telemetry user.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Customers$Telemetry$Users$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Customers$Telemetry$Users$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1TelemetryUser>;
        get(params: Params$Resource$Customers$Telemetry$Users$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Customers$Telemetry$Users$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>): void;
        get(params: Params$Resource$Customers$Telemetry$Users$Get, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>): void;
        get(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1TelemetryUser>): void;
        /**
         * List all telemetry users.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Customers$Telemetry$Users$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Customers$Telemetry$Users$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>;
        list(params: Params$Resource$Customers$Telemetry$Users$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Customers$Telemetry$Users$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>): void;
        list(params: Params$Resource$Customers$Telemetry$Users$List, callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleChromeManagementV1ListTelemetryUsersResponse>): void;
    }
    export interface Params$Resource$Customers$Telemetry$Users$Get extends StandardParameters {
        /**
         * Required. Name of the `TelemetryUser` to return.
         */
        name?: string;
        /**
         * Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report
         */
        readMask?: string;
    }
    export interface Params$Resource$Customers$Telemetry$Users$List extends StandardParameters {
        /**
         * Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id
         */
        filter?: string;
        /**
         * Maximum number of results to return. Default value is 100. Maximum value is 1000.
         */
        pageSize?: number;
        /**
         * Token to specify next page in the list.
         */
        pageToken?: string;
        /**
         * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
         */
        parent?: string;
        /**
         * Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report
         */
        readMask?: string;
    }
    export {};
}
