/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace workloadmanager_v1 {
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
     * Workload Manager API
     *
     * Workload Manager is a service that provides tooling for enterprise workloads to automate the deployment and validation of your workloads against best practices and recommendations.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const workloadmanager = google.workloadmanager('v1');
     * ```
     */
    export class Workloadmanager {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Provides the mapping of a cloud asset to a direct physical location or to a proxy that defines the location on its behalf.
     */
    export interface Schema$AssetLocation {
        /**
         * Defines the customer expectation around ZI/ZS for this asset and ZI/ZS state of the region at the time of asset creation.
         */
        expected?: Schema$IsolationExpectations;
        /**
         * Defines extra parameters required for specific asset types.
         */
        extraParameters?: Schema$ExtraParameter[];
        /**
         * Contains all kinds of physical location definitions for this asset.
         */
        locationData?: Schema$LocationData[];
        /**
         * Defines parents assets if any in order to allow later generation of child_asset_location data via child assets.
         */
        parentAsset?: Schema$CloudAsset[];
    }
    /**
     * Message describing big query destination
     */
    export interface Schema$BigQueryDestination {
        /**
         * Optional. determine if results will be saved in a new table
         */
        createNewResultsTable?: boolean | null;
        /**
         * Optional. destination dataset to save evaluation results
         */
        destinationDataset?: string | null;
    }
    /**
     * Policy ID that identified data placement in Blobstore as per go/blobstore-user-guide#data-metadata-placement-and-failure-domains
     */
    export interface Schema$BlobstoreLocation {
        policyId?: string[] | null;
    }
    /**
     * The request message for Operations.CancelOperation.
     */
    export interface Schema$CancelOperationRequest {
    }
    export interface Schema$CloudAsset {
        assetName?: string | null;
        assetType?: string | null;
    }
    export interface Schema$CloudAssetComposition {
        childAsset?: Schema$CloudAsset[];
    }
    export interface Schema$DirectLocationAssignment {
        location?: Schema$LocationAssignment[];
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * LINT.IfChange Message describing Evaluation object
     */
    export interface Schema$Evaluation {
        /**
         * Optional. BigQuery destination
         */
        bigQueryDestination?: Schema$BigQueryDestination;
        /**
         * Output only. [Output only] Create time stamp
         */
        createTime?: string | null;
        /**
         * The Cloud Storage bucket name for custom rules.
         */
        customRulesBucket?: string | null;
        /**
         * Description of the Evaluation
         */
        description?: string | null;
        /**
         * Labels as key value pairs
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * name of resource names have the form 'projects/{project_id\}/locations/{location_id\}/evaluations/{evaluation_id\}'
         */
        name?: string | null;
        /**
         * annotations as key value pairs
         */
        resourceFilter?: Schema$ResourceFilter;
        /**
         * Output only. [Output only] The updated rule ids if exist.
         */
        resourceStatus?: Schema$ResourceStatus;
        /**
         * the name of the rule
         */
        ruleNames?: string[] | null;
        /**
         * Output only. [Output only] The updated rule ids if exist.
         */
        ruleVersions?: string[] | null;
        /**
         * crontab format schedule for scheduled evaluation, currently only support the following schedule: "0 x/1 * * *", "0 x/6 * * *", "0 x/12 * * *", "0 0 x/1 * *", "0 0 x/7 * *",
         */
        schedule?: string | null;
        /**
         * Output only. [Output only] Update time stamp
         */
        updateTime?: string | null;
    }
    /**
     * Message describing Execution object
     */
    export interface Schema$Execution {
        /**
         * Output only. [Output only] End time stamp
         */
        endTime?: string | null;
        /**
         * Output only. [Output only] Evaluation ID
         */
        evaluationId?: string | null;
        /**
         * Optional. External data sources
         */
        externalDataSources?: Schema$ExternalDataSources[];
        /**
         * Output only. [Output only] Inventory time stamp
         */
        inventoryTime?: string | null;
        /**
         * Labels as key value pairs
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The name of execution resource. The format is projects/{project\}/locations/{location\}/evaluations/{evaluation\}/executions/{execution\}
         */
        name?: string | null;
        /**
         * type represent whether the execution executed directly by user or scheduled according evaluation.schedule field.
         */
        runType?: string | null;
        /**
         * Output only. [Output only] Start time stamp
         */
        startTime?: string | null;
        /**
         * Output only. [Output only] State
         */
        state?: string | null;
    }
    /**
     * Message describing the result of an execution
     */
    export interface Schema$ExecutionResult {
        /**
         * the document url of the rule
         */
        documentationUrl?: string | null;
        /**
         * the violate resource
         */
        resource?: Schema$Resource;
        /**
         * the rule which violate in execution
         */
        rule?: string | null;
        /**
         * severity of violation
         */
        severity?: string | null;
        /**
         * the details of violation in result
         */
        violationDetails?: Schema$ViolationDetails;
        /**
         * the violation message of an execution
         */
        violationMessage?: string | null;
    }
    /**
     * Message for external data sources
     */
    export interface Schema$ExternalDataSources {
        /**
         * Required. Name of external data source. The name will be used inside the rego/sql to refer the external data
         */
        name?: string | null;
        /**
         * Required. Type of external data source
         */
        type?: string | null;
        /**
         * Required. URI of external data source. example of bq table {project_ID\}.{dataset_ID\}.{table_ID\}
         */
        uri?: string | null;
    }
    /**
     * Defines parameters that should only be used for specific asset types.
     */
    export interface Schema$ExtraParameter {
        /**
         * Details about zones used by regional compute.googleapis.com/InstanceGroupManager to create instances.
         */
        regionalMigDistributionPolicy?: Schema$RegionalMigDistributionPolicy;
    }
    /**
     * Message describing compute engine instance filter
     */
    export interface Schema$GceInstanceFilter {
        /**
         * Service account of compute engine
         */
        serviceAccounts?: string[] | null;
    }
    /**
     * A presentation of host resource usage where the workload runs.
     */
    export interface Schema$Insight {
        /**
         * Required. The instance id where the insight is generated from
         */
        instanceId?: string | null;
        /**
         * The insights data for SAP system discovery. This is a copy of SAP System proto and should get updated whenever that one changes.
         */
        sapDiscovery?: Schema$SapDiscovery;
        /**
         * The insights data for the SAP workload validation.
         */
        sapValidation?: Schema$SapValidation;
        /**
         * Output only. [Output only] Create time stamp
         */
        sentTime?: string | null;
        /**
         * The insights data for the sqlserver workload validation.
         */
        sqlserverValidation?: Schema$SqlserverValidation;
    }
    export interface Schema$IsolationExpectations {
        ziOrgPolicy?: string | null;
        ziRegionPolicy?: string | null;
        ziRegionState?: string | null;
        /**
         * Deprecated: use zi_org_policy, zi_region_policy and zi_region_state instead for setting ZI expectations as per go/zicy-publish-physical-location.
         */
        zoneIsolation?: string | null;
        /**
         * Deprecated: use zs_org_policy, and zs_region_stateinstead for setting Zs expectations as per go/zicy-publish-physical-location.
         */
        zoneSeparation?: string | null;
        zsOrgPolicy?: string | null;
        zsRegionState?: string | null;
    }
    /**
     * Message for response to listing Evaluations
     */
    export interface Schema$ListEvaluationsResponse {
        /**
         * The list of Evaluation
         */
        evaluations?: Schema$Evaluation[];
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * Message for response of list execution results
     */
    export interface Schema$ListExecutionResultsResponse {
        /**
         * The versions from the specified publisher.
         */
        executionResults?: Schema$ExecutionResult[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Message for response to listing Executions
     */
    export interface Schema$ListExecutionsResponse {
        /**
         * The list of Execution
         */
        executions?: Schema$Execution[];
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * The response message for Locations.ListLocations.
     */
    export interface Schema$ListLocationsResponse {
        /**
         * A list of locations that matches the specified filter in the request.
         */
        locations?: Schema$Location[];
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Operations.ListOperations.
     */
    export interface Schema$ListOperationsResponse {
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
        /**
         * A list of operations that matches the specified filter in the request.
         */
        operations?: Schema$Operation[];
    }
    /**
     * Mesesage of response of list rules
     */
    export interface Schema$ListRulesResponse {
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * all rules in response
         */
        rules?: Schema$Rule[];
    }
    /**
     * Message for response to list scanned resources
     */
    export interface Schema$ListScannedResourcesResponse {
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * All scanned resources in response
         */
        scannedResources?: Schema$ScannedResource[];
    }
    /**
     * A resource that represents a Google Cloud location.
     */
    export interface Schema$Location {
        /**
         * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
         */
        displayName?: string | null;
        /**
         * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The canonical id for this location. For example: `"us-east1"`.
         */
        locationId?: string | null;
        /**
         * Service-specific metadata. For example the available capacity at the given location.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
         */
        name?: string | null;
    }
    export interface Schema$LocationAssignment {
        location?: string | null;
        locationType?: string | null;
    }
    export interface Schema$LocationData {
        blobstoreLocation?: Schema$BlobstoreLocation;
        childAssetLocation?: Schema$CloudAssetComposition;
        directLocation?: Schema$DirectLocationAssignment;
        gcpProjectProxy?: Schema$TenantProjectProxy;
        spannerLocation?: Schema$SpannerLocation;
    }
    /**
     * This resource represents a long-running operation that is the result of a network API call.
     */
    export interface Schema$Operation {
        /**
         * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
         */
        done?: boolean | null;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$Status;
        /**
         * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
         */
        name?: string | null;
        /**
         * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
         */
        response?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Represents the metadata of the long-running operation.
     */
    export interface Schema$OperationMetadata {
        /**
         * Output only. API version used to start the operation.
         */
        apiVersion?: string | null;
        /**
         * Output only. The time the operation was created.
         */
        createTime?: string | null;
        /**
         * Output only. The time the operation finished running.
         */
        endTime?: string | null;
        /**
         * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         */
        requestedCancellation?: boolean | null;
        /**
         * Output only. Human-readable status of the operation, if any.
         */
        statusMessage?: string | null;
        /**
         * Output only. Server-defined resource path for the target of the operation.
         */
        target?: string | null;
        /**
         * Output only. Name of the verb executed by the operation.
         */
        verb?: string | null;
    }
    /**
     * To be used for specifying the intended distribution of regional compute.googleapis.com/InstanceGroupManager instances
     */
    export interface Schema$RegionalMigDistributionPolicy {
        /**
         * The shape in which the group converges around distribution of resources. Instance of proto2 enum
         */
        targetShape?: number | null;
        /**
         * Cloud zones used by regional MIG to create instances.
         */
        zones?: Schema$ZoneConfiguration[];
    }
    /**
     * Message represent resource in execution result
     */
    export interface Schema$Resource {
        /**
         * the name of the resource
         */
        name?: string | null;
        /**
         * the service account accosiate with resource
         */
        serviceAccount?: string | null;
        /**
         * the type of reresource
         */
        type?: string | null;
    }
    /**
     * Message describing resource filters
     */
    export interface Schema$ResourceFilter {
        /**
         * Filter compute engine resource
         */
        gceInstanceFilter?: Schema$GceInstanceFilter;
        /**
         * The label used for filter resource
         */
        inclusionLabels?: {
            [key: string]: string;
        } | null;
        /**
         * The id pattern for filter resource
         */
        resourceIdPatterns?: string[] | null;
        /**
         * The scopes of evaluation resource
         */
        scopes?: string[] | null;
    }
    /**
     * Message describing resource status
     */
    export interface Schema$ResourceStatus {
        /**
         * Historical: Used before 2023-05-22 the new version of rule id if exists
         */
        rulesNewerVersions?: string[] | null;
        /**
         * State of the resource
         */
        state?: string | null;
    }
    /**
     * Message represent a rule
     */
    export interface Schema$Rule {
        /**
         * descrite rule in plain language
         */
        description?: string | null;
        /**
         * the name display in UI
         */
        displayName?: string | null;
        /**
         * the message template for rule
         */
        errorMessage?: string | null;
        /**
         * rule name
         */
        name?: string | null;
        /**
         * the primary category
         */
        primaryCategory?: string | null;
        /**
         * the remediation for the rule
         */
        remediation?: string | null;
        /**
         * Output only. the version of the rule
         */
        revisionId?: string | null;
        /**
         * the secondary category
         */
        secondaryCategory?: string | null;
        /**
         * the severity of the rule
         */
        severity?: string | null;
        /**
         * List of user-defined tags
         */
        tags?: string[] | null;
        /**
         * the docuement url for the rule
         */
        uri?: string | null;
    }
    /**
     * Message for creating a Execution
     */
    export interface Schema$RunEvaluationRequest {
        /**
         * Required. The resource being created
         */
        execution?: Schema$Execution;
        /**
         * Required. Id of the requesting object If auto-generating Id server-side, remove this field and execution_id from the method_signature of Create RPC
         */
        executionId?: string | null;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string | null;
    }
    /**
     * The schema of SAP system discovery data.
     */
    export interface Schema$SapDiscovery {
        /**
         * Optional. An SAP system may run without an application layer.
         */
        applicationLayer?: Schema$SapDiscoveryComponent;
        /**
         * Required. An SAP System must have a database.
         */
        databaseLayer?: Schema$SapDiscoveryComponent;
        /**
         * Optional. The metadata for SAP system discovery data.
         */
        metadata?: Schema$SapDiscoveryMetadata;
        /**
         * Optional. The GCP project number that this SapSystem belongs to.
         */
        projectNumber?: string | null;
        /**
         * Output only. A combination of database SID, database instance URI and tenant DB name to make a unique identifier per-system.
         */
        systemId?: string | null;
        /**
         * Required. Unix timestamp this system has been updated last.
         */
        updateTime?: string | null;
        /**
         * Optional. The properties of the workload.
         */
        workloadProperties?: Schema$SapDiscoveryWorkloadProperties;
    }
    /**
     * Message describing the system component.
     */
    export interface Schema$SapDiscoveryComponent {
        /**
         * Optional. The component is a SAP application.
         */
        applicationProperties?: Schema$SapDiscoveryComponentApplicationProperties;
        /**
         * Optional. The component is a SAP database.
         */
        databaseProperties?: Schema$SapDiscoveryComponentDatabaseProperties;
        /**
         * Optional. A list of host URIs that are part of the HA configuration if present. An empty list indicates the component is not configured for HA.
         */
        haHosts?: string[] | null;
        /**
         * Required. Pantheon Project in which the resources reside.
         */
        hostProject?: string | null;
        /**
         * Optional. The resources in a component.
         */
        resources?: Schema$SapDiscoveryResource[];
        /**
         * Optional. The SAP identifier, used by the SAP software and helps differentiate systems for customers.
         */
        sid?: string | null;
        /**
         * Optional. The detected topology of the component.
         */
        topologyType?: string | null;
    }
    /**
     * A set of properties describing an SAP Application layer.
     */
    export interface Schema$SapDiscoveryComponentApplicationProperties {
        /**
         * Optional. Indicates whether this is a Java or ABAP Netweaver instance. true means it is ABAP, false means it is Java.
         */
        abap?: boolean | null;
        /**
         * Optional. Instance number of the SAP application instance.
         */
        appInstanceNumber?: string | null;
        /**
         * Required. Type of the application. Netweaver, etc.
         */
        applicationType?: string | null;
        /**
         * Optional. Instance number of the ASCS instance.
         */
        ascsInstanceNumber?: string | null;
        /**
         * Optional. Resource URI of the recognized ASCS host of the application.
         */
        ascsUri?: string | null;
        /**
         * Optional. Instance number of the ERS instance.
         */
        ersInstanceNumber?: string | null;
        /**
         * Optional. Kernel version for Netweaver running in the system.
         */
        kernelVersion?: string | null;
        /**
         * Optional. Resource URI of the recognized shared NFS of the application. May be empty if the application server has only a single node.
         */
        nfsUri?: string | null;
    }
    /**
     * A set of properties describing an SAP Database layer.
     */
    export interface Schema$SapDiscoveryComponentDatabaseProperties {
        /**
         * Optional. SID of the system database.
         */
        databaseSid?: string | null;
        /**
         * Required. Type of the database. HANA, DB2, etc.
         */
        databaseType?: string | null;
        /**
         * Optional. The version of the database software running in the system.
         */
        databaseVersion?: string | null;
        /**
         * Optional. Instance number of the SAP instance.
         */
        instanceNumber?: string | null;
        /**
         * Required. URI of the recognized primary instance of the database.
         */
        primaryInstanceUri?: string | null;
        /**
         * Optional. URI of the recognized shared NFS of the database. May be empty if the database has only a single node.
         */
        sharedNfsUri?: string | null;
    }
    /**
     * Message describing SAP discovery system metadata
     */
    export interface Schema$SapDiscoveryMetadata {
        /**
         * Optional. Customer region string for customer's use. Does not represent GCP region.
         */
        customerRegion?: string | null;
        /**
         * Optional. Customer defined, something like "E-commerce pre prod"
         */
        definedSystem?: string | null;
        /**
         * Optional. Should be "prod", "QA", "dev", "staging", etc.
         */
        environmentType?: string | null;
        /**
         * Optional. This SAP product name
         */
        sapProduct?: string | null;
    }
    /**
     * Message describing a resource.
     */
    export interface Schema$SapDiscoveryResource {
        /**
         * Optional. A set of properties only applying to instance type resources.
         */
        instanceProperties?: Schema$SapDiscoveryResourceInstanceProperties;
        /**
         * Optional. A list of resource URIs related to this resource.
         */
        relatedResources?: string[] | null;
        /**
         * Required. ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc.
         */
        resourceKind?: string | null;
        /**
         * Required. The type of this resource.
         */
        resourceType?: string | null;
        /**
         * Required. URI of the resource, includes project, location, and name.
         */
        resourceUri?: string | null;
        /**
         * Required. Unix timestamp of when this resource last had its discovery data updated.
         */
        updateTime?: string | null;
    }
    /**
     * A set of properties only present for an instance type resource
     */
    export interface Schema$SapDiscoveryResourceInstanceProperties {
        /**
         * Optional. App server instances on the host
         */
        appInstances?: Schema$SapDiscoveryResourceInstancePropertiesAppInstance[];
        /**
         * Optional. A list of instance URIs that are part of a cluster with this one.
         */
        clusterInstances?: string[] | null;
        /**
         * Optional. The VM's instance number.
         */
        instanceNumber?: string | null;
        /**
         * Optional. Bitmask of instance role, a resource may have multiple roles at once.
         */
        instanceRole?: string | null;
        /**
         * Optional. A virtual hostname of the instance if it has one.
         */
        virtualHostname?: string | null;
    }
    /**
     * Fields to describe an SAP application server instance.
     */
    export interface Schema$SapDiscoveryResourceInstancePropertiesAppInstance {
        /**
         * Optional. Instance name of the SAP application instance.
         */
        name?: string | null;
        /**
         * Optional. Instance number of the SAP application instance.
         */
        number?: string | null;
    }
    /**
     * A set of properties describing an SAP workload.
     */
    export interface Schema$SapDiscoveryWorkloadProperties {
        /**
         * Optional. List of SAP Products and their versions running on the system.
         */
        productVersions?: Schema$SapDiscoveryWorkloadPropertiesProductVersion[];
        /**
         * Optional. A list of SAP software components and their versions running on the system.
         */
        softwareComponentVersions?: Schema$SapDiscoveryWorkloadPropertiesSoftwareComponentProperties[];
    }
    /**
     * A product name and version.
     */
    export interface Schema$SapDiscoveryWorkloadPropertiesProductVersion {
        /**
         * Optional. Name of the product.
         */
        name?: string | null;
        /**
         * Optional. Version of the product.
         */
        version?: string | null;
    }
    /**
     * A SAP software component name, version, and type.
     */
    export interface Schema$SapDiscoveryWorkloadPropertiesSoftwareComponentProperties {
        /**
         * Optional. The component's minor version.
         */
        extVersion?: string | null;
        /**
         * Optional. Name of the component.
         */
        name?: string | null;
        /**
         * Optional. The component's type.
         */
        type?: string | null;
        /**
         * Optional. The component's major version.
         */
        version?: string | null;
    }
    /**
     * A presentation of SAP workload insight. The schema of SAP workloads validation related data.
     */
    export interface Schema$SapValidation {
        /**
         * Required. The project_id of the cloud project that the Insight data comes from.
         */
        projectId?: string | null;
        /**
         * Optional. A list of SAP validation metrics data.
         */
        validationDetails?: Schema$SapValidationValidationDetail[];
        /**
         * Optional. The zone of the instance that the Insight data comes from.
         */
        zone?: string | null;
    }
    /**
     * Message describing the SAP validation metrics.
     */
    export interface Schema$SapValidationValidationDetail {
        /**
         * Optional. The pairs of metrics data: field name & field value.
         */
        details?: {
            [key: string]: string;
        } | null;
        /**
         * Optional. Was there a SAP system detected for this validation type.
         */
        isPresent?: boolean | null;
        /**
         * Optional. The SAP system that the validation data is from.
         */
        sapValidationType?: string | null;
    }
    /**
     * Message of scanned resource
     */
    export interface Schema$ScannedResource {
        /**
         * resource name
         */
        resource?: string | null;
        /**
         * resource type
         */
        type?: string | null;
    }
    export interface Schema$SpannerLocation {
        dbName?: string[] | null;
    }
    /**
     * A presentation of SQLServer workload insight. The schema of SqlServer workloads validation related data.
     */
    export interface Schema$SqlserverValidation {
        /**
         * Optional. The agent version collected this data point
         */
        agentVersion?: string | null;
        /**
         * Required. The instance_name of the instance that the Insight data comes from. According to https://linter.aip.dev/122/name-suffix: field names should not use the _name suffix unless the field would be ambiguous without it.
         */
        instance?: string | null;
        /**
         * Required. The project_id of the cloud project that the Insight data comes from.
         */
        projectId?: string | null;
        /**
         * Optional. A list of SqlServer validation metrics data.
         */
        validationDetails?: Schema$SqlserverValidationValidationDetail[];
    }
    /**
     * Message containing collected data names and values.
     */
    export interface Schema$SqlserverValidationDetails {
        /**
         * Required. Collected data is in format.
         */
        fields?: {
            [key: string]: string;
        } | null;
    }
    /**
     * Message describing the Sqlserver validation metrics.
     */
    export interface Schema$SqlserverValidationValidationDetail {
        /**
         * Required. Details wraps map that represents collected data names and values.
         */
        details?: Schema$SqlserverValidationDetails[];
        /**
         * Optional. The Sqlserver system that the validation data is from.
         */
        type?: string | null;
    }
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    export interface Schema$Status {
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
    export interface Schema$TenantProjectProxy {
        projectNumbers?: string[] | null;
    }
    /**
     * Message describing the violdation in execution result
     */
    export interface Schema$ViolationDetails {
        /**
         * the name of asset
         */
        asset?: string | null;
        /**
         * observed
         */
        observed?: {
            [key: string]: string;
        } | null;
        /**
         * the service account associate with resource
         */
        serviceAccount?: string | null;
    }
    /**
     * Request for sending the data insights.
     */
    export interface Schema$WriteInsightRequest {
        /**
         * Optional. The agent version collected this data point.
         */
        agentVersion?: string | null;
        /**
         * Required. The metrics data details.
         */
        insight?: Schema$Insight;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string | null;
    }
    /**
     * The response for write insights request.
     */
    export interface Schema$WriteInsightResponse {
    }
    export interface Schema$ZoneConfiguration {
        zone?: string | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations {
        context: APIRequestContext;
        evaluations: Resource$Projects$Locations$Evaluations;
        insights: Resource$Projects$Locations$Insights;
        operations: Resource$Projects$Locations$Operations;
        rules: Resource$Projects$Locations$Rules;
        constructor(context: APIRequestContext);
        /**
         * Gets information about a location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Get, options?: MethodOptions): GaxiosPromise<Schema$Location>;
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Get, options: MethodOptions | BodyResponseCallback<Schema$Location>, callback: BodyResponseCallback<Schema$Location>): void;
        get(params: Params$Resource$Projects$Locations$Get, callback: BodyResponseCallback<Schema$Location>): void;
        get(callback: BodyResponseCallback<Schema$Location>): void;
        /**
         * Lists information about the supported locations for this service.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$List, options?: MethodOptions): GaxiosPromise<Schema$ListLocationsResponse>;
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$List, options: MethodOptions | BodyResponseCallback<Schema$ListLocationsResponse>, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$List, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
        /**
         * Resource name for the location.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$List extends StandardParameters {
        /**
         * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
         */
        filter?: string;
        /**
         * The resource that owns the locations collection, if applicable.
         */
        name?: string;
        /**
         * The maximum number of results to return. If not set, the service selects a default.
         */
        pageSize?: number;
        /**
         * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
         */
        pageToken?: string;
    }
    export class Resource$Projects$Locations$Evaluations {
        context: APIRequestContext;
        executions: Resource$Projects$Locations$Evaluations$Executions;
        constructor(context: APIRequestContext);
        /**
         * Creates a new Evaluation in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Evaluations$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Evaluations$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Evaluations$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Evaluations$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Evaluations$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes a single Evaluation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Evaluations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Evaluations$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Evaluations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Evaluations$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Evaluations$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets details of a single Evaluation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Evaluations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Evaluations$Get, options?: MethodOptions): GaxiosPromise<Schema$Evaluation>;
        get(params: Params$Resource$Projects$Locations$Evaluations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Evaluations$Get, options: MethodOptions | BodyResponseCallback<Schema$Evaluation>, callback: BodyResponseCallback<Schema$Evaluation>): void;
        get(params: Params$Resource$Projects$Locations$Evaluations$Get, callback: BodyResponseCallback<Schema$Evaluation>): void;
        get(callback: BodyResponseCallback<Schema$Evaluation>): void;
        /**
         * Lists Evaluations in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Evaluations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Evaluations$List, options?: MethodOptions): GaxiosPromise<Schema$ListEvaluationsResponse>;
        list(params: Params$Resource$Projects$Locations$Evaluations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Evaluations$List, options: MethodOptions | BodyResponseCallback<Schema$ListEvaluationsResponse>, callback: BodyResponseCallback<Schema$ListEvaluationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Evaluations$List, callback: BodyResponseCallback<Schema$ListEvaluationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListEvaluationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$Create extends StandardParameters {
        /**
         * Required. Id of the requesting object
         */
        evaluationId?: string;
        /**
         * Required. The resource prefix of the evaluation location using the form: `projects/{project_id\}/locations/{location_id\}`
         */
        parent?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Evaluation;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$Delete extends StandardParameters {
        /**
         * Optional. Followed the best practice from https://aip.dev/135#cascading-delete
         */
        force?: boolean;
        /**
         * Required. Name of the resource
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$Get extends StandardParameters {
        /**
         * Required. Name of the resource
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$List extends StandardParameters {
        /**
         * Filtering results
         */
        filter?: string;
        /**
         * Hint for how to order the results
         */
        orderBy?: string;
        /**
         * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. Parent value for ListEvaluationsRequest
         */
        parent?: string;
    }
    export class Resource$Projects$Locations$Evaluations$Executions {
        context: APIRequestContext;
        results: Resource$Projects$Locations$Evaluations$Executions$Results;
        scannedResources: Resource$Projects$Locations$Evaluations$Executions$Scannedresources;
        constructor(context: APIRequestContext);
        /**
         * Deletes a single Execution.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Evaluations$Executions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Evaluations$Executions$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Evaluations$Executions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Evaluations$Executions$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Evaluations$Executions$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets details of a single Execution.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Evaluations$Executions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Evaluations$Executions$Get, options?: MethodOptions): GaxiosPromise<Schema$Execution>;
        get(params: Params$Resource$Projects$Locations$Evaluations$Executions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Evaluations$Executions$Get, options: MethodOptions | BodyResponseCallback<Schema$Execution>, callback: BodyResponseCallback<Schema$Execution>): void;
        get(params: Params$Resource$Projects$Locations$Evaluations$Executions$Get, callback: BodyResponseCallback<Schema$Execution>): void;
        get(callback: BodyResponseCallback<Schema$Execution>): void;
        /**
         * Lists Executions in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Evaluations$Executions$List, options?: MethodOptions): GaxiosPromise<Schema$ListExecutionsResponse>;
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$List, options: MethodOptions | BodyResponseCallback<Schema$ListExecutionsResponse>, callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$List, callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
        /**
         * Creates a new Execution in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        run(params: Params$Resource$Projects$Locations$Evaluations$Executions$Run, options: StreamMethodOptions): GaxiosPromise<Readable>;
        run(params?: Params$Resource$Projects$Locations$Evaluations$Executions$Run, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        run(params: Params$Resource$Projects$Locations$Evaluations$Executions$Run, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        run(params: Params$Resource$Projects$Locations$Evaluations$Executions$Run, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        run(params: Params$Resource$Projects$Locations$Evaluations$Executions$Run, callback: BodyResponseCallback<Schema$Operation>): void;
        run(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$Executions$Delete extends StandardParameters {
        /**
         * Required. Name of the resource
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$Executions$Get extends StandardParameters {
        /**
         * Required. Name of the resource
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$Executions$List extends StandardParameters {
        /**
         * Filtering results
         */
        filter?: string;
        /**
         * Field to sort by. See https://google.aip.dev/132#ordering for more details.
         */
        orderBy?: string;
        /**
         * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. The resource prefix of the Execution using the form: 'projects/{project\}/locations/{location\}/evaluations/{evaluation\}'
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$Executions$Run extends StandardParameters {
        /**
         * Required. The resource name of the Execution using the form: 'projects/{project\}/locations/{location\}/evaluations/{evaluation\}/executions/{execution\}'
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RunEvaluationRequest;
    }
    export class Resource$Projects$Locations$Evaluations$Executions$Results {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * List the running result of a single Execution.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List, options?: MethodOptions): GaxiosPromise<Schema$ListExecutionResultsResponse>;
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List, options: MethodOptions | BodyResponseCallback<Schema$ListExecutionResultsResponse>, callback: BodyResponseCallback<Schema$ListExecutionResultsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List, callback: BodyResponseCallback<Schema$ListExecutionResultsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListExecutionResultsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$Executions$Results$List extends StandardParameters {
        /**
         * Filtering results
         */
        filter?: string;
        /**
         * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. The execution results. Format: {parent\}/evaluations/x/executions/x/results
         */
        parent?: string;
    }
    export class Resource$Projects$Locations$Evaluations$Executions$Scannedresources {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * List all scanned resources for a single Execution.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List, options?: MethodOptions): GaxiosPromise<Schema$ListScannedResourcesResponse>;
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List, options: MethodOptions | BodyResponseCallback<Schema$ListScannedResourcesResponse>, callback: BodyResponseCallback<Schema$ListScannedResourcesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List, callback: BodyResponseCallback<Schema$ListScannedResourcesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListScannedResourcesResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List extends StandardParameters {
        /**
         * Filtering results
         */
        filter?: string;
        /**
         * Field to sort by. See https://google.aip.dev/132#ordering for more details.
         */
        orderBy?: string;
        /**
         * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. parent for ListScannedResourcesRequest
         */
        parent?: string;
        /**
         * rule name
         */
        rule?: string;
    }
    export class Resource$Projects$Locations$Insights {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Write the data insights to workload manager data warehouse.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        writeInsight(params: Params$Resource$Projects$Locations$Insights$Writeinsight, options: StreamMethodOptions): GaxiosPromise<Readable>;
        writeInsight(params?: Params$Resource$Projects$Locations$Insights$Writeinsight, options?: MethodOptions): GaxiosPromise<Schema$WriteInsightResponse>;
        writeInsight(params: Params$Resource$Projects$Locations$Insights$Writeinsight, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        writeInsight(params: Params$Resource$Projects$Locations$Insights$Writeinsight, options: MethodOptions | BodyResponseCallback<Schema$WriteInsightResponse>, callback: BodyResponseCallback<Schema$WriteInsightResponse>): void;
        writeInsight(params: Params$Resource$Projects$Locations$Insights$Writeinsight, callback: BodyResponseCallback<Schema$WriteInsightResponse>): void;
        writeInsight(callback: BodyResponseCallback<Schema$WriteInsightResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Insights$Writeinsight extends StandardParameters {
        /**
         * Required. The GCP location. The format is: projects/{project\}/locations/{location\}.
         */
        location?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$WriteInsightRequest;
    }
    export class Resource$Projects$Locations$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Projects$Locations$Operations$Cancel, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Operations$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Operations$List, options?: MethodOptions): GaxiosPromise<Schema$ListOperationsResponse>;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CancelOperationRequest;
    }
    export interface Params$Resource$Projects$Locations$Operations$Delete extends StandardParameters {
        /**
         * The name of the operation resource to be deleted.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The name of the operation's parent resource.
         */
        name?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    export class Resource$Projects$Locations$Rules {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Lists rules in a given project.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Rules$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Rules$List, options?: MethodOptions): GaxiosPromise<Schema$ListRulesResponse>;
        list(params: Params$Resource$Projects$Locations$Rules$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Rules$List, options: MethodOptions | BodyResponseCallback<Schema$ListRulesResponse>, callback: BodyResponseCallback<Schema$ListRulesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Rules$List, callback: BodyResponseCallback<Schema$ListRulesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListRulesResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Rules$List extends StandardParameters {
        /**
         * The Cloud Storage bucket name for custom rules.
         */
        customRulesBucket?: string;
        /**
         * Filter based on primary_category, secondary_category
         */
        filter?: string;
        /**
         * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. The [project] on which to execute the request. The format is: projects/{project_id\}/locations/{location\} Currently, the pre-defined rules are global available to all projects and all regions
         */
        parent?: string;
    }
    export {};
}
