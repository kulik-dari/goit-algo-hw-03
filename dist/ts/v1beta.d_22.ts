/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace alloydb_v1beta {
    export interface Options extends GlobalOptions {
        version: 'v1beta';
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
     * AlloyDB API
     *
     * AlloyDB for PostgreSQL is an open source-compatible database service that provides a powerful option for migrating, modernizing, or building commercial-grade applications. It offers full compatibility with standard PostgreSQL, and is more than 4x faster for transactional workloads and up to 100x faster for analytical queries than standard PostgreSQL in our performance tests. AlloyDB for PostgreSQL offers a 99.99 percent availability SLA inclusive of maintenance. AlloyDB is optimized for the most demanding use cases, allowing you to build new applications that require high transaction throughput, large database sizes, or multiple read resources; scale existing PostgreSQL workloads with no application changes; and modernize legacy proprietary databases.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const alloydb = google.alloydb('v1beta');
     * ```
     */
    export class Alloydb {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * AuthorizedNetwork contains metadata for an authorized network.
     */
    export interface Schema$AuthorizedNetwork {
        /**
         * CIDR range for one authorzied network of the instance.
         */
        cidrRange?: string | null;
    }
    /**
     * Message describing the user-specified automated backup policy. All fields in the automated backup policy are optional. Defaults for each field are provided if they are not set.
     */
    export interface Schema$AutomatedBackupPolicy {
        /**
         * The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed. The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it defaults to 1 hour.
         */
        backupWindow?: string | null;
        /**
         * Whether automated automated backups are enabled. If not set, defaults to true.
         */
        enabled?: boolean | null;
        /**
         * Optional. The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK). When this field is not specified, the backup will then use default encryption scheme to protect the user data.
         */
        encryptionConfig?: Schema$EncryptionConfig;
        /**
         * Labels to apply to backups created using this configuration.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster. If empty, defaults to the region of the cluster.
         */
        location?: string | null;
        /**
         * Quantity-based Backup retention policy to retain recent backups.
         */
        quantityBasedRetention?: Schema$QuantityBasedRetention;
        /**
         * Time-based Backup retention policy.
         */
        timeBasedRetention?: Schema$TimeBasedRetention;
        /**
         * Weekly schedule for the Backup.
         */
        weeklySchedule?: Schema$WeeklySchedule;
    }
    /**
     * Message describing Backup object
     */
    export interface Schema$Backup {
        /**
         * Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
         */
        annotations?: {
            [key: string]: string;
        } | null;
        /**
         * Required. The full resource name of the backup source cluster (e.g., projects/{project\}/locations/{region\}/clusters/{cluster_id\}).
         */
        clusterName?: string | null;
        /**
         * Output only. The system-generated UID of the cluster which was used to create this resource.
         */
        clusterUid?: string | null;
        /**
         * Output only. Create time stamp
         */
        createTime?: string | null;
        /**
         * Output only. The database engine major version of the cluster this backup was created from. Any restored cluster created from this backup will have the same database version.
         */
        databaseVersion?: string | null;
        /**
         * Output only. Delete time stamp
         */
        deleteTime?: string | null;
        /**
         * User-provided description of the backup.
         */
        description?: string | null;
        /**
         * User-settable and human-readable display name for the Backup.
         */
        displayName?: string | null;
        /**
         * Optional. The encryption config can be specified to encrypt the backup with a customer-managed encryption key (CMEK). When this field is not specified, the backup will then use default encryption scheme to protect the user data.
         */
        encryptionConfig?: Schema$EncryptionConfig;
        /**
         * Output only. The encryption information for the backup.
         */
        encryptionInfo?: Schema$EncryptionInfo;
        /**
         * For Resource freshness validation (https://google.aip.dev/154)
         */
        etag?: string | null;
        /**
         * Output only. The QuantityBasedExpiry of the backup, specified by the backup's retention policy. Once the expiry quantity is over retention, the backup is eligible to be garbage collected.
         */
        expiryQuantity?: Schema$QuantityBasedExpiry;
        /**
         * Output only. The time at which after the backup is eligible to be garbage collected. It is the duration specified by the backup's retention policy, added to the backup's create_time.
         */
        expiryTime?: string | null;
        /**
         * Labels as key value pairs
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Output only. The name of the backup resource with the format: * projects/{project\}/locations/{region\}/backups/{backup_id\} where the cluster and backup ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the backup resource name is the name of the parent resource: * projects/{project\}/locations/{region\}
         */
        name?: string | null;
        /**
         * Output only. Reconciling (https://google.aip.dev/128#reconciliation), if true, indicates that the service is actively updating the resource. This can happen due to user-triggered updates or system actions like failover or maintenance.
         */
        reconciling?: boolean | null;
        /**
         * Output only. Reserved for future use.
         */
        satisfiesPzs?: boolean | null;
        /**
         * Output only. The size of the backup in bytes.
         */
        sizeBytes?: string | null;
        /**
         * Output only. The current state of the backup.
         */
        state?: string | null;
        /**
         * The backup type, which suggests the trigger for the backup.
         */
        type?: string | null;
        /**
         * Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
         */
        uid?: string | null;
        /**
         * Output only. Update time stamp
         */
        updateTime?: string | null;
    }
    /**
     * Message describing a BackupSource.
     */
    export interface Schema$BackupSource {
        /**
         * Required. The name of the backup resource with the format: * projects/{project\}/locations/{region\}/backups/{backup_id\}
         */
        backupName?: string | null;
        /**
         * Output only. The system-generated UID of the backup which was used to create this resource. The UID is generated when the backup is created, and it is retained until the backup is deleted.
         */
        backupUid?: string | null;
    }
    /**
     * Client connection configuration
     */
    export interface Schema$ClientConnectionConfig {
        /**
         * Optional. Configuration to enforce connectors only (ex: AuthProxy) connections to the database.
         */
        requireConnectors?: boolean | null;
        /**
         * Optional. SSL config option for this instance.
         */
        sslConfig?: Schema$SslConfig;
    }
    /**
     * Operation metadata returned by the CLH during resource state reconciliation.
     */
    export interface Schema$CloudControl2SharedOperationsReconciliationOperationMetadata {
        /**
         * DEPRECATED. Use exclusive_action instead.
         */
        deleteResource?: boolean | null;
        /**
         * Excluisive action returned by the CLH.
         */
        exclusiveAction?: string | null;
    }
    /**
     * A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
     */
    export interface Schema$Cluster {
        /**
         * Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
         */
        annotations?: {
            [key: string]: string;
        } | null;
        /**
         * The automated backup policy for this cluster. If no policy is provided then the default policy will be used. If backups are supported for the cluster, the default policy takes one backup a day, has a backup window of 1 hour, and retains backups for 14 days. For more information on the defaults, consult the documentation for the message type.
         */
        automatedBackupPolicy?: Schema$AutomatedBackupPolicy;
        /**
         * Output only. Cluster created from backup.
         */
        backupSource?: Schema$BackupSource;
        /**
         * Output only. The type of the cluster. This is an output-only field and it's populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. `CreateCluster` vs. `CreateSecondaryCluster`
         */
        clusterType?: string | null;
        /**
         * Optional. Continuous backup configuration for this cluster.
         */
        continuousBackupConfig?: Schema$ContinuousBackupConfig;
        /**
         * Output only. Continuous backup properties for this cluster.
         */
        continuousBackupInfo?: Schema$ContinuousBackupInfo;
        /**
         * Output only. Create time stamp
         */
        createTime?: string | null;
        /**
         * Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used.
         */
        databaseVersion?: string | null;
        /**
         * Output only. Delete time stamp
         */
        deleteTime?: string | null;
        /**
         * User-settable and human-readable display name for the Cluster.
         */
        displayName?: string | null;
        /**
         * Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data.
         */
        encryptionConfig?: Schema$EncryptionConfig;
        /**
         * Output only. The encryption information for the cluster.
         */
        encryptionInfo?: Schema$EncryptionInfo;
        /**
         * For Resource freshness validation (https://google.aip.dev/154)
         */
        etag?: string | null;
        /**
         * Optional. Configuration parameters related to the Gemini in Databases add-on.
         */
        geminiConfig?: Schema$GeminiClusterConfig;
        /**
         * Input only. Initial user to setup during cluster creation. Required. If used in `RestoreCluster` this is ignored.
         */
        initialUser?: Schema$UserPassword;
        /**
         * Labels as key value pairs
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Output only. The maintenance schedule for the cluster, generated for a specific rollout if a maintenance window is set.
         */
        maintenanceSchedule?: Schema$MaintenanceSchedule;
        /**
         * Optional. The maintenance update policy determines when to allow or deny updates.
         */
        maintenanceUpdatePolicy?: Schema$MaintenanceUpdatePolicy;
        /**
         * Output only. Cluster created via DMS migration.
         */
        migrationSource?: Schema$MigrationSource;
        /**
         * Output only. The name of the cluster resource with the format: * projects/{project\}/locations/{region\}/clusters/{cluster_id\} where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/{project\}/locations/{region\}
         */
        name?: string | null;
        /**
         * Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: `projects/{project\}/global/networks/{network_id\}`. This is required to create a cluster. Deprecated, use network_config.network instead.
         */
        network?: string | null;
        networkConfig?: Schema$NetworkConfig;
        /**
         * Output only. Cross Region replication config specific to PRIMARY cluster.
         */
        primaryConfig?: Schema$PrimaryConfig;
        /**
         * Optional. The configuration for Private Service Connect (PSC) for the cluster.
         */
        pscConfig?: Schema$PscConfig;
        /**
         * Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Cluster does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.
         */
        reconciling?: boolean | null;
        /**
         * Output only. Reserved for future use.
         */
        satisfiesPzs?: boolean | null;
        /**
         * Cross Region replication config specific to SECONDARY cluster.
         */
        secondaryConfig?: Schema$SecondaryConfig;
        /**
         * SSL configuration for this AlloyDB cluster.
         */
        sslConfig?: Schema$SslConfig;
        /**
         * Output only. The current serving state of the cluster.
         */
        state?: string | null;
        /**
         * Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
         */
        uid?: string | null;
        /**
         * Output only. Update time stamp
         */
        updateTime?: string | null;
    }
    /**
     * ConnectionInfo singleton resource. https://google.aip.dev/156
     */
    export interface Schema$ConnectionInfo {
        /**
         * Output only. The unique ID of the Instance.
         */
        instanceUid?: string | null;
        /**
         * Output only. The private network IP address for the Instance. This is the default IP for the instance and is always created (even if enable_public_ip is set). This is the connection endpoint for an end-user application.
         */
        ipAddress?: string | null;
        /**
         * The name of the ConnectionInfo singleton resource, e.g.: projects/{project\}/locations/{location\}/clusters/x/instances/x/connectionInfo This field currently has no semantic meaning.
         */
        name?: string | null;
        /**
         * Output only. The pem-encoded chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246.
         */
        pemCertificateChain?: string[] | null;
        /**
         * Output only. The DNS name to use with PSC for the Instance.
         */
        pscDnsName?: string | null;
        /**
         * Output only. The public IP addresses for the Instance. This is available ONLY when enable_public_ip is set. This is the connection endpoint for an end-user application.
         */
        publicIpAddress?: string | null;
    }
    /**
     * ContinuousBackupConfig describes the continuous backups recovery configurations of a cluster.
     */
    export interface Schema$ContinuousBackupConfig {
        /**
         * Whether ContinuousBackup is enabled.
         */
        enabled?: boolean | null;
        /**
         * The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK). When this field is not specified, the backup will then use default encryption scheme to protect the user data.
         */
        encryptionConfig?: Schema$EncryptionConfig;
        /**
         * The number of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window. If not set, defaults to 14 days.
         */
        recoveryWindowDays?: number | null;
    }
    /**
     * ContinuousBackupInfo describes the continuous backup properties of a cluster.
     */
    export interface Schema$ContinuousBackupInfo {
        /**
         * Output only. The earliest restorable time that can be restored to. Output only field.
         */
        earliestRestorableTime?: string | null;
        /**
         * Output only. When ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled.
         */
        enabledTime?: string | null;
        /**
         * Output only. The encryption information for the WALs and backups required for ContinuousBackup.
         */
        encryptionInfo?: Schema$EncryptionInfo;
        /**
         * Output only. Days of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request.
         */
        schedule?: string[] | null;
    }
    /**
     * Message describing a ContinuousBackupSource.
     */
    export interface Schema$ContinuousBackupSource {
        /**
         * Required. The source cluster from which to restore. This cluster must have continuous backup enabled for this operation to succeed. For the required format, see the comment on the Cluster.name field.
         */
        cluster?: string | null;
        /**
         * Required. The point in time to restore to.
         */
        pointInTime?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
     */
    export interface Schema$EncryptionConfig {
        /**
         * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]
         */
        kmsKeyName?: string | null;
    }
    /**
     * EncryptionInfo describes the encryption information of a cluster or a backup.
     */
    export interface Schema$EncryptionInfo {
        /**
         * Output only. Type of encryption.
         */
        encryptionType?: string | null;
        /**
         * Output only. Cloud KMS key versions that are being used to protect the database or the backup.
         */
        kmsKeyVersions?: string[] | null;
    }
    /**
     * Message for triggering failover on an Instance
     */
    export interface Schema$FailoverInstanceRequest {
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string | null;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the failover.
         */
        validateOnly?: boolean | null;
    }
    /**
     * Cluster level configuration parameters related to the Gemini in Databases add-on.
     */
    export interface Schema$GeminiClusterConfig {
        /**
         * Output only. Whether the Gemini in Databases add-on is enabled for the cluster. It will be true only if the add-on has been enabled for the billing account corresponding to the cluster. Its status is toggled from the Admin Control Center (ACC) and cannot be toggled using AlloyDB's APIs.
         */
        entitled?: boolean | null;
    }
    /**
     * Instance level configuration parameters related to the Gemini in Databases add-on.
     */
    export interface Schema$GeminiInstanceConfig {
        /**
         * Output only. Whether the Gemini in Databases add-on is enabled for the instance. It will be true only if the add-on has been enabled for the billing account corresponding to the instance. Its status is toggled from the Admin Control Center (ACC) and cannot be toggled using AlloyDB's APIs.
         */
        entitled?: boolean | null;
    }
    /**
     * The response message for Locations.ListLocations.
     */
    export interface Schema$GoogleCloudLocationListLocationsResponse {
        /**
         * A list of locations that matches the specified filter in the request.
         */
        locations?: Schema$GoogleCloudLocationLocation[];
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
    }
    /**
     * A resource that represents a Google Cloud location.
     */
    export interface Schema$GoogleCloudLocationLocation {
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
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    export interface Schema$GoogleTypeTimeOfDay {
        /**
         * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
         */
        hours?: number | null;
        /**
         * Minutes of hour of day. Must be from 0 to 59.
         */
        minutes?: number | null;
        /**
         * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
         */
        nanos?: number | null;
        /**
         * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
         */
        seconds?: number | null;
    }
    /**
     * Message for triggering fault injection on an instance
     */
    export interface Schema$InjectFaultRequest {
        /**
         * Required. The type of fault to be injected in an instance.
         */
        faultType?: string | null;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string | null;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the fault injection.
         */
        validateOnly?: boolean | null;
    }
    /**
     * An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.
     */
    export interface Schema$Instance {
        /**
         * Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
         */
        annotations?: {
            [key: string]: string;
        } | null;
        /**
         * Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones).
         */
        availabilityType?: string | null;
        /**
         * Optional. Client connection specific configurations
         */
        clientConnectionConfig?: Schema$ClientConnectionConfig;
        /**
         * Output only. Create time stamp
         */
        createTime?: string | null;
        /**
         * Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary. This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value.
         */
        databaseFlags?: {
            [key: string]: string;
        } | null;
        /**
         * Output only. Delete time stamp
         */
        deleteTime?: string | null;
        /**
         * User-settable and human-readable display name for the Instance.
         */
        displayName?: string | null;
        /**
         * For Resource freshness validation (https://google.aip.dev/154)
         */
        etag?: string | null;
        /**
         * The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
         */
        gceZone?: string | null;
        /**
         * Optional. Configuration parameters related to the Gemini in Databases add-on.
         */
        geminiConfig?: Schema$GeminiInstanceConfig;
        /**
         * Required. The type of the instance. Specified at creation time.
         */
        instanceType?: string | null;
        /**
         * Output only. The IP address for the Instance. This is the connection endpoint for an end-user application.
         */
        ipAddress?: string | null;
        /**
         * Labels as key value pairs
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Configurations for the machines that host the underlying database engine.
         */
        machineConfig?: Schema$MachineConfig;
        /**
         * Output only. The name of the instance resource with the format: * projects/{project\}/locations/{region\}/clusters/{cluster_id\}/instances/{instance_id\} where the cluster and instance ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/{project\}/locations/{region\}/clusters/{cluster_id\}
         */
        name?: string | null;
        /**
         * Optional. Instance level network configuration.
         */
        networkConfig?: Schema$InstanceNetworkConfig;
        /**
         * Output only. List of available read-only VMs in this instance, including the standby for a PRIMARY instance.
         */
        nodes?: Schema$Node[];
        /**
         * Configuration for observability.
         */
        observabilityConfig?: Schema$ObservabilityInstanceConfig;
        /**
         * Output only. All outbound public IP addresses configured for the instance.
         */
        outboundPublicIpAddresses?: string[] | null;
        /**
         * Optional. The configuration for Private Service Connect (PSC) for the instance.
         */
        pscInstanceConfig?: Schema$PscInstanceConfig;
        /**
         * Output only. The public IP addresses for the Instance. This is available ONLY when enable_public_ip is set. This is the connection endpoint for an end-user application.
         */
        publicIpAddress?: string | null;
        /**
         * Configuration for query insights.
         */
        queryInsightsConfig?: Schema$QueryInsightsInstanceConfig;
        /**
         * Read pool instance configuration. This is required if the value of instanceType is READ_POOL.
         */
        readPoolConfig?: Schema$ReadPoolConfig;
        /**
         * Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.
         */
        reconciling?: boolean | null;
        /**
         * Output only. Reserved for future use.
         */
        satisfiesPzs?: boolean | null;
        /**
         * Output only. The current serving state of the instance.
         */
        state?: string | null;
        /**
         * Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
         */
        uid?: string | null;
        /**
         * Update policy that will be applied during instance update. This field is not persisted when you update the instance. To use a non-default update policy, you must specify explicitly specify the value in each update request.
         */
        updatePolicy?: Schema$UpdatePolicy;
        /**
         * Output only. Update time stamp
         */
        updateTime?: string | null;
        /**
         * Output only. This is set for the read-write VM of the PRIMARY instance only.
         */
        writableNode?: Schema$Node;
    }
    /**
     * Metadata related to instance level network configuration.
     */
    export interface Schema$InstanceNetworkConfig {
        /**
         * Optional. A list of external network authorized to access this instance.
         */
        authorizedExternalNetworks?: Schema$AuthorizedNetwork[];
        /**
         * Optional. Enabling an outbound public IP address to support a database server sending requests out into the internet.
         */
        enableOutboundPublicIp?: boolean | null;
        /**
         * Optional. Enabling public ip for the instance.
         */
        enablePublicIp?: boolean | null;
    }
    /**
     * Restrictions on INTEGER type values.
     */
    export interface Schema$IntegerRestrictions {
        /**
         * The maximum value that can be specified, if applicable.
         */
        maxValue?: string | null;
        /**
         * The minimum value that can be specified, if applicable.
         */
        minValue?: string | null;
    }
    /**
     * Message for response to listing Backups
     */
    export interface Schema$ListBackupsResponse {
        /**
         * The list of Backup
         */
        backups?: Schema$Backup[];
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
     * Message for response to listing Clusters
     */
    export interface Schema$ListClustersResponse {
        /**
         * The list of Cluster
         */
        clusters?: Schema$Cluster[];
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
     * Message for response to listing Instances
     */
    export interface Schema$ListInstancesResponse {
        /**
         * The list of Instance
         */
        instances?: Schema$Instance[];
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
     * Message for response to listing SupportedDatabaseFlags.
     */
    export interface Schema$ListSupportedDatabaseFlagsResponse {
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * The list of SupportedDatabaseFlags.
         */
        supportedDatabaseFlags?: Schema$SupportedDatabaseFlag[];
    }
    /**
     * Message for response to listing Users
     */
    export interface Schema$ListUsersResponse {
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
        /**
         * The list of User
         */
        users?: Schema$User[];
    }
    /**
     * MachineConfig describes the configuration of a machine.
     */
    export interface Schema$MachineConfig {
        /**
         * The number of CPU's in the VM instance.
         */
        cpuCount?: number | null;
    }
    /**
     * MaintenanceSchedule stores the maintenance schedule generated from the MaintenanceUpdatePolicy, once a maintenance rollout is triggered, if MaintenanceWindow is set, and if there is no conflicting DenyPeriod. The schedule is cleared once the update takes place. This field cannot be manually changed; modify the MaintenanceUpdatePolicy instead.
     */
    export interface Schema$MaintenanceSchedule {
        /**
         * Output only. The scheduled start time for the maintenance.
         */
        startTime?: string | null;
    }
    /**
     * MaintenanceUpdatePolicy defines the policy for system updates.
     */
    export interface Schema$MaintenanceUpdatePolicy {
        /**
         * Preferred windows to perform maintenance. Currently limited to 1.
         */
        maintenanceWindows?: Schema$MaintenanceWindow[];
    }
    /**
     * MaintenanceWindow specifies a preferred day and time for maintenance.
     */
    export interface Schema$MaintenanceWindow {
        /**
         * Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc.
         */
        day?: string | null;
        /**
         * Preferred time to start the maintenance operation on the specified day. Maintenance will start within 1 hour of this time.
         */
        startTime?: Schema$GoogleTypeTimeOfDay;
    }
    /**
     * Subset of the source instance configuration that is available when reading the cluster resource.
     */
    export interface Schema$MigrationSource {
        /**
         * Output only. The host and port of the on-premises instance in host:port format
         */
        hostPort?: string | null;
        /**
         * Output only. Place holder for the external source identifier(e.g DMS job name) that created the cluster.
         */
        referenceId?: string | null;
        /**
         * Output only. Type of migration source.
         */
        sourceType?: string | null;
    }
    /**
     * Metadata related to network configuration.
     */
    export interface Schema$NetworkConfig {
        /**
         * Optional. Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default". If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. Field name is intended to be consistent with Cloud SQL.
         */
        allocatedIpRange?: string | null;
        /**
         * Optional. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: `projects/{project_number\}/global/networks/{network_id\}`. This is required to create a cluster.
         */
        network?: string | null;
    }
    /**
     * Details of a single node in the instance. Nodes in an AlloyDB instance are ephemereal, they can change during update, failover, autohealing and resize operations.
     */
    export interface Schema$Node {
        /**
         * The identifier of the VM e.g. "test-read-0601-407e52be-ms3l".
         */
        id?: string | null;
        /**
         * The private IP address of the VM e.g. "10.57.0.34".
         */
        ip?: string | null;
        /**
         * Determined by state of the compute VM and postgres-service health. Compute VM state can have values listed in https://cloud.google.com/compute/docs/instances/instance-life-cycle and postgres-service health can have values: HEALTHY and UNHEALTHY.
         */
        state?: string | null;
        /**
         * The Compute Engine zone of the VM e.g. "us-central1-b".
         */
        zoneId?: string | null;
    }
    /**
     * Observability Instance specific configuration.
     */
    export interface Schema$ObservabilityInstanceConfig {
        /**
         * Observability feature status for an instance. This is a read-only flag and modifiable only by producer API. This flag is turned "off" by default.
         */
        enabled?: boolean | null;
        /**
         * Query string length. The default value is 10k.
         */
        maxQueryStringLength?: number | null;
        /**
         * Preserve comments in query string for an instance. This flag is turned "off" by default.
         */
        preserveComments?: boolean | null;
        /**
         * Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 to 20 is considered valid.
         */
        queryPlansPerMinute?: number | null;
        /**
         * Record application tags for an instance. This flag is turned "off" by default.
         */
        recordApplicationTags?: boolean | null;
        /**
         * Track actively running queries on the instance. If not set, this flag is "off" by default.
         */
        trackActiveQueries?: boolean | null;
        /**
         * Track wait events during query execution for an instance. This flag is turned "on" by default but tracking is enabled only after observability enabled flag is also turned on.
         */
        trackWaitEvents?: boolean | null;
        /**
         * Output only. Track wait event types during query execution for an instance. This flag is turned "on" by default but tracking is enabled only after observability enabled flag is also turned on. This is read-only flag and only modifiable by producer API.
         */
        trackWaitEventTypes?: boolean | null;
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
         * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
     * Configuration for the primary cluster. It has the list of clusters that are replicating from this cluster. This should be set if and only if the cluster is of type PRIMARY.
     */
    export interface Schema$PrimaryConfig {
        /**
         * Output only. Names of the clusters that are replicating from this cluster.
         */
        secondaryClusterNames?: string[] | null;
    }
    /**
     * Message for promoting a Cluster
     */
    export interface Schema$PromoteClusterRequest {
        /**
         * Optional. The current etag of the Cluster. If an etag is provided and does not match the current etag of the Cluster, deletion will be blocked and an ABORTED error will be returned.
         */
        etag?: string | null;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string | null;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the delete.
         */
        validateOnly?: boolean | null;
    }
    /**
     * PscConfig contains PSC related configuration at a cluster level.
     */
    export interface Schema$PscConfig {
        /**
         * Optional. Create an instance that allows connections from Private Service Connect endpoints to the instance.
         */
        pscEnabled?: boolean | null;
    }
    /**
     * PscInstanceConfig contains PSC related configuration at an instance level.
     */
    export interface Schema$PscInstanceConfig {
        /**
         * Optional. List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance.
         */
        allowedConsumerProjects?: string[] | null;
        /**
         * Output only. The DNS name of the instance for PSC connectivity. Name convention: ...alloydb-psc.goog
         */
        pscDnsName?: string | null;
        /**
         * Output only. The service attachment created when Private Service Connect (PSC) is enabled for the instance. The name of the resource will be in the format of `projects//regions//serviceAttachments/`
         */
        serviceAttachmentLink?: string | null;
    }
    /**
     * A backup's position in a quantity-based retention queue, of backups with the same source cluster and type, with length, retention, specified by the backup's retention policy. Once the position is greater than the retention, the backup is eligible to be garbage collected. Example: 5 backups from the same source cluster and type with a quantity-based retention of 3 and denoted by backup_id (position, retention). Safe: backup_5 (1, 3), backup_4, (2, 3), backup_3 (3, 3). Awaiting garbage collection: backup_2 (4, 3), backup_1 (5, 3)
     */
    export interface Schema$QuantityBasedExpiry {
        /**
         * Output only. The backup's position among its backups with the same source cluster and type, by descending chronological order create time(i.e. newest first).
         */
        retentionCount?: number | null;
        /**
         * Output only. The length of the quantity-based queue, specified by the backup's retention policy.
         */
        totalRetentionCount?: number | null;
    }
    /**
     * A quantity based policy specifies that a certain number of the most recent successful backups should be retained.
     */
    export interface Schema$QuantityBasedRetention {
        /**
         * The number of backups to retain.
         */
        count?: number | null;
    }
    /**
     * QueryInsights Instance specific configuration.
     */
    export interface Schema$QueryInsightsInstanceConfig {
        /**
         * Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
         */
        queryPlansPerMinute?: number | null;
        /**
         * Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
         */
        queryStringLength?: number | null;
        /**
         * Record application tags for an instance. This flag is turned "on" by default.
         */
        recordApplicationTags?: boolean | null;
        /**
         * Record client address for an instance. Client address is PII information. This flag is turned "on" by default.
         */
        recordClientAddress?: boolean | null;
    }
    /**
     * Configuration for a read pool instance.
     */
    export interface Schema$ReadPoolConfig {
        /**
         * Read capacity, i.e. number of nodes in a read pool instance.
         */
        nodeCount?: number | null;
    }
    export interface Schema$RestartInstanceRequest {
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string | null;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the restart.
         */
        validateOnly?: boolean | null;
    }
    /**
     * Message for restoring a Cluster from a backup or another cluster at a given point in time.
     */
    export interface Schema$RestoreClusterRequest {
        /**
         * Backup source.
         */
        backupSource?: Schema$BackupSource;
        /**
         * Required. The resource being created
         */
        cluster?: Schema$Cluster;
        /**
         * Required. ID of the requesting object.
         */
        clusterId?: string | null;
        /**
         * ContinuousBackup source. Continuous backup needs to be enabled in the source cluster for this operation to succeed.
         */
        continuousBackupSource?: Schema$ContinuousBackupSource;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string | null;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the import request.
         */
        validateOnly?: boolean | null;
    }
    /**
     * Configuration information for the secondary cluster. This should be set if and only if the cluster is of type SECONDARY.
     */
    export interface Schema$SecondaryConfig {
        /**
         * The name of the primary cluster name with the format: * projects/{project\}/locations/{region\}/clusters/{cluster_id\}
         */
        primaryClusterName?: string | null;
    }
    /**
     * SSL configuration.
     */
    export interface Schema$SslConfig {
        /**
         * Optional. Certificate Authority (CA) source. Only CA_SOURCE_MANAGED is supported currently, and is the default value.
         */
        caSource?: string | null;
        /**
         * Optional. SSL mode. Specifies client-server SSL/TLS connection behavior.
         */
        sslMode?: string | null;
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
    /**
     * Configuration for availability of database instance
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration {
        /**
         * Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available).
         */
        availabilityType?: string | null;
        /**
         * Checks for resources that are configured to have redundancy, and ongoing replication across regions
         */
        crossRegionReplicaConfigured?: boolean | null;
        externalReplicaConfigured?: boolean | null;
        promotableReplicaConfigured?: boolean | null;
    }
    /**
     * Configuration for automatic backups
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainBackupConfiguration {
        /**
         * Whether customer visible automated backups are enabled on the instance.
         */
        automatedBackupEnabled?: boolean | null;
        /**
         * Backup retention settings.
         */
        backupRetentionSettings?: Schema$StorageDatabasecenterPartnerapiV1mainRetentionSettings;
        /**
         * Whether point-in-time recovery is enabled. This is optional field, if the database service does not have this feature or metadata is not available in control plane, this can be omitted.
         */
        pointInTimeRecoveryEnabled?: boolean | null;
    }
    /**
     * A backup run.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainBackupRun {
        /**
         * The time the backup operation completed. REQUIRED
         */
        endTime?: string | null;
        /**
         * Information about why the backup operation failed. This is only present if the run has the FAILED status. OPTIONAL
         */
        error?: Schema$StorageDatabasecenterPartnerapiV1mainOperationError;
        /**
         * The time the backup operation started. REQUIRED
         */
        startTime?: string | null;
        /**
         * The status of this run. REQUIRED
         */
        status?: string | null;
    }
    /**
     * Contains compliance information about a security standard indicating unmet recommendations.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainCompliance {
        /**
         * Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP.
         */
        standard?: string | null;
        /**
         * Version of the standard or benchmark, for example, 1.1
         */
        version?: string | null;
    }
    /**
     * Any custom metadata associated with the resource. i.e. A spanner instance can have multiple databases with its own unique metadata. Information for these individual databases can be captured in custom metadata data
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainCustomMetadataData {
        databaseMetadata?: Schema$StorageDatabasecenterPartnerapiV1mainDatabaseMetadata[];
    }
    /**
     * Metadata for individual databases created in an instance. i.e. spanner instance can have multiple databases with unique configuration settings.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainDatabaseMetadata {
        /**
         * Backup configuration for this database
         */
        backupConfiguration?: Schema$StorageDatabasecenterPartnerapiV1mainBackupConfiguration;
        /**
         * Information about the last backup attempt for this database
         */
        backupRun?: Schema$StorageDatabasecenterPartnerapiV1mainBackupRun;
        product?: Schema$StorageDatabasecenterProtoCommonProduct;
        resourceId?: Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceId;
        /**
         * Required. Database name. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel
         */
        resourceName?: string | null;
    }
    /**
     * DatabaseResourceFeed is the top level proto to be used to ingest different database resource level events into Condor platform.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeed {
        /**
         * Required. Timestamp when feed is generated.
         */
        feedTimestamp?: string | null;
        /**
         * Required. Type feed to be ingested into condor
         */
        feedType?: string | null;
        /**
         * More feed data would be added in subsequent CLs
         */
        observabilityMetricData?: Schema$StorageDatabasecenterPartnerapiV1mainObservabilityMetricData;
        recommendationSignalData?: Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceRecommendationSignalData;
        resourceHealthSignalData?: Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalData;
        /**
         * Primary key associated with the Resource. resource_id is available in individual feed level as well.
         */
        resourceId?: Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceId;
        resourceMetadata?: Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata;
    }
    /**
     * Common model for database resource health signal data.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalData {
        /**
         * Any other additional metadata
         */
        additionalMetadata?: {
            [key: string]: any;
        } | null;
        /**
         * Industry standards associated with this signal; if this signal is an issue, that could be a violation of the associated industry standard(s). For example, AUTO_BACKUP_DISABLED signal is associated with CIS GCP 1.1, CIS GCP 1.2, CIS GCP 1.3, NIST 800-53 and ISO-27001 compliance standards. If a database resource does not have automated backup enable, it will violate these following industry standards.
         */
        compliance?: Schema$StorageDatabasecenterPartnerapiV1mainCompliance[];
        /**
         * Description associated with signal
         */
        description?: string | null;
        /**
         * Required. The last time at which the event described by this signal took place
         */
        eventTime?: string | null;
        /**
         * The external-uri of the signal, using which more information about this signal can be obtained. In GCP, this will take user to SCC page to get more details about signals.
         */
        externalUri?: string | null;
        /**
         * Required. The name of the signal, ex: PUBLIC_SQL_INSTANCE, SQL_LOG_ERROR_VERBOSITY etc.
         */
        name?: string | null;
        /**
         * Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged
         */
        provider?: string | null;
        /**
         * Closest parent container of this resource. In GCP, 'container' refers to a Cloud Resource Manager project. It must be resource name of a Cloud Resource Manager project with the format of "provider//", such as "projects/123". For GCP provided resources, number should be project number.
         */
        resourceContainer?: string | null;
        /**
         * Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel
         */
        resourceName?: string | null;
        /**
         * Required. The class of the signal, such as if it's a THREAT or VULNERABILITY.
         */
        signalClass?: string | null;
        /**
         * Required. Unique identifier for the signal. This is an unique id which would be mainatined by partner to identify a signal.
         */
        signalId?: string | null;
        /**
         * Required. Type of signal, for example, `AVAILABLE_IN_MULTIPLE_ZONES`, `LOGGING_MOST_ERRORS`, etc.
         */
        signalType?: string | null;
        state?: string | null;
    }
    /**
     * DatabaseResourceId will serve as primary key for any resource ingestion event.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceId {
        /**
         * Required. Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged
         */
        provider?: string | null;
        /**
         * Optional. Needs to be used only when the provider is PROVIDER_OTHER.
         */
        providerDescription?: string | null;
        /**
         * Required. The type of resource this ID is identifying. Ex redis.googleapis.com/Instance, redis.googleapis.com/Cluster, alloydb.googleapis.com/Cluster, alloydb.googleapis.com/Instance, spanner.googleapis.com/Instance REQUIRED Please refer go/condor-common-datamodel
         */
        resourceType?: string | null;
        /**
         * Required. A service-local token that distinguishes this resource from other resources within the same service.
         */
        uniqueId?: string | null;
    }
    /**
     * Common model for database resource instance metadata.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata {
        /**
         * Availability configuration for this instance
         */
        availabilityConfiguration?: Schema$StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration;
        /**
         * Backup configuration for this instance
         */
        backupConfiguration?: Schema$StorageDatabasecenterPartnerapiV1mainBackupConfiguration;
        /**
         * Latest backup run information for this instance
         */
        backupRun?: Schema$StorageDatabasecenterPartnerapiV1mainBackupRun;
        /**
         * The creation time of the resource, i.e. the time when resource is created and recorded in partner service.
         */
        creationTime?: string | null;
        /**
         * Current state of the instance.
         */
        currentState?: string | null;
        /**
         * Any custom metadata associated with the resource
         */
        customMetadata?: Schema$StorageDatabasecenterPartnerapiV1mainCustomMetadataData;
        /**
         * Entitlements associated with the resource
         */
        entitlements?: Schema$StorageDatabasecenterPartnerapiV1mainEntitlement[];
        /**
         * The state that the instance is expected to be in. For example, an instance state can transition to UNHEALTHY due to wrong patch update, while the expected state will remain at the HEALTHY.
         */
        expectedState?: string | null;
        /**
         * Required. Unique identifier for a Database resource
         */
        id?: Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceId;
        /**
         * The type of the instance. Specified at creation time.
         */
        instanceType?: string | null;
        /**
         * The resource location. REQUIRED
         */
        location?: string | null;
        /**
         * Machine configuration for this resource.
         */
        machineConfiguration?: Schema$StorageDatabasecenterPartnerapiV1mainMachineConfiguration;
        /**
         * Identifier for this resource's immediate parent/primary resource if the current resource is a replica or derived form of another Database resource. Else it would be NULL. REQUIRED if the immediate parent exists when first time resource is getting ingested, otherwise optional.
         */
        primaryResourceId?: Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceId;
        /**
         * The product this resource represents.
         */
        product?: Schema$StorageDatabasecenterProtoCommonProduct;
        /**
         * Closest parent Cloud Resource Manager container of this resource. It must be resource name of a Cloud Resource Manager project with the format of "/", such as "projects/123". For GCP provided resources, number should be project number.
         */
        resourceContainer?: string | null;
        /**
         * Required. Different from DatabaseResourceId.unique_id, a resource name can be reused over time. That is, after a resource named "ABC" is deleted, the name "ABC" can be used to to create a new resource within the same source. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel
         */
        resourceName?: string | null;
        /**
         * The time at which the resource was updated and recorded at partner service.
         */
        updationTime?: string | null;
        /**
         * User-provided labels, represented as a dictionary where each label is a single key value pair.
         */
        userLabels?: {
            [key: string]: string;
        } | null;
        /**
         * User-provided labels associated with the resource
         */
        userLabelSet?: Schema$StorageDatabasecenterPartnerapiV1mainUserLabels;
    }
    /**
     * Common model for database resource recommendation signal data.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainDatabaseResourceRecommendationSignalData {
        /**
         * Optional. Any other additional metadata specific to recommendation
         */
        additionalMetadata?: {
            [key: string]: any;
        } | null;
        /**
         * Required. last time recommendationw as refreshed
         */
        lastRefreshTime?: string | null;
        /**
         * Required. Recommendation state
         */
        recommendationState?: string | null;
        /**
         * Required. Name of recommendation. Examples: organizations/1234/locations/us-central1/recommenders/google.cloudsql.instance.PerformanceRecommender/recommendations/9876
         */
        recommender?: string | null;
        /**
         * Required. ID of recommender. Examples: "google.cloudsql.instance.PerformanceRecommender"
         */
        recommenderId?: string | null;
        /**
         * Required. Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.cloudsql.instance.PerformanceRecommender", recommender_subtype can be "MYSQL_HIGH_NUMBER_OF_OPEN_TABLES_BEST_PRACTICE"/"POSTGRES_HIGH_TRANSACTION_ID_UTILIZATION_BEST_PRACTICE"
         */
        recommenderSubtype?: string | null;
        /**
         * Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel
         */
        resourceName?: string | null;
        /**
         * Required. Type of signal, for example, `SIGNAL_TYPE_IDLE`, `SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES`, etc.
         */
        signalType?: string | null;
    }
    /**
     * Proto representing the access that a user has to a specific feature/service. NextId: 3.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainEntitlement {
        /**
         * The current state of user's accessibility to a feature/benefit.
         */
        entitlementState?: string | null;
        /**
         * An enum that represents the type of this entitlement.
         */
        type?: string | null;
    }
    /**
     * MachineConfiguration describes the configuration of a machine specific to Database Resource.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainMachineConfiguration {
        /**
         * The number of CPUs.
         */
        cpuCount?: number | null;
        /**
         * Memory size in bytes.
         */
        memorySizeInBytes?: string | null;
    }
    export interface Schema$StorageDatabasecenterPartnerapiV1mainObservabilityMetricData {
        /**
         * Required. The timestamp of the metric value.
         */
        metricTimestamp?: string | null;
        /**
         * Required. Type of metric like CPU, Memory, etc.
         */
        metricType?: string | null;
        /**
         * Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel
         */
        resourceName?: string | null;
        /**
         * Required. Value of the metric type.
         */
        value?: number | null;
    }
    /**
     * An error that occurred during a backup creation operation.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainOperationError {
        /**
         * Identifies the specific error that occurred. REQUIRED
         */
        code?: string | null;
        errorType?: string | null;
        /**
         * Additional information about the error encountered. REQUIRED
         */
        message?: string | null;
    }
    export interface Schema$StorageDatabasecenterPartnerapiV1mainRetentionSettings {
        quantityBasedRetention?: number | null;
        /**
         * The unit that 'retained_backups' represents.
         */
        retentionUnit?: string | null;
        timeBasedRetention?: string | null;
    }
    /**
     * Message type for storing user labels. User labels are used to tag App Engine resources, allowing users to search for resources matching a set of labels and to aggregate usage data by labels.
     */
    export interface Schema$StorageDatabasecenterPartnerapiV1mainUserLabels {
        labels?: {
            [key: string]: string;
        } | null;
    }
    /**
     * Product specification for Condor resources.
     */
    export interface Schema$StorageDatabasecenterProtoCommonProduct {
        /**
         * The specific engine that the underlying database is running.
         */
        engine?: string | null;
        /**
         * Type of specific database product. It could be CloudSQL, AlloyDB etc..
         */
        type?: string | null;
        /**
         * Version of the underlying database engine. Example values: For MySQL, it could be "8.0", "5.7" etc.. For Postgres, it could be "14", "15" etc..
         */
        version?: string | null;
    }
    /**
     * Restrictions on STRING type values
     */
    export interface Schema$StringRestrictions {
        /**
         * The list of allowed values, if bounded. This field will be empty if there is a unbounded number of allowed values.
         */
        allowedValues?: string[] | null;
    }
    /**
     * SupportedDatabaseFlag gives general information about a database flag, like type and allowed values. This is a static value that is defined on the server side, and it cannot be modified by callers. To set the Database flags on a particular Instance, a caller should modify the Instance.database_flags field.
     */
    export interface Schema$SupportedDatabaseFlag {
        /**
         * Whether the database flag accepts multiple values. If true, a comma-separated list of stringified values may be specified.
         */
        acceptsMultipleValues?: boolean | null;
        /**
         * The name of the database flag, e.g. "max_allowed_packets". The is a possibly key for the Instance.database_flags map field.
         */
        flagName?: string | null;
        /**
         * Restriction on INTEGER type value.
         */
        integerRestrictions?: Schema$IntegerRestrictions;
        /**
         * The name of the flag resource, following Google Cloud conventions, e.g.: * projects/{project\}/locations/{location\}/flags/{flag\} This field currently has no semantic meaning.
         */
        name?: string | null;
        /**
         * Whether setting or updating this flag on an Instance requires a database restart. If a flag that requires database restart is set, the backend will automatically restart the database (making sure to satisfy any availability SLO's).
         */
        requiresDbRestart?: boolean | null;
        /**
         * Restriction on STRING type value.
         */
        stringRestrictions?: Schema$StringRestrictions;
        /**
         * Major database engine versions for which this flag is supported.
         */
        supportedDbVersions?: string[] | null;
        valueType?: string | null;
    }
    /**
     * A time based retention policy specifies that all backups within a certain time period should be retained.
     */
    export interface Schema$TimeBasedRetention {
        /**
         * The retention period.
         */
        retentionPeriod?: string | null;
    }
    /**
     * Policy to be used while updating the instance.
     */
    export interface Schema$UpdatePolicy {
        /**
         * Mode for updating the instance.
         */
        mode?: string | null;
    }
    /**
     * Message describing User object.
     */
    export interface Schema$User {
        /**
         * Optional. List of database roles this user has. The database role strings are subject to the PostgreSQL naming conventions.
         */
        databaseRoles?: string[] | null;
        /**
         * Output only. Name of the resource in the form of projects/{project\}/locations/{location\}/cluster/{cluster\}/users/{user\}.
         */
        name?: string | null;
        /**
         * Input only. Password for the user.
         */
        password?: string | null;
        /**
         * Optional. Type of this user.
         */
        userType?: string | null;
    }
    /**
     * The username/password for a database user. Used for specifying initial users at cluster creation time.
     */
    export interface Schema$UserPassword {
        /**
         * The initial password for the user.
         */
        password?: string | null;
        /**
         * The database username.
         */
        user?: string | null;
    }
    /**
     * A weekly schedule starts a backup at prescribed start times within a day, for the specified days of the week. The weekly schedule message is flexible and can be used to create many types of schedules. For example, to have a daily backup that starts at 22:00, configure the `start_times` field to have one element "22:00" and the `days_of_week` field to have all seven days of the week.
     */
    export interface Schema$WeeklySchedule {
        /**
         * The days of the week to perform a backup. If this field is left empty, the default of every day of the week is used.
         */
        daysOfWeek?: string[] | null;
        /**
         * The times during the day to start a backup. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00). If no start times are provided, a single fixed start time is chosen arbitrarily.
         */
        startTimes?: Schema$GoogleTypeTimeOfDay[];
    }
    export class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations {
        context: APIRequestContext;
        backups: Resource$Projects$Locations$Backups;
        clusters: Resource$Projects$Locations$Clusters;
        operations: Resource$Projects$Locations$Operations;
        supportedDatabaseFlags: Resource$Projects$Locations$Supporteddatabaseflags;
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
        get(params?: Params$Resource$Projects$Locations$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudLocationLocation>;
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudLocationLocation>, callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>): void;
        get(params: Params$Resource$Projects$Locations$Get, callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>): void;
        /**
         * Lists information about the supported locations for this service.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudLocationListLocationsResponse>;
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$List, callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>): void;
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
    export class Resource$Projects$Locations$Backups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new Backup in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Backups$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Backups$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Backups$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Backups$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Backups$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes a single Backup.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Backups$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Backups$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Backups$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Backups$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Backups$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets details of a single Backup.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Backups$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Backups$Get, options?: MethodOptions): GaxiosPromise<Schema$Backup>;
        get(params: Params$Resource$Projects$Locations$Backups$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Backups$Get, options: MethodOptions | BodyResponseCallback<Schema$Backup>, callback: BodyResponseCallback<Schema$Backup>): void;
        get(params: Params$Resource$Projects$Locations$Backups$Get, callback: BodyResponseCallback<Schema$Backup>): void;
        get(callback: BodyResponseCallback<Schema$Backup>): void;
        /**
         * Lists Backups in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Backups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Backups$List, options?: MethodOptions): GaxiosPromise<Schema$ListBackupsResponse>;
        list(params: Params$Resource$Projects$Locations$Backups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Backups$List, options: MethodOptions | BodyResponseCallback<Schema$ListBackupsResponse>, callback: BodyResponseCallback<Schema$ListBackupsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Backups$List, callback: BodyResponseCallback<Schema$ListBackupsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListBackupsResponse>): void;
        /**
         * Updates the parameters of a single Backup.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Backups$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Backups$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Backups$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Backups$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Backups$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Backups$Create extends StandardParameters {
        /**
         * Required. ID of the requesting object.
         */
        backupId?: string;
        /**
         * Required. Value for parent.
         */
        parent?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. If set, the backend validates the request, but doesn't actually execute it.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Backup;
    }
    export interface Params$Resource$Projects$Locations$Backups$Delete extends StandardParameters {
        /**
         * Optional. The current etag of the Backup. If an etag is provided and does not match the current etag of the Backup, deletion will be blocked and an ABORTED error will be returned.
         */
        etag?: string;
        /**
         * Required. Name of the resource. For the required format, see the comment on the Backup.name field.
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. If set, the backend validates the request, but doesn't actually execute it.
         */
        validateOnly?: boolean;
    }
    export interface Params$Resource$Projects$Locations$Backups$Get extends StandardParameters {
        /**
         * Required. Name of the resource
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Backups$List extends StandardParameters {
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
         * Required. Parent value for ListBackupsRequest
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Backups$Patch extends StandardParameters {
        /**
         * Optional. If set to true, update succeeds even if instance is not found. In that case, a new backup is created and `update_mask` is ignored.
         */
        allowMissing?: boolean;
        /**
         * Output only. The name of the backup resource with the format: * projects/{project\}/locations/{region\}/backups/{backup_id\} where the cluster and backup ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the backup resource name is the name of the parent resource: * projects/{project\}/locations/{region\}
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. Field mask is used to specify the fields to be overwritten in the Backup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Optional. If set, the backend validates the request, but doesn't actually execute it.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Backup;
    }
    export class Resource$Projects$Locations$Clusters {
        context: APIRequestContext;
        instances: Resource$Projects$Locations$Clusters$Instances;
        users: Resource$Projects$Locations$Clusters$Users;
        constructor(context: APIRequestContext);
        /**
         * Creates a new Cluster in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Clusters$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Clusters$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Clusters$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Clusters$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Clusters$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        createsecondary(params: Params$Resource$Projects$Locations$Clusters$Createsecondary, options: StreamMethodOptions): GaxiosPromise<Readable>;
        createsecondary(params?: Params$Resource$Projects$Locations$Clusters$Createsecondary, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        createsecondary(params: Params$Resource$Projects$Locations$Clusters$Createsecondary, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        createsecondary(params: Params$Resource$Projects$Locations$Clusters$Createsecondary, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        createsecondary(params: Params$Resource$Projects$Locations$Clusters$Createsecondary, callback: BodyResponseCallback<Schema$Operation>): void;
        createsecondary(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes a single Cluster.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Clusters$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Clusters$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Clusters$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Clusters$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Clusters$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets details of a single Cluster.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Clusters$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Clusters$Get, options?: MethodOptions): GaxiosPromise<Schema$Cluster>;
        get(params: Params$Resource$Projects$Locations$Clusters$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Clusters$Get, options: MethodOptions | BodyResponseCallback<Schema$Cluster>, callback: BodyResponseCallback<Schema$Cluster>): void;
        get(params: Params$Resource$Projects$Locations$Clusters$Get, callback: BodyResponseCallback<Schema$Cluster>): void;
        get(callback: BodyResponseCallback<Schema$Cluster>): void;
        /**
         * Lists Clusters in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Clusters$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Clusters$List, options?: MethodOptions): GaxiosPromise<Schema$ListClustersResponse>;
        list(params: Params$Resource$Projects$Locations$Clusters$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Clusters$List, options: MethodOptions | BodyResponseCallback<Schema$ListClustersResponse>, callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
        list(params: Params$Resource$Projects$Locations$Clusters$List, callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
        /**
         * Updates the parameters of a single Cluster.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Clusters$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Clusters$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Clusters$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Clusters$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Clusters$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Promotes a SECONDARY cluster. This turns down replication from the PRIMARY cluster and promotes a secondary cluster into its own standalone cluster. Imperative only.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        promote(params: Params$Resource$Projects$Locations$Clusters$Promote, options: StreamMethodOptions): GaxiosPromise<Readable>;
        promote(params?: Params$Resource$Projects$Locations$Clusters$Promote, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        promote(params: Params$Resource$Projects$Locations$Clusters$Promote, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        promote(params: Params$Resource$Projects$Locations$Clusters$Promote, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        promote(params: Params$Resource$Projects$Locations$Clusters$Promote, callback: BodyResponseCallback<Schema$Operation>): void;
        promote(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        restore(params: Params$Resource$Projects$Locations$Clusters$Restore, options: StreamMethodOptions): GaxiosPromise<Readable>;
        restore(params?: Params$Resource$Projects$Locations$Clusters$Restore, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        restore(params: Params$Resource$Projects$Locations$Clusters$Restore, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        restore(params: Params$Resource$Projects$Locations$Clusters$Restore, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        restore(params: Params$Resource$Projects$Locations$Clusters$Restore, callback: BodyResponseCallback<Schema$Operation>): void;
        restore(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Create extends StandardParameters {
        /**
         * Required. ID of the requesting object.
         */
        clusterId?: string;
        /**
         * Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field.
         */
        parent?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the create request.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Cluster;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Createsecondary extends StandardParameters {
        /**
         * Required. ID of the requesting object (the secondary cluster).
         */
        clusterId?: string;
        /**
         * Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field.
         */
        parent?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the create request.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Cluster;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Delete extends StandardParameters {
        /**
         * Optional. The current etag of the Cluster. If an etag is provided and does not match the current etag of the Cluster, deletion will be blocked and an ABORTED error will be returned.
         */
        etag?: string;
        /**
         * Optional. Whether to cascade delete child instances for given cluster.
         */
        force?: boolean;
        /**
         * Required. The name of the resource. For the required format, see the comment on the Cluster.name field.
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the delete.
         */
        validateOnly?: boolean;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Get extends StandardParameters {
        /**
         * Required. The name of the resource. For the required format, see the comment on the Cluster.name field.
         */
        name?: string;
        /**
         * Optional. The view of the cluster to return. Returns all default fields if not set.
         */
        view?: string;
    }
    export interface Params$Resource$Projects$Locations$Clusters$List extends StandardParameters {
        /**
         * Optional. Filtering results
         */
        filter?: string;
        /**
         * Optional. Hint for how to order the results
         */
        orderBy?: string;
        /**
         * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. The name of the parent resource. For the required format, see the comment on the Cluster.name field. Additionally, you can perform an aggregated list operation by specifying a value with the following format: * projects/{project\}/locations/-
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Patch extends StandardParameters {
        /**
         * Optional. If set to true, update succeeds even if cluster is not found. In that case, a new cluster is created and `update_mask` is ignored.
         */
        allowMissing?: boolean;
        /**
         * Output only. The name of the cluster resource with the format: * projects/{project\}/locations/{region\}/clusters/{cluster_id\} where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/{project\}/locations/{region\}
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. Field mask is used to specify the fields to be overwritten in the Cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the update request.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Cluster;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Promote extends StandardParameters {
        /**
         * Required. The name of the resource. For the required format, see the comment on the Cluster.name field
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PromoteClusterRequest;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Restore extends StandardParameters {
        /**
         * Required. The name of the parent resource. For the required format, see the comment on the Cluster.name field.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RestoreClusterRequest;
    }
    export class Resource$Projects$Locations$Clusters$Instances {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new Instance in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Clusters$Instances$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Clusters$Instances$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Clusters$Instances$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Clusters$Instances$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Clusters$Instances$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Creates a new SECONDARY Instance in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        createsecondary(params: Params$Resource$Projects$Locations$Clusters$Instances$Createsecondary, options: StreamMethodOptions): GaxiosPromise<Readable>;
        createsecondary(params?: Params$Resource$Projects$Locations$Clusters$Instances$Createsecondary, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        createsecondary(params: Params$Resource$Projects$Locations$Clusters$Instances$Createsecondary, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        createsecondary(params: Params$Resource$Projects$Locations$Clusters$Instances$Createsecondary, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        createsecondary(params: Params$Resource$Projects$Locations$Clusters$Instances$Createsecondary, callback: BodyResponseCallback<Schema$Operation>): void;
        createsecondary(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes a single Instance.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Clusters$Instances$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Clusters$Instances$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Clusters$Instances$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Clusters$Instances$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Clusters$Instances$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Forces a Failover for a highly available instance. Failover promotes the HA standby instance as the new primary. Imperative only.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        failover(params: Params$Resource$Projects$Locations$Clusters$Instances$Failover, options: StreamMethodOptions): GaxiosPromise<Readable>;
        failover(params?: Params$Resource$Projects$Locations$Clusters$Instances$Failover, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        failover(params: Params$Resource$Projects$Locations$Clusters$Instances$Failover, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        failover(params: Params$Resource$Projects$Locations$Clusters$Instances$Failover, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        failover(params: Params$Resource$Projects$Locations$Clusters$Instances$Failover, callback: BodyResponseCallback<Schema$Operation>): void;
        failover(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets details of a single Instance.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Clusters$Instances$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Clusters$Instances$Get, options?: MethodOptions): GaxiosPromise<Schema$Instance>;
        get(params: Params$Resource$Projects$Locations$Clusters$Instances$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Clusters$Instances$Get, options: MethodOptions | BodyResponseCallback<Schema$Instance>, callback: BodyResponseCallback<Schema$Instance>): void;
        get(params: Params$Resource$Projects$Locations$Clusters$Instances$Get, callback: BodyResponseCallback<Schema$Instance>): void;
        get(callback: BodyResponseCallback<Schema$Instance>): void;
        /**
         * Get instance metadata used for a connection.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getConnectionInfo(params: Params$Resource$Projects$Locations$Clusters$Instances$Getconnectioninfo, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getConnectionInfo(params?: Params$Resource$Projects$Locations$Clusters$Instances$Getconnectioninfo, options?: MethodOptions): GaxiosPromise<Schema$ConnectionInfo>;
        getConnectionInfo(params: Params$Resource$Projects$Locations$Clusters$Instances$Getconnectioninfo, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getConnectionInfo(params: Params$Resource$Projects$Locations$Clusters$Instances$Getconnectioninfo, options: MethodOptions | BodyResponseCallback<Schema$ConnectionInfo>, callback: BodyResponseCallback<Schema$ConnectionInfo>): void;
        getConnectionInfo(params: Params$Resource$Projects$Locations$Clusters$Instances$Getconnectioninfo, callback: BodyResponseCallback<Schema$ConnectionInfo>): void;
        getConnectionInfo(callback: BodyResponseCallback<Schema$ConnectionInfo>): void;
        /**
         * Injects fault in an instance. Imperative only.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        injectFault(params: Params$Resource$Projects$Locations$Clusters$Instances$Injectfault, options: StreamMethodOptions): GaxiosPromise<Readable>;
        injectFault(params?: Params$Resource$Projects$Locations$Clusters$Instances$Injectfault, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        injectFault(params: Params$Resource$Projects$Locations$Clusters$Instances$Injectfault, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        injectFault(params: Params$Resource$Projects$Locations$Clusters$Instances$Injectfault, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        injectFault(params: Params$Resource$Projects$Locations$Clusters$Instances$Injectfault, callback: BodyResponseCallback<Schema$Operation>): void;
        injectFault(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Lists Instances in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Clusters$Instances$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Clusters$Instances$List, options?: MethodOptions): GaxiosPromise<Schema$ListInstancesResponse>;
        list(params: Params$Resource$Projects$Locations$Clusters$Instances$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Clusters$Instances$List, options: MethodOptions | BodyResponseCallback<Schema$ListInstancesResponse>, callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Clusters$Instances$List, callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
        /**
         * Updates the parameters of a single Instance.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Clusters$Instances$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Clusters$Instances$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Clusters$Instances$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Clusters$Instances$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Clusters$Instances$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Restart an Instance in a cluster. Imperative only.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        restart(params: Params$Resource$Projects$Locations$Clusters$Instances$Restart, options: StreamMethodOptions): GaxiosPromise<Readable>;
        restart(params?: Params$Resource$Projects$Locations$Clusters$Instances$Restart, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        restart(params: Params$Resource$Projects$Locations$Clusters$Instances$Restart, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        restart(params: Params$Resource$Projects$Locations$Clusters$Instances$Restart, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        restart(params: Params$Resource$Projects$Locations$Clusters$Instances$Restart, callback: BodyResponseCallback<Schema$Operation>): void;
        restart(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$Create extends StandardParameters {
        /**
         * Required. ID of the requesting object.
         */
        instanceId?: string;
        /**
         * Required. The name of the parent resource. For the required format, see the comment on the Instance.name field.
         */
        parent?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the create request.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Instance;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$Createsecondary extends StandardParameters {
        /**
         * Required. ID of the requesting object.
         */
        instanceId?: string;
        /**
         * Required. The name of the parent resource. For the required format, see the comment on the Instance.name field.
         */
        parent?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the create request.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Instance;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$Delete extends StandardParameters {
        /**
         * Optional. The current etag of the Instance. If an etag is provided and does not match the current etag of the Instance, deletion will be blocked and an ABORTED error will be returned.
         */
        etag?: string;
        /**
         * Required. The name of the resource. For the required format, see the comment on the Instance.name field.
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the delete.
         */
        validateOnly?: boolean;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$Failover extends StandardParameters {
        /**
         * Required. The name of the resource. For the required format, see the comment on the Instance.name field.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FailoverInstanceRequest;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$Get extends StandardParameters {
        /**
         * Required. The name of the resource. For the required format, see the comment on the Instance.name field.
         */
        name?: string;
        /**
         * The view of the instance to return.
         */
        view?: string;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$Getconnectioninfo extends StandardParameters {
        /**
         * Required. The name of the parent resource. The required format is: projects/{project\}/locations/{location\}/clusters/{cluster\}/instances/{instance\}
         */
        parent?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$Injectfault extends StandardParameters {
        /**
         * Required. The name of the resource. For the required format, see the comment on the Instance.name field.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InjectFaultRequest;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$List extends StandardParameters {
        /**
         * Optional. Filtering results
         */
        filter?: string;
        /**
         * Optional. Hint for how to order the results
         */
        orderBy?: string;
        /**
         * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. Additionally, you can perform an aggregated list operation by specifying a value with one of the following formats: * projects/{project\}/locations/-/clusters/- * projects/{project\}/locations/{region\}/clusters/-
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$Patch extends StandardParameters {
        /**
         * Optional. If set to true, update succeeds even if instance is not found. In that case, a new instance is created and `update_mask` is ignored.
         */
        allowMissing?: boolean;
        /**
         * Output only. The name of the instance resource with the format: * projects/{project\}/locations/{region\}/clusters/{cluster_id\}/instances/{instance_id\} where the cluster and instance ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/{project\}/locations/{region\}/clusters/{cluster_id\}
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. Field mask is used to specify the fields to be overwritten in the Instance resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the update request.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Instance;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Instances$Restart extends StandardParameters {
        /**
         * Required. The name of the resource. For the required format, see the comment on the Instance.name field.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RestartInstanceRequest;
    }
    export class Resource$Projects$Locations$Clusters$Users {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new User in a given project, location, and cluster.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Clusters$Users$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Clusters$Users$Create, options?: MethodOptions): GaxiosPromise<Schema$User>;
        create(params: Params$Resource$Projects$Locations$Clusters$Users$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Clusters$Users$Create, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        create(params: Params$Resource$Projects$Locations$Clusters$Users$Create, callback: BodyResponseCallback<Schema$User>): void;
        create(callback: BodyResponseCallback<Schema$User>): void;
        /**
         * Deletes a single User.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Clusters$Users$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Clusters$Users$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Clusters$Users$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Clusters$Users$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Clusters$Users$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets details of a single User.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Clusters$Users$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Clusters$Users$Get, options?: MethodOptions): GaxiosPromise<Schema$User>;
        get(params: Params$Resource$Projects$Locations$Clusters$Users$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Clusters$Users$Get, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        get(params: Params$Resource$Projects$Locations$Clusters$Users$Get, callback: BodyResponseCallback<Schema$User>): void;
        get(callback: BodyResponseCallback<Schema$User>): void;
        /**
         * Lists Users in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Clusters$Users$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Clusters$Users$List, options?: MethodOptions): GaxiosPromise<Schema$ListUsersResponse>;
        list(params: Params$Resource$Projects$Locations$Clusters$Users$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Clusters$Users$List, options: MethodOptions | BodyResponseCallback<Schema$ListUsersResponse>, callback: BodyResponseCallback<Schema$ListUsersResponse>): void;
        list(params: Params$Resource$Projects$Locations$Clusters$Users$List, callback: BodyResponseCallback<Schema$ListUsersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListUsersResponse>): void;
        /**
         * Updates the parameters of a single User.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Clusters$Users$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Clusters$Users$Patch, options?: MethodOptions): GaxiosPromise<Schema$User>;
        patch(params: Params$Resource$Projects$Locations$Clusters$Users$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Clusters$Users$Patch, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        patch(params: Params$Resource$Projects$Locations$Clusters$Users$Patch, callback: BodyResponseCallback<Schema$User>): void;
        patch(callback: BodyResponseCallback<Schema$User>): void;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Users$Create extends StandardParameters {
        /**
         * Required. Value for parent.
         */
        parent?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Required. ID of the requesting object.
         */
        userId?: string;
        /**
         * Optional. If set, the backend validates the request, but doesn't actually execute it.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$User;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Users$Delete extends StandardParameters {
        /**
         * Required. The name of the resource. For the required format, see the comment on the User.name field.
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. If set, the backend validates the request, but doesn't actually execute it.
         */
        validateOnly?: boolean;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Users$Get extends StandardParameters {
        /**
         * Required. The name of the resource. For the required format, see the comment on the User.name field.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Users$List extends StandardParameters {
        /**
         * Optional. Filtering results
         */
        filter?: string;
        /**
         * Optional. Hint for how to order the results
         */
        orderBy?: string;
        /**
         * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * Optional. A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. Parent value for ListUsersRequest
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Clusters$Users$Patch extends StandardParameters {
        /**
         * Optional. Allow missing fields in the update mask.
         */
        allowMissing?: boolean;
        /**
         * Output only. Name of the resource in the form of projects/{project\}/locations/{location\}/cluster/{cluster\}/users/{user\}.
         */
        name?: string;
        /**
         * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
         */
        requestId?: string;
        /**
         * Optional. Field mask is used to specify the fields to be overwritten in the User resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Optional. If set, the backend validates the request, but doesn't actually execute it.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$User;
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
    export class Resource$Projects$Locations$Supporteddatabaseflags {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Lists SupportedDatabaseFlags for a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Supporteddatabaseflags$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Supporteddatabaseflags$List, options?: MethodOptions): GaxiosPromise<Schema$ListSupportedDatabaseFlagsResponse>;
        list(params: Params$Resource$Projects$Locations$Supporteddatabaseflags$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Supporteddatabaseflags$List, options: MethodOptions | BodyResponseCallback<Schema$ListSupportedDatabaseFlagsResponse>, callback: BodyResponseCallback<Schema$ListSupportedDatabaseFlagsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Supporteddatabaseflags$List, callback: BodyResponseCallback<Schema$ListSupportedDatabaseFlagsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListSupportedDatabaseFlagsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Supporteddatabaseflags$List extends StandardParameters {
        /**
         * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. The name of the parent resource. The required format is: * projects/{project\}/locations/{location\} Regardless of the parent specified here, as long it is contains a valid project and location, the service will return a static list of supported flags resources. Note that we do not yet support region-specific flags.
         */
        parent?: string;
    }
    export {};
}
