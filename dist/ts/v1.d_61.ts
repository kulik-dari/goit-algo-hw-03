/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace cloudkms_v1 {
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
     * Cloud Key Management Service (KMS) API
     *
     * Manages keys and performs cryptographic operations in a central cloud service, for direct use by other cloud resources and applications.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const cloudkms = google.cloudkms('v1');
     * ```
     */
    export class Cloudkms {
        context: APIRequestContext;
        folders: Resource$Folders;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Request message for KeyManagementService.AsymmetricDecrypt.
     */
    export interface Schema$AsymmetricDecryptRequest {
        /**
         * Required. The data encrypted with the named CryptoKeyVersion's public key using OAEP.
         */
        ciphertext?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the AsymmetricDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received AsymmetricDecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricDecryptRequest.ciphertext) is equal to AsymmetricDecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        ciphertextCrc32c?: string | null;
    }
    /**
     * Response message for KeyManagementService.AsymmetricDecrypt.
     */
    export interface Schema$AsymmetricDecryptResponse {
        /**
         * The decrypted data originally encrypted with the matching public key.
         */
        plaintext?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned AsymmetricDecryptResponse.plaintext. An integrity check of AsymmetricDecryptResponse.plaintext can be performed by computing the CRC32C checksum of AsymmetricDecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        plaintextCrc32c?: string | null;
        /**
         * The ProtectionLevel of the CryptoKeyVersion used in decryption.
         */
        protectionLevel?: string | null;
        /**
         * Integrity verification field. A flag indicating whether AsymmetricDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that AsymmetricDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedCiphertextCrc32c?: boolean | null;
    }
    /**
     * Request message for KeyManagementService.AsymmetricSign.
     */
    export interface Schema$AsymmetricSignRequest {
        /**
         * Optional. The data to sign. It can't be supplied if AsymmetricSignRequest.digest is supplied.
         */
        data?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.data) is equal to AsymmetricSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        dataCrc32c?: string | null;
        /**
         * Optional. The digest of the data to sign. The digest must be produced with the same digest algorithm as specified by the key version's algorithm. This field may not be supplied if AsymmetricSignRequest.data is supplied.
         */
        digest?: Schema$Digest;
        /**
         * Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.digest using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.digest) is equal to AsymmetricSignRequest.digest_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        digestCrc32c?: string | null;
    }
    /**
     * Response message for KeyManagementService.AsymmetricSign.
     */
    export interface Schema$AsymmetricSignResponse {
        /**
         * The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.
         */
        name?: string | null;
        /**
         * The ProtectionLevel of the CryptoKeyVersion used for signing.
         */
        protectionLevel?: string | null;
        /**
         * The created signature.
         */
        signature?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned AsymmetricSignResponse.signature. An integrity check of AsymmetricSignResponse.signature can be performed by computing the CRC32C checksum of AsymmetricSignResponse.signature and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        signatureCrc32c?: string | null;
        /**
         * Integrity verification field. A flag indicating whether AsymmetricSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that AsymmetricSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedDataCrc32c?: boolean | null;
        /**
         * Integrity verification field. A flag indicating whether AsymmetricSignRequest.digest_crc32c was received by KeyManagementService and used for the integrity verification of the digest. A false value of this field indicates either that AsymmetricSignRequest.digest_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.digest_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedDigestCrc32c?: boolean | null;
    }
    /**
     * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
     */
    export interface Schema$AuditConfig {
        /**
         * The configuration for logging of each type of permission.
         */
        auditLogConfigs?: Schema$AuditLogConfig[];
        /**
         * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
         */
        service?: string | null;
    }
    /**
     * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
     */
    export interface Schema$AuditLogConfig {
        /**
         * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
         */
        exemptedMembers?: string[] | null;
        /**
         * The log type that this config enables.
         */
        logType?: string | null;
    }
    /**
     * Cloud KMS Autokey configuration for a folder.
     */
    export interface Schema$AutokeyConfig {
        /**
         * Optional. Name of the key project, e.g. `projects/{PROJECT_ID\}` or `projects/{PROJECT_NUMBER\}`, where Cloud KMS Autokey will provision a new CryptoKey when a KeyHandle is created. On UpdateAutokeyConfig, the caller will require `cloudkms.cryptoKeys.setIamPolicy` permission on this key project. Once configured, for Cloud KMS Autokey to function properly, this key project must have the Cloud KMS API activated and the Cloud KMS Service Agent for this key project must be granted the `cloudkms.admin` role (or pertinent permissions). A request with an empty key project field will clear the configuration.
         */
        keyProject?: string | null;
        /**
         * Identifier. Name of the AutokeyConfig resource, e.g. `folders/{FOLDER_NUMBER\}/autokeyConfig`.
         */
        name?: string | null;
    }
    /**
     * Associates `members`, or principals, with a `role`.
     */
    export interface Schema$Binding {
        /**
         * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        condition?: Schema$Expr;
        /**
         * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
         */
        members?: string[] | null;
        /**
         * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
         */
        role?: string | null;
    }
    /**
     * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
     */
    export interface Schema$Certificate {
        /**
         * Output only. The issuer distinguished name in RFC 2253 format. Only present if parsed is true.
         */
        issuer?: string | null;
        /**
         * Output only. The certificate is not valid after this time. Only present if parsed is true.
         */
        notAfterTime?: string | null;
        /**
         * Output only. The certificate is not valid before this time. Only present if parsed is true.
         */
        notBeforeTime?: string | null;
        /**
         * Output only. True if the certificate was parsed successfully.
         */
        parsed?: boolean | null;
        /**
         * Required. The raw certificate bytes in DER format.
         */
        rawDer?: string | null;
        /**
         * Output only. The certificate serial number as a hex string. Only present if parsed is true.
         */
        serialNumber?: string | null;
        /**
         * Output only. The SHA-256 certificate fingerprint as a hex string. Only present if parsed is true.
         */
        sha256Fingerprint?: string | null;
        /**
         * Output only. The subject distinguished name in RFC 2253 format. Only present if parsed is true.
         */
        subject?: string | null;
        /**
         * Output only. The subject Alternative DNS names. Only present if parsed is true.
         */
        subjectAlternativeDnsNames?: string[] | null;
    }
    /**
     * Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
     */
    export interface Schema$CertificateChains {
        /**
         * Cavium certificate chain corresponding to the attestation.
         */
        caviumCerts?: string[] | null;
        /**
         * Google card certificate chain corresponding to the attestation.
         */
        googleCardCerts?: string[] | null;
        /**
         * Google partition certificate chain corresponding to the attestation.
         */
        googlePartitionCerts?: string[] | null;
    }
    /**
     * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
     */
    export interface Schema$CryptoKey {
        /**
         * Output only. The time at which this CryptoKey was created.
         */
        createTime?: string | null;
        /**
         * Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/x/locations/x/ekmConnections/x`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.
         */
        cryptoKeyBackend?: string | null;
        /**
         * Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours.
         */
        destroyScheduledDuration?: string | null;
        /**
         * Immutable. Whether this key may contain imported versions only.
         */
        importOnly?: boolean | null;
        /**
         * Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Output only. The resource name for this CryptoKey in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
         */
        name?: string | null;
        /**
         * At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
         */
        nextRotationTime?: string | null;
        /**
         * Output only. A copy of the "primary" CryptoKeyVersion that will be used by Encrypt when this CryptoKey is given in EncryptRequest.name. The CryptoKey's primary version can be updated via UpdateCryptoKeyPrimaryVersion. Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted.
         */
        primary?: Schema$CryptoKeyVersion;
        /**
         * Immutable. The immutable purpose of this CryptoKey.
         */
        purpose?: string | null;
        /**
         * next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
         */
        rotationPeriod?: string | null;
        /**
         * A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.
         */
        versionTemplate?: Schema$CryptoKeyVersionTemplate;
    }
    /**
     * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
     */
    export interface Schema$CryptoKeyVersion {
        /**
         * Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
         */
        algorithm?: string | null;
        /**
         * Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protection_level HSM.
         */
        attestation?: Schema$KeyOperationAttestation;
        /**
         * Output only. The time at which this CryptoKeyVersion was created.
         */
        createTime?: string | null;
        /**
         * Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED.
         */
        destroyEventTime?: string | null;
        /**
         * Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED.
         */
        destroyTime?: string | null;
        /**
         * Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED.
         */
        externalDestructionFailureReason?: string | null;
        /**
         * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
         */
        externalProtectionLevelOptions?: Schema$ExternalProtectionLevelOptions;
        /**
         * Output only. The time this CryptoKeyVersion's key material was generated.
         */
        generateTime?: string | null;
        /**
         * Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED.
         */
        generationFailureReason?: string | null;
        /**
         * Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED.
         */
        importFailureReason?: string | null;
        /**
         * Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion. Only present if the underlying key material was imported.
         */
        importJob?: string | null;
        /**
         * Output only. The time at which this CryptoKeyVersion's key material was most recently imported.
         */
        importTime?: string | null;
        /**
         * Output only. The resource name for this CryptoKeyVersion in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x/cryptoKeyVersions/x`.
         */
        name?: string | null;
        /**
         * Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.
         */
        protectionLevel?: string | null;
        /**
         * Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version.
         */
        reimportEligible?: boolean | null;
        /**
         * The current state of the CryptoKeyVersion.
         */
        state?: string | null;
    }
    /**
     * A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.
     */
    export interface Schema$CryptoKeyVersionTemplate {
        /**
         * Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT.
         */
        algorithm?: string | null;
        /**
         * ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE.
         */
        protectionLevel?: string | null;
    }
    /**
     * Request message for KeyManagementService.Decrypt.
     */
    export interface Schema$DecryptRequest {
        /**
         * Optional. Optional data that must match the data originally supplied in EncryptRequest.additional_authenticated_data.
         */
        additionalAuthenticatedData?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the DecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.additional_authenticated_data) is equal to DecryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        additionalAuthenticatedDataCrc32c?: string | null;
        /**
         * Required. The encrypted data originally returned in EncryptResponse.ciphertext.
         */
        ciphertext?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the DecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.ciphertext) is equal to DecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        ciphertextCrc32c?: string | null;
    }
    /**
     * Response message for KeyManagementService.Decrypt.
     */
    export interface Schema$DecryptResponse {
        /**
         * The decrypted data originally supplied in EncryptRequest.plaintext.
         */
        plaintext?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned DecryptResponse.plaintext. An integrity check of DecryptResponse.plaintext can be performed by computing the CRC32C checksum of DecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        plaintextCrc32c?: string | null;
        /**
         * The ProtectionLevel of the CryptoKeyVersion used in decryption.
         */
        protectionLevel?: string | null;
        /**
         * Whether the Decryption was performed using the primary key version.
         */
        usedPrimary?: boolean | null;
    }
    /**
     * Request message for KeyManagementService.DestroyCryptoKeyVersion.
     */
    export interface Schema$DestroyCryptoKeyVersionRequest {
    }
    /**
     * A Digest holds a cryptographic message digest.
     */
    export interface Schema$Digest {
        /**
         * A message digest produced with the SHA-256 algorithm.
         */
        sha256?: string | null;
        /**
         * A message digest produced with the SHA-384 algorithm.
         */
        sha384?: string | null;
        /**
         * A message digest produced with the SHA-512 algorithm.
         */
        sha512?: string | null;
    }
    /**
     * An EkmConfig is a singleton resource that represents configuration parameters that apply to all CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC in a given project and location.
     */
    export interface Schema$EkmConfig {
        /**
         * Optional. Resource name of the default EkmConnection. Setting this field to the empty string removes the default.
         */
        defaultEkmConnection?: string | null;
        /**
         * Output only. The resource name for the EkmConfig in the format `projects/x/locations/x/ekmConfig`.
         */
        name?: string | null;
    }
    /**
     * An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
     */
    export interface Schema$EkmConnection {
        /**
         * Output only. The time at which the EkmConnection was created.
         */
        createTime?: string | null;
        /**
         * Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.
         */
        cryptoSpacePath?: string | null;
        /**
         * Optional. Etag of the currently stored EkmConnection.
         */
        etag?: string | null;
        /**
         * Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.
         */
        keyManagementMode?: string | null;
        /**
         * Output only. The resource name for the EkmConnection in the format `projects/x/locations/x/ekmConnections/x`.
         */
        name?: string | null;
        /**
         * A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.
         */
        serviceResolvers?: Schema$ServiceResolver[];
    }
    /**
     * Request message for KeyManagementService.Encrypt.
     */
    export interface Schema$EncryptRequest {
        /**
         * Optional. Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
         */
        additionalAuthenticatedData?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the EncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.additional_authenticated_data) is equal to EncryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        additionalAuthenticatedDataCrc32c?: string | null;
        /**
         * Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
         */
        plaintext?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the EncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.plaintext) is equal to EncryptRequest.plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        plaintextCrc32c?: string | null;
    }
    /**
     * Response message for KeyManagementService.Encrypt.
     */
    export interface Schema$EncryptResponse {
        /**
         * The encrypted data.
         */
        ciphertext?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned EncryptResponse.ciphertext. An integrity check of EncryptResponse.ciphertext can be performed by computing the CRC32C checksum of EncryptResponse.ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        ciphertextCrc32c?: string | null;
        /**
         * The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption.
         */
        name?: string | null;
        /**
         * The ProtectionLevel of the CryptoKeyVersion used in encryption.
         */
        protectionLevel?: string | null;
        /**
         * Integrity verification field. A flag indicating whether EncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of the AAD. A false value of this field indicates either that EncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedAdditionalAuthenticatedDataCrc32c?: boolean | null;
        /**
         * Integrity verification field. A flag indicating whether EncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that EncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedPlaintextCrc32c?: boolean | null;
    }
    /**
     * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
     */
    export interface Schema$Expr {
        /**
         * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
         */
        description?: string | null;
        /**
         * Textual representation of an expression in Common Expression Language syntax.
         */
        expression?: string | null;
        /**
         * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
         */
        location?: string | null;
        /**
         * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
         */
        title?: string | null;
    }
    /**
     * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
     */
    export interface Schema$ExternalProtectionLevelOptions {
        /**
         * The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection.
         */
        ekmConnectionKeyPath?: string | null;
        /**
         * The URI for an external resource that this CryptoKeyVersion represents.
         */
        externalKeyUri?: string | null;
    }
    /**
     * Request message for KeyManagementService.GenerateRandomBytes.
     */
    export interface Schema$GenerateRandomBytesRequest {
        /**
         * The length in bytes of the amount of randomness to retrieve. Minimum 8 bytes, maximum 1024 bytes.
         */
        lengthBytes?: number | null;
        /**
         * The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported.
         */
        protectionLevel?: string | null;
    }
    /**
     * Response message for KeyManagementService.GenerateRandomBytes.
     */
    export interface Schema$GenerateRandomBytesResponse {
        /**
         * The generated data.
         */
        data?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned GenerateRandomBytesResponse.data. An integrity check of GenerateRandomBytesResponse.data can be performed by computing the CRC32C checksum of GenerateRandomBytesResponse.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        dataCrc32c?: string | null;
    }
    /**
     * Request message for KeyManagementService.ImportCryptoKeyVersion.
     */
    export interface Schema$ImportCryptoKeyVersionRequest {
        /**
         * Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into.
         */
        algorithm?: string | null;
        /**
         * Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created. If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via ImportCryptoKeyVersion, and be in DESTROYED or IMPORT_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material.
         */
        cryptoKeyVersion?: string | null;
        /**
         * Required. The name of the ImportJob that was used to wrap this key material.
         */
        importJob?: string | null;
        /**
         * Optional. This field has the same meaning as wrapped_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified.
         */
        rsaAesWrappedKey?: string | null;
        /**
         * Optional. The wrapped key material to import. Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208). When wrapping with import methods (RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256 or RSA_OAEP_3072_SHA256_AES_256 or RSA_OAEP_4096_SHA256_AES_256), this field must contain the concatenation of: 1. An ephemeral AES-256 wrapping key wrapped with the public_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label. 2. The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649). This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP. When wrapping with import methods (RSA_OAEP_3072_SHA256 or RSA_OAEP_4096_SHA256), this field must contain the formatted key to be imported, wrapped with the public_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label.
         */
        wrappedKey?: string | null;
    }
    /**
     * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
     */
    export interface Schema$ImportJob {
        /**
         * Output only. Statement that was generated and signed by the key creator (for example, an HSM) at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only present if the chosen ImportMethod is one with a protection level of HSM.
         */
        attestation?: Schema$KeyOperationAttestation;
        /**
         * Output only. The time at which this ImportJob was created.
         */
        createTime?: string | null;
        /**
         * Output only. The time this ImportJob expired. Only present if state is EXPIRED.
         */
        expireEventTime?: string | null;
        /**
         * Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material.
         */
        expireTime?: string | null;
        /**
         * Output only. The time this ImportJob's key material was generated.
         */
        generateTime?: string | null;
        /**
         * Required. Immutable. The wrapping method to be used for incoming key material.
         */
        importMethod?: string | null;
        /**
         * Output only. The resource name for this ImportJob in the format `projects/x/locations/x/keyRings/x/importJobs/x`.
         */
        name?: string | null;
        /**
         * Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into.
         */
        protectionLevel?: string | null;
        /**
         * Output only. The public key with which to wrap key material prior to import. Only returned if state is ACTIVE.
         */
        publicKey?: Schema$WrappingPublicKey;
        /**
         * Output only. The current state of the ImportJob, indicating if it can be used.
         */
        state?: string | null;
    }
    /**
     * Resource-oriented representation of a request to Cloud KMS Autokey and the resulting provisioning of a CryptoKey.
     */
    export interface Schema$KeyHandle {
        /**
         * Output only. Name of a CryptoKey that has been provisioned for Customer Managed Encryption Key (CMEK) use in the KeyHandle project and location for the requested resource type. The CryptoKey project will reflect the value configured in the AutokeyConfig on the resource project's ancestor folder at the time of the KeyHandle creation. If more than one ancestor folder has a configured AutokeyConfig, the nearest of these configurations is used.
         */
        kmsKey?: string | null;
        /**
         * Identifier. Name of the KeyHandle resource, e.g. `projects/{PROJECT_ID\}/locations/{LOCATION\}/keyHandles/{KEY_HANDLE_ID\}`.
         */
        name?: string | null;
        /**
         * Required. Indicates the resource type that the resulting CryptoKey is meant to protect, e.g. `{SERVICE\}.googleapis.com/{TYPE\}`. See documentation for supported resource types.
         */
        resourceTypeSelector?: string | null;
    }
    /**
     * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
     */
    export interface Schema$KeyOperationAttestation {
        /**
         * Output only. The certificate chains needed to validate the attestation
         */
        certChains?: Schema$CertificateChains;
        /**
         * Output only. The attestation data provided by the HSM when the key operation was performed.
         */
        content?: string | null;
        /**
         * Output only. The format of the attestation data.
         */
        format?: string | null;
    }
    /**
     * A KeyRing is a toplevel logical grouping of CryptoKeys.
     */
    export interface Schema$KeyRing {
        /**
         * Output only. The time at which this KeyRing was created.
         */
        createTime?: string | null;
        /**
         * Output only. The resource name for the KeyRing in the format `projects/x/locations/x/keyRings/x`.
         */
        name?: string | null;
    }
    /**
     * Response message for KeyManagementService.ListCryptoKeys.
     */
    export interface Schema$ListCryptoKeysResponse {
        /**
         * The list of CryptoKeys.
         */
        cryptoKeys?: Schema$CryptoKey[];
        /**
         * A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * The total number of CryptoKeys that matched the query.
         */
        totalSize?: number | null;
    }
    /**
     * Response message for KeyManagementService.ListCryptoKeyVersions.
     */
    export interface Schema$ListCryptoKeyVersionsResponse {
        /**
         * The list of CryptoKeyVersions.
         */
        cryptoKeyVersions?: Schema$CryptoKeyVersion[];
        /**
         * A token to retrieve next page of results. Pass this value in ListCryptoKeyVersionsRequest.page_token to retrieve the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * The total number of CryptoKeyVersions that matched the query.
         */
        totalSize?: number | null;
    }
    /**
     * Response message for EkmService.ListEkmConnections.
     */
    export interface Schema$ListEkmConnectionsResponse {
        /**
         * The list of EkmConnections.
         */
        ekmConnections?: Schema$EkmConnection[];
        /**
         * A token to retrieve next page of results. Pass this value in ListEkmConnectionsRequest.page_token to retrieve the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * The total number of EkmConnections that matched the query.
         */
        totalSize?: number | null;
    }
    /**
     * Response message for KeyManagementService.ListImportJobs.
     */
    export interface Schema$ListImportJobsResponse {
        /**
         * The list of ImportJobs.
         */
        importJobs?: Schema$ImportJob[];
        /**
         * A token to retrieve next page of results. Pass this value in ListImportJobsRequest.page_token to retrieve the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * The total number of ImportJobs that matched the query.
         */
        totalSize?: number | null;
    }
    /**
     * Response message for Autokey.ListKeyHandles.
     */
    export interface Schema$ListKeyHandlesResponse {
        /**
         * Resulting KeyHandles.
         */
        keyHandles?: Schema$KeyHandle[];
    }
    /**
     * Response message for KeyManagementService.ListKeyRings.
     */
    export interface Schema$ListKeyRingsResponse {
        /**
         * The list of KeyRings.
         */
        keyRings?: Schema$KeyRing[];
        /**
         * A token to retrieve next page of results. Pass this value in ListKeyRingsRequest.page_token to retrieve the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * The total number of KeyRings that matched the query.
         */
        totalSize?: number | null;
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
    /**
     * Cloud KMS metadata for the given google.cloud.location.Location.
     */
    export interface Schema$LocationMetadata {
        /**
         * Indicates whether CryptoKeys with protection_level EXTERNAL can be created in this location.
         */
        ekmAvailable?: boolean | null;
        /**
         * Indicates whether CryptoKeys with protection_level HSM can be created in this location.
         */
        hsmAvailable?: boolean | null;
    }
    /**
     * Request message for KeyManagementService.MacSign.
     */
    export interface Schema$MacSignRequest {
        /**
         * Required. The data to sign. The MAC tag is computed over this data field based on the specific algorithm.
         */
        data?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the MacSignRequest.data. If specified, KeyManagementService will verify the integrity of the received MacSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacSignRequest.data) is equal to MacSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        dataCrc32c?: string | null;
    }
    /**
     * Response message for KeyManagementService.MacSign.
     */
    export interface Schema$MacSignResponse {
        /**
         * The created signature.
         */
        mac?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned MacSignResponse.mac. An integrity check of MacSignResponse.mac can be performed by computing the CRC32C checksum of MacSignResponse.mac and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        macCrc32c?: string | null;
        /**
         * The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.
         */
        name?: string | null;
        /**
         * The ProtectionLevel of the CryptoKeyVersion used for signing.
         */
        protectionLevel?: string | null;
        /**
         * Integrity verification field. A flag indicating whether MacSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedDataCrc32c?: boolean | null;
    }
    /**
     * Request message for KeyManagementService.MacVerify.
     */
    export interface Schema$MacVerifyRequest {
        /**
         * Required. The data used previously as a MacSignRequest.data to generate the MAC tag.
         */
        data?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the MacVerifyRequest.data. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.data) is equal to MacVerifyRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        dataCrc32c?: string | null;
        /**
         * Required. The signature to verify.
         */
        mac?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the MacVerifyRequest.mac. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.mac using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.tag) is equal to MacVerifyRequest.mac_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        macCrc32c?: string | null;
    }
    /**
     * Response message for KeyManagementService.MacVerify.
     */
    export interface Schema$MacVerifyResponse {
        /**
         * The resource name of the CryptoKeyVersion used for verification. Check this field to verify that the intended resource was used for verification.
         */
        name?: string | null;
        /**
         * The ProtectionLevel of the CryptoKeyVersion used for verification.
         */
        protectionLevel?: string | null;
        /**
         * This field indicates whether or not the verification operation for MacVerifyRequest.mac over MacVerifyRequest.data was successful.
         */
        success?: boolean | null;
        /**
         * Integrity verification field. A flag indicating whether MacVerifyRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedDataCrc32c?: boolean | null;
        /**
         * Integrity verification field. A flag indicating whether MacVerifyRequest.mac_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.mac_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.mac_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedMacCrc32c?: boolean | null;
        /**
         * Integrity verification field. This value is used for the integrity verification of [MacVerifyResponse.success]. If the value of this field contradicts the value of [MacVerifyResponse.success], discard the response and perform a limited number of retries.
         */
        verifiedSuccessIntegrity?: boolean | null;
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
     * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
     */
    export interface Schema$Policy {
        /**
         * Specifies cloud audit logging configuration for this policy.
         */
        auditConfigs?: Schema$AuditConfig[];
        /**
         * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
         */
        bindings?: Schema$Binding[];
        /**
         * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
         */
        etag?: string | null;
        /**
         * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        version?: number | null;
    }
    /**
     * The public keys for a given CryptoKeyVersion. Obtained via GetPublicKey.
     */
    export interface Schema$PublicKey {
        /**
         * The Algorithm associated with this key.
         */
        algorithm?: string | null;
        /**
         * The name of the CryptoKeyVersion public key. Provided here for verification. NOTE: This field is in Beta.
         */
        name?: string | null;
        /**
         * The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13).
         */
        pem?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned PublicKey.pem. An integrity check of PublicKey.pem can be performed by computing the CRC32C checksum of PublicKey.pem and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. NOTE: This field is in Beta.
         */
        pemCrc32c?: string | null;
        /**
         * The ProtectionLevel of the CryptoKeyVersion public key.
         */
        protectionLevel?: string | null;
    }
    /**
     * Request message for KeyManagementService.RawDecrypt.
     */
    export interface Schema$RawDecryptRequest {
        /**
         * Optional. Optional data that must match the data originally supplied in RawEncryptRequest.additional_authenticated_data.
         */
        additionalAuthenticatedData?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the RawDecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(additional_authenticated_data) is equal to additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        additionalAuthenticatedDataCrc32c?: string | null;
        /**
         * Required. The encrypted data originally returned in RawEncryptResponse.ciphertext.
         */
        ciphertext?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the RawDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(ciphertext) is equal to ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        ciphertextCrc32c?: string | null;
        /**
         * Required. The initialization vector (IV) used during encryption, which must match the data originally provided in RawEncryptResponse.initialization_vector.
         */
        initializationVector?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the RawDecryptRequest.initialization_vector. If specified, KeyManagementService will verify the integrity of the received initialization_vector using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        initializationVectorCrc32c?: string | null;
        /**
         * The length of the authentication tag that is appended to the end of the ciphertext. If unspecified (0), the default value for the key's algorithm will be used (for AES-GCM, the default value is 16).
         */
        tagLength?: number | null;
    }
    /**
     * Response message for KeyManagementService.RawDecrypt.
     */
    export interface Schema$RawDecryptResponse {
        /**
         * The decrypted data.
         */
        plaintext?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned RawDecryptResponse.plaintext. An integrity check of plaintext can be performed by computing the CRC32C checksum of plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        plaintextCrc32c?: string | null;
        /**
         * The ProtectionLevel of the CryptoKeyVersion used in decryption.
         */
        protectionLevel?: string | null;
        /**
         * Integrity verification field. A flag indicating whether RawDecryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of additional_authenticated_data. A false value of this field indicates either that // RawDecryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawDecryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedAdditionalAuthenticatedDataCrc32c?: boolean | null;
        /**
         * Integrity verification field. A flag indicating whether RawDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that RawDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedCiphertextCrc32c?: boolean | null;
        /**
         * Integrity verification field. A flag indicating whether RawDecryptRequest.initialization_vector_crc32c was received by KeyManagementService and used for the integrity verification of initialization_vector. A false value of this field indicates either that RawDecryptRequest.initialization_vector_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawDecryptRequest.initialization_vector_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedInitializationVectorCrc32c?: boolean | null;
    }
    /**
     * Request message for KeyManagementService.RawEncrypt.
     */
    export interface Schema$RawEncryptRequest {
        /**
         * Optional. Optional data that, if specified, must also be provided during decryption through RawDecryptRequest.additional_authenticated_data. This field may only be used in conjunction with an algorithm that accepts additional authenticated data (for example, AES-GCM). The maximum size depends on the key version's protection_level. For SOFTWARE keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
         */
        additionalAuthenticatedData?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the RawEncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(additional_authenticated_data) is equal to additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        additionalAuthenticatedDataCrc32c?: string | null;
        /**
         * Optional. A customer-supplied initialization vector that will be used for encryption. If it is not provided for AES-CBC and AES-CTR, one will be generated. It will be returned in RawEncryptResponse.initialization_vector.
         */
        initializationVector?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the RawEncryptRequest.initialization_vector. If specified, KeyManagementService will verify the integrity of the received initialization_vector using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        initializationVectorCrc32c?: string | null;
        /**
         * Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version's protection_level. For SOFTWARE keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
         */
        plaintext?: string | null;
        /**
         * Optional. An optional CRC32C checksum of the RawEncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(plaintext) is equal to plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        plaintextCrc32c?: string | null;
    }
    /**
     * Response message for KeyManagementService.RawEncrypt.
     */
    export interface Schema$RawEncryptResponse {
        /**
         * The encrypted data. In the case of AES-GCM, the authentication tag is the tag_length bytes at the end of this field.
         */
        ciphertext?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned RawEncryptResponse.ciphertext. An integrity check of ciphertext can be performed by computing the CRC32C checksum of ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        ciphertextCrc32c?: string | null;
        /**
         * The initialization vector (IV) generated by the service during encryption. This value must be stored and provided in RawDecryptRequest.initialization_vector at decryption time.
         */
        initializationVector?: string | null;
        /**
         * Integrity verification field. A CRC32C checksum of the returned RawEncryptResponse.initialization_vector. An integrity check of initialization_vector can be performed by computing the CRC32C checksum of initialization_vector and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
         */
        initializationVectorCrc32c?: string | null;
        /**
         * The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption.
         */
        name?: string | null;
        /**
         * The ProtectionLevel of the CryptoKeyVersion used in encryption.
         */
        protectionLevel?: string | null;
        /**
         * The length of the authentication tag that is appended to the end of the ciphertext.
         */
        tagLength?: number | null;
        /**
         * Integrity verification field. A flag indicating whether RawEncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of additional_authenticated_data. A false value of this field indicates either that // RawEncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawEncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedAdditionalAuthenticatedDataCrc32c?: boolean | null;
        /**
         * Integrity verification field. A flag indicating whether RawEncryptRequest.initialization_vector_crc32c was received by KeyManagementService and used for the integrity verification of initialization_vector. A false value of this field indicates either that RawEncryptRequest.initialization_vector_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawEncryptRequest.initialization_vector_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedInitializationVectorCrc32c?: boolean | null;
        /**
         * Integrity verification field. A flag indicating whether RawEncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that RawEncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawEncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries.
         */
        verifiedPlaintextCrc32c?: boolean | null;
    }
    /**
     * Request message for KeyManagementService.RestoreCryptoKeyVersion.
     */
    export interface Schema$RestoreCryptoKeyVersionRequest {
    }
    /**
     * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
     */
    export interface Schema$ServiceResolver {
        /**
         * Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.
         */
        endpointFilter?: string | null;
        /**
         * Required. The hostname of the EKM replica used at TLS and HTTP layers.
         */
        hostname?: string | null;
        /**
         * Required. A list of leaf server certificates used to authenticate HTTPS connections to the EKM replica. Currently, a maximum of 10 Certificate is supported.
         */
        serverCertificates?: Schema$Certificate[];
        /**
         * Required. The resource name of the Service Directory service pointing to an EKM replica, in the format `projects/x/locations/x/namespaces/x/services/x`.
         */
        serviceDirectoryService?: string | null;
    }
    /**
     * Request message for `SetIamPolicy` method.
     */
    export interface Schema$SetIamPolicyRequest {
        /**
         * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
         */
        policy?: Schema$Policy;
        /**
         * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
         */
        updateMask?: string | null;
    }
    /**
     * Response message for ShowEffectiveAutokeyConfig.
     */
    export interface Schema$ShowEffectiveAutokeyConfigResponse {
        /**
         * Name of the key project configured in the resource project's folder ancestry.
         */
        keyProject?: string | null;
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
     * Request message for `TestIamPermissions` method.
     */
    export interface Schema$TestIamPermissionsRequest {
        /**
         * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
         */
        permissions?: string[] | null;
    }
    /**
     * Response message for `TestIamPermissions` method.
     */
    export interface Schema$TestIamPermissionsResponse {
        /**
         * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
         */
        permissions?: string[] | null;
    }
    /**
     * Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
     */
    export interface Schema$UpdateCryptoKeyPrimaryVersionRequest {
        /**
         * Required. The id of the child CryptoKeyVersion to use as primary.
         */
        cryptoKeyVersionId?: string | null;
    }
    /**
     * Response message for EkmService.VerifyConnectivity.
     */
    export interface Schema$VerifyConnectivityResponse {
    }
    /**
     * The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.
     */
    export interface Schema$WrappingPublicKey {
        /**
         * The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13).
         */
        pem?: string | null;
    }
    export class Resource$Folders {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Returns the AutokeyConfig for a folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getAutokeyConfig(params: Params$Resource$Folders$Getautokeyconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getAutokeyConfig(params?: Params$Resource$Folders$Getautokeyconfig, options?: MethodOptions): GaxiosPromise<Schema$AutokeyConfig>;
        getAutokeyConfig(params: Params$Resource$Folders$Getautokeyconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getAutokeyConfig(params: Params$Resource$Folders$Getautokeyconfig, options: MethodOptions | BodyResponseCallback<Schema$AutokeyConfig>, callback: BodyResponseCallback<Schema$AutokeyConfig>): void;
        getAutokeyConfig(params: Params$Resource$Folders$Getautokeyconfig, callback: BodyResponseCallback<Schema$AutokeyConfig>): void;
        getAutokeyConfig(callback: BodyResponseCallback<Schema$AutokeyConfig>): void;
        /**
         * Updates the AutokeyConfig for a folder. The caller must have both `cloudkms.autokeyConfigs.update` permission on the parent folder and `cloudkms.cryptoKeys.setIamPolicy` permission on the provided key project. A KeyHandle creation in the folder's descendant projects will use this configuration to determine where to create the resulting CryptoKey.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        updateAutokeyConfig(params: Params$Resource$Folders$Updateautokeyconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        updateAutokeyConfig(params?: Params$Resource$Folders$Updateautokeyconfig, options?: MethodOptions): GaxiosPromise<Schema$AutokeyConfig>;
        updateAutokeyConfig(params: Params$Resource$Folders$Updateautokeyconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        updateAutokeyConfig(params: Params$Resource$Folders$Updateautokeyconfig, options: MethodOptions | BodyResponseCallback<Schema$AutokeyConfig>, callback: BodyResponseCallback<Schema$AutokeyConfig>): void;
        updateAutokeyConfig(params: Params$Resource$Folders$Updateautokeyconfig, callback: BodyResponseCallback<Schema$AutokeyConfig>): void;
        updateAutokeyConfig(callback: BodyResponseCallback<Schema$AutokeyConfig>): void;
    }
    export interface Params$Resource$Folders$Getautokeyconfig extends StandardParameters {
        /**
         * Required. Name of the AutokeyConfig resource, e.g. `folders/{FOLDER_NUMBER\}/autokeyConfig`.
         */
        name?: string;
    }
    export interface Params$Resource$Folders$Updateautokeyconfig extends StandardParameters {
        /**
         * Identifier. Name of the AutokeyConfig resource, e.g. `folders/{FOLDER_NUMBER\}/autokeyConfig`.
         */
        name?: string;
        /**
         * Required. Masks which fields of the AutokeyConfig to update, e.g. `keyProject`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AutokeyConfig;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        constructor(context: APIRequestContext);
        /**
         * Returns the effective Cloud KMS Autokey configuration for a given project.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        showEffectiveAutokeyConfig(params: Params$Resource$Projects$Showeffectiveautokeyconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        showEffectiveAutokeyConfig(params?: Params$Resource$Projects$Showeffectiveautokeyconfig, options?: MethodOptions): GaxiosPromise<Schema$ShowEffectiveAutokeyConfigResponse>;
        showEffectiveAutokeyConfig(params: Params$Resource$Projects$Showeffectiveautokeyconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        showEffectiveAutokeyConfig(params: Params$Resource$Projects$Showeffectiveautokeyconfig, options: MethodOptions | BodyResponseCallback<Schema$ShowEffectiveAutokeyConfigResponse>, callback: BodyResponseCallback<Schema$ShowEffectiveAutokeyConfigResponse>): void;
        showEffectiveAutokeyConfig(params: Params$Resource$Projects$Showeffectiveautokeyconfig, callback: BodyResponseCallback<Schema$ShowEffectiveAutokeyConfigResponse>): void;
        showEffectiveAutokeyConfig(callback: BodyResponseCallback<Schema$ShowEffectiveAutokeyConfigResponse>): void;
    }
    export interface Params$Resource$Projects$Showeffectiveautokeyconfig extends StandardParameters {
        /**
         * Required. Name of the resource project to the show effective Cloud KMS Autokey configuration for. This may be helpful for interrogating the effect of nested folder configurations on a given resource project.
         */
        parent?: string;
    }
    export class Resource$Projects$Locations {
        context: APIRequestContext;
        ekmConfig: Resource$Projects$Locations$Ekmconfig;
        ekmConnections: Resource$Projects$Locations$Ekmconnections;
        keyHandles: Resource$Projects$Locations$Keyhandles;
        keyRings: Resource$Projects$Locations$Keyrings;
        operations: Resource$Projects$Locations$Operations;
        constructor(context: APIRequestContext);
        /**
         * Generate random bytes using the Cloud KMS randomness source in the provided location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        generateRandomBytes(params: Params$Resource$Projects$Locations$Generaterandombytes, options: StreamMethodOptions): GaxiosPromise<Readable>;
        generateRandomBytes(params?: Params$Resource$Projects$Locations$Generaterandombytes, options?: MethodOptions): GaxiosPromise<Schema$GenerateRandomBytesResponse>;
        generateRandomBytes(params: Params$Resource$Projects$Locations$Generaterandombytes, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        generateRandomBytes(params: Params$Resource$Projects$Locations$Generaterandombytes, options: MethodOptions | BodyResponseCallback<Schema$GenerateRandomBytesResponse>, callback: BodyResponseCallback<Schema$GenerateRandomBytesResponse>): void;
        generateRandomBytes(params: Params$Resource$Projects$Locations$Generaterandombytes, callback: BodyResponseCallback<Schema$GenerateRandomBytesResponse>): void;
        generateRandomBytes(callback: BodyResponseCallback<Schema$GenerateRandomBytesResponse>): void;
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
         * Returns the EkmConfig singleton resource for a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getEkmConfig(params: Params$Resource$Projects$Locations$Getekmconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getEkmConfig(params?: Params$Resource$Projects$Locations$Getekmconfig, options?: MethodOptions): GaxiosPromise<Schema$EkmConfig>;
        getEkmConfig(params: Params$Resource$Projects$Locations$Getekmconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getEkmConfig(params: Params$Resource$Projects$Locations$Getekmconfig, options: MethodOptions | BodyResponseCallback<Schema$EkmConfig>, callback: BodyResponseCallback<Schema$EkmConfig>): void;
        getEkmConfig(params: Params$Resource$Projects$Locations$Getekmconfig, callback: BodyResponseCallback<Schema$EkmConfig>): void;
        getEkmConfig(callback: BodyResponseCallback<Schema$EkmConfig>): void;
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
        /**
         * Updates the EkmConfig singleton resource for a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        updateEkmConfig(params: Params$Resource$Projects$Locations$Updateekmconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        updateEkmConfig(params?: Params$Resource$Projects$Locations$Updateekmconfig, options?: MethodOptions): GaxiosPromise<Schema$EkmConfig>;
        updateEkmConfig(params: Params$Resource$Projects$Locations$Updateekmconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        updateEkmConfig(params: Params$Resource$Projects$Locations$Updateekmconfig, options: MethodOptions | BodyResponseCallback<Schema$EkmConfig>, callback: BodyResponseCallback<Schema$EkmConfig>): void;
        updateEkmConfig(params: Params$Resource$Projects$Locations$Updateekmconfig, callback: BodyResponseCallback<Schema$EkmConfig>): void;
        updateEkmConfig(callback: BodyResponseCallback<Schema$EkmConfig>): void;
    }
    export interface Params$Resource$Projects$Locations$Generaterandombytes extends StandardParameters {
        /**
         * The project-specific location in which to generate random bytes. For example, "projects/my-project/locations/us-central1".
         */
        location?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GenerateRandomBytesRequest;
    }
    export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
        /**
         * Resource name for the location.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Getekmconfig extends StandardParameters {
        /**
         * Required. The name of the EkmConfig to get.
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
    export interface Params$Resource$Projects$Locations$Updateekmconfig extends StandardParameters {
        /**
         * Output only. The resource name for the EkmConfig in the format `projects/x/locations/x/ekmConfig`.
         */
        name?: string;
        /**
         * Required. List of fields to be updated in this request.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EkmConfig;
    }
    export class Resource$Projects$Locations$Ekmconfig {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Ekmconfig$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Ekmconfig$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Ekmconfig$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Ekmconfig$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Ekmconfig$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Ekmconfig$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Ekmconfig$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Ekmconfig$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Ekmconfig$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Ekmconfig$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Ekmconfig$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Ekmconfig$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Ekmconfig$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Ekmconfig$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Ekmconfig$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Ekmconfig$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Ekmconfig$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Ekmconfig$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Ekmconnections {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new EkmConnection in a given Project and Location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Ekmconnections$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Ekmconnections$Create, options?: MethodOptions): GaxiosPromise<Schema$EkmConnection>;
        create(params: Params$Resource$Projects$Locations$Ekmconnections$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Ekmconnections$Create, options: MethodOptions | BodyResponseCallback<Schema$EkmConnection>, callback: BodyResponseCallback<Schema$EkmConnection>): void;
        create(params: Params$Resource$Projects$Locations$Ekmconnections$Create, callback: BodyResponseCallback<Schema$EkmConnection>): void;
        create(callback: BodyResponseCallback<Schema$EkmConnection>): void;
        /**
         * Returns metadata for a given EkmConnection.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Ekmconnections$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Ekmconnections$Get, options?: MethodOptions): GaxiosPromise<Schema$EkmConnection>;
        get(params: Params$Resource$Projects$Locations$Ekmconnections$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Ekmconnections$Get, options: MethodOptions | BodyResponseCallback<Schema$EkmConnection>, callback: BodyResponseCallback<Schema$EkmConnection>): void;
        get(params: Params$Resource$Projects$Locations$Ekmconnections$Get, callback: BodyResponseCallback<Schema$EkmConnection>): void;
        get(callback: BodyResponseCallback<Schema$EkmConnection>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Ekmconnections$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Ekmconnections$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Ekmconnections$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Ekmconnections$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Ekmconnections$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Lists EkmConnections.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Ekmconnections$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Ekmconnections$List, options?: MethodOptions): GaxiosPromise<Schema$ListEkmConnectionsResponse>;
        list(params: Params$Resource$Projects$Locations$Ekmconnections$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Ekmconnections$List, options: MethodOptions | BodyResponseCallback<Schema$ListEkmConnectionsResponse>, callback: BodyResponseCallback<Schema$ListEkmConnectionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Ekmconnections$List, callback: BodyResponseCallback<Schema$ListEkmConnectionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListEkmConnectionsResponse>): void;
        /**
         * Updates an EkmConnection's metadata.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Ekmconnections$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Ekmconnections$Patch, options?: MethodOptions): GaxiosPromise<Schema$EkmConnection>;
        patch(params: Params$Resource$Projects$Locations$Ekmconnections$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Ekmconnections$Patch, options: MethodOptions | BodyResponseCallback<Schema$EkmConnection>, callback: BodyResponseCallback<Schema$EkmConnection>): void;
        patch(params: Params$Resource$Projects$Locations$Ekmconnections$Patch, callback: BodyResponseCallback<Schema$EkmConnection>): void;
        patch(callback: BodyResponseCallback<Schema$EkmConnection>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Ekmconnections$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Ekmconnections$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Ekmconnections$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Ekmconnections$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Ekmconnections$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Ekmconnections$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Ekmconnections$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Ekmconnections$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Ekmconnections$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Ekmconnections$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        /**
         * Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        verifyConnectivity(params: Params$Resource$Projects$Locations$Ekmconnections$Verifyconnectivity, options: StreamMethodOptions): GaxiosPromise<Readable>;
        verifyConnectivity(params?: Params$Resource$Projects$Locations$Ekmconnections$Verifyconnectivity, options?: MethodOptions): GaxiosPromise<Schema$VerifyConnectivityResponse>;
        verifyConnectivity(params: Params$Resource$Projects$Locations$Ekmconnections$Verifyconnectivity, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        verifyConnectivity(params: Params$Resource$Projects$Locations$Ekmconnections$Verifyconnectivity, options: MethodOptions | BodyResponseCallback<Schema$VerifyConnectivityResponse>, callback: BodyResponseCallback<Schema$VerifyConnectivityResponse>): void;
        verifyConnectivity(params: Params$Resource$Projects$Locations$Ekmconnections$Verifyconnectivity, callback: BodyResponseCallback<Schema$VerifyConnectivityResponse>): void;
        verifyConnectivity(callback: BodyResponseCallback<Schema$VerifyConnectivityResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Ekmconnections$Create extends StandardParameters {
        /**
         * Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63\}`.
         */
        ekmConnectionId?: string;
        /**
         * Required. The resource name of the location associated with the EkmConnection, in the format `projects/x/locations/x`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EkmConnection;
    }
    export interface Params$Resource$Projects$Locations$Ekmconnections$Get extends StandardParameters {
        /**
         * Required. The name of the EkmConnection to get.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Ekmconnections$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Ekmconnections$List extends StandardParameters {
        /**
         * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        filter?: string;
        /**
         * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        orderBy?: string;
        /**
         * Optional. Optional limit on the number of EkmConnections to include in the response. Further EkmConnections can subsequently be obtained by including the ListEkmConnectionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * Optional. Optional pagination token, returned earlier via ListEkmConnectionsResponse.next_page_token.
         */
        pageToken?: string;
        /**
         * Required. The resource name of the location associated with the EkmConnections to list, in the format `projects/x/locations/x`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Ekmconnections$Patch extends StandardParameters {
        /**
         * Output only. The resource name for the EkmConnection in the format `projects/x/locations/x/ekmConnections/x`.
         */
        name?: string;
        /**
         * Required. List of fields to be updated in this request.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EkmConnection;
    }
    export interface Params$Resource$Projects$Locations$Ekmconnections$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Ekmconnections$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export interface Params$Resource$Projects$Locations$Ekmconnections$Verifyconnectivity extends StandardParameters {
        /**
         * Required. The name of the EkmConnection to verify.
         */
        name?: string;
    }
    export class Resource$Projects$Locations$Keyhandles {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new KeyHandle, triggering the provisioning of a new CryptoKey for CMEK use with the given resource type in the configured key project and the same location. GetOperation should be used to resolve the resulting long-running operation and get the resulting KeyHandle and CryptoKey.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Keyhandles$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Keyhandles$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Keyhandles$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Keyhandles$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Keyhandles$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Returns the KeyHandle.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Keyhandles$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Keyhandles$Get, options?: MethodOptions): GaxiosPromise<Schema$KeyHandle>;
        get(params: Params$Resource$Projects$Locations$Keyhandles$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Keyhandles$Get, options: MethodOptions | BodyResponseCallback<Schema$KeyHandle>, callback: BodyResponseCallback<Schema$KeyHandle>): void;
        get(params: Params$Resource$Projects$Locations$Keyhandles$Get, callback: BodyResponseCallback<Schema$KeyHandle>): void;
        get(callback: BodyResponseCallback<Schema$KeyHandle>): void;
        /**
         * Lists KeyHandles.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Keyhandles$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Keyhandles$List, options?: MethodOptions): GaxiosPromise<Schema$ListKeyHandlesResponse>;
        list(params: Params$Resource$Projects$Locations$Keyhandles$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Keyhandles$List, options: MethodOptions | BodyResponseCallback<Schema$ListKeyHandlesResponse>, callback: BodyResponseCallback<Schema$ListKeyHandlesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Keyhandles$List, callback: BodyResponseCallback<Schema$ListKeyHandlesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListKeyHandlesResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Keyhandles$Create extends StandardParameters {
        /**
         * Optional. Id of the KeyHandle. Must be unique to the resource project and location. If not provided by the caller, a new UUID is used.
         */
        keyHandleId?: string;
        /**
         * Required. Name of the resource project and location to create the KeyHandle in, e.g. `projects/{PROJECT_ID\}/locations/{LOCATION\}`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$KeyHandle;
    }
    export interface Params$Resource$Projects$Locations$Keyhandles$Get extends StandardParameters {
        /**
         * Required. Name of the KeyHandle resource, e.g. `projects/{PROJECT_ID\}/locations/{LOCATION\}/keyHandles/{KEY_HANDLE_ID\}`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyhandles$List extends StandardParameters {
        /**
         * Optional. Filter to apply when listing KeyHandles, e.g. `resource_type_selector="{SERVICE\}.googleapis.com/{TYPE\}"`.
         */
        filter?: string;
        /**
         * Required. Name of the resource project and location from which to list KeyHandles, e.g. `projects/{PROJECT_ID\}/locations/{LOCATION\}`.
         */
        parent?: string;
    }
    export class Resource$Projects$Locations$Keyrings {
        context: APIRequestContext;
        cryptoKeys: Resource$Projects$Locations$Keyrings$Cryptokeys;
        importJobs: Resource$Projects$Locations$Keyrings$Importjobs;
        constructor(context: APIRequestContext);
        /**
         * Create a new KeyRing in a given Project and Location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Keyrings$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Keyrings$Create, options?: MethodOptions): GaxiosPromise<Schema$KeyRing>;
        create(params: Params$Resource$Projects$Locations$Keyrings$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Keyrings$Create, options: MethodOptions | BodyResponseCallback<Schema$KeyRing>, callback: BodyResponseCallback<Schema$KeyRing>): void;
        create(params: Params$Resource$Projects$Locations$Keyrings$Create, callback: BodyResponseCallback<Schema$KeyRing>): void;
        create(callback: BodyResponseCallback<Schema$KeyRing>): void;
        /**
         * Returns metadata for a given KeyRing.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Keyrings$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Keyrings$Get, options?: MethodOptions): GaxiosPromise<Schema$KeyRing>;
        get(params: Params$Resource$Projects$Locations$Keyrings$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Keyrings$Get, options: MethodOptions | BodyResponseCallback<Schema$KeyRing>, callback: BodyResponseCallback<Schema$KeyRing>): void;
        get(params: Params$Resource$Projects$Locations$Keyrings$Get, callback: BodyResponseCallback<Schema$KeyRing>): void;
        get(callback: BodyResponseCallback<Schema$KeyRing>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Keyrings$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Lists KeyRings.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Keyrings$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Keyrings$List, options?: MethodOptions): GaxiosPromise<Schema$ListKeyRingsResponse>;
        list(params: Params$Resource$Projects$Locations$Keyrings$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Keyrings$List, options: MethodOptions | BodyResponseCallback<Schema$ListKeyRingsResponse>, callback: BodyResponseCallback<Schema$ListKeyRingsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Keyrings$List, callback: BodyResponseCallback<Schema$ListKeyRingsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListKeyRingsResponse>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Keyrings$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Keyrings$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Create extends StandardParameters {
        /**
         * Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63\}`
         */
        keyRingId?: string;
        /**
         * Required. The resource name of the location associated with the KeyRings, in the format `projects/x/locations/x`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$KeyRing;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Get extends StandardParameters {
        /**
         * Required. The name of the KeyRing to get.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$List extends StandardParameters {
        /**
         * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        filter?: string;
        /**
         * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        orderBy?: string;
        /**
         * Optional. Optional limit on the number of KeyRings to include in the response. Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * Optional. Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token.
         */
        pageToken?: string;
        /**
         * Required. The resource name of the location associated with the KeyRings, in the format `projects/x/locations/x`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Keyrings$Cryptokeys {
        context: APIRequestContext;
        cryptoKeyVersions: Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions;
        constructor(context: APIRequestContext);
        /**
         * Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create, options?: MethodOptions): GaxiosPromise<Schema$CryptoKey>;
        create(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create, options: MethodOptions | BodyResponseCallback<Schema$CryptoKey>, callback: BodyResponseCallback<Schema$CryptoKey>): void;
        create(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create, callback: BodyResponseCallback<Schema$CryptoKey>): void;
        create(callback: BodyResponseCallback<Schema$CryptoKey>): void;
        /**
         * Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        decrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt, options: StreamMethodOptions): GaxiosPromise<Readable>;
        decrypt(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt, options?: MethodOptions): GaxiosPromise<Schema$DecryptResponse>;
        decrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        decrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt, options: MethodOptions | BodyResponseCallback<Schema$DecryptResponse>, callback: BodyResponseCallback<Schema$DecryptResponse>): void;
        decrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt, callback: BodyResponseCallback<Schema$DecryptResponse>): void;
        decrypt(callback: BodyResponseCallback<Schema$DecryptResponse>): void;
        /**
         * Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        encrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt, options: StreamMethodOptions): GaxiosPromise<Readable>;
        encrypt(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt, options?: MethodOptions): GaxiosPromise<Schema$EncryptResponse>;
        encrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        encrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt, options: MethodOptions | BodyResponseCallback<Schema$EncryptResponse>, callback: BodyResponseCallback<Schema$EncryptResponse>): void;
        encrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt, callback: BodyResponseCallback<Schema$EncryptResponse>): void;
        encrypt(callback: BodyResponseCallback<Schema$EncryptResponse>): void;
        /**
         * Returns metadata for a given CryptoKey, as well as its primary CryptoKeyVersion.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get, options?: MethodOptions): GaxiosPromise<Schema$CryptoKey>;
        get(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get, options: MethodOptions | BodyResponseCallback<Schema$CryptoKey>, callback: BodyResponseCallback<Schema$CryptoKey>): void;
        get(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get, callback: BodyResponseCallback<Schema$CryptoKey>): void;
        get(callback: BodyResponseCallback<Schema$CryptoKey>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Lists CryptoKeys.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List, options?: MethodOptions): GaxiosPromise<Schema$ListCryptoKeysResponse>;
        list(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List, options: MethodOptions | BodyResponseCallback<Schema$ListCryptoKeysResponse>, callback: BodyResponseCallback<Schema$ListCryptoKeysResponse>): void;
        list(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List, callback: BodyResponseCallback<Schema$ListCryptoKeysResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListCryptoKeysResponse>): void;
        /**
         * Update a CryptoKey.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch, options?: MethodOptions): GaxiosPromise<Schema$CryptoKey>;
        patch(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch, options: MethodOptions | BodyResponseCallback<Schema$CryptoKey>, callback: BodyResponseCallback<Schema$CryptoKey>): void;
        patch(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch, callback: BodyResponseCallback<Schema$CryptoKey>): void;
        patch(callback: BodyResponseCallback<Schema$CryptoKey>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        /**
         * Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        updatePrimaryVersion(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion, options: StreamMethodOptions): GaxiosPromise<Readable>;
        updatePrimaryVersion(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion, options?: MethodOptions): GaxiosPromise<Schema$CryptoKey>;
        updatePrimaryVersion(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        updatePrimaryVersion(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion, options: MethodOptions | BodyResponseCallback<Schema$CryptoKey>, callback: BodyResponseCallback<Schema$CryptoKey>): void;
        updatePrimaryVersion(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion, callback: BodyResponseCallback<Schema$CryptoKey>): void;
        updatePrimaryVersion(callback: BodyResponseCallback<Schema$CryptoKey>): void;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create extends StandardParameters {
        /**
         * Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63\}`
         */
        cryptoKeyId?: string;
        /**
         * Required. The name of the KeyRing associated with the CryptoKeys.
         */
        parent?: string;
        /**
         * If set to true, the request will create a CryptoKey without any CryptoKeyVersions. You must manually call CreateCryptoKeyVersion or ImportCryptoKeyVersion before you can use this CryptoKey.
         */
        skipInitialVersionCreation?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CryptoKey;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DecryptRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption. If a CryptoKey is specified, the server will use its primary version.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EncryptRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get extends StandardParameters {
        /**
         * Required. The name of the CryptoKey to get.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List extends StandardParameters {
        /**
         * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        filter?: string;
        /**
         * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        orderBy?: string;
        /**
         * Optional. Optional limit on the number of CryptoKeys to include in the response. Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * Optional. Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.
         */
        pageToken?: string;
        /**
         * Required. The resource name of the KeyRing to list, in the format `projects/x/locations/x/keyRings/x`.
         */
        parent?: string;
        /**
         * The fields of the primary version to include in the response.
         */
        versionView?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch extends StandardParameters {
        /**
         * Output only. The resource name for this CryptoKey in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
         */
        name?: string;
        /**
         * Required. List of fields to be updated in this request.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CryptoKey;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKey to update.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UpdateCryptoKeyPrimaryVersionRequest;
    }
    export class Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        asymmetricDecrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt, options: StreamMethodOptions): GaxiosPromise<Readable>;
        asymmetricDecrypt(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt, options?: MethodOptions): GaxiosPromise<Schema$AsymmetricDecryptResponse>;
        asymmetricDecrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        asymmetricDecrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt, options: MethodOptions | BodyResponseCallback<Schema$AsymmetricDecryptResponse>, callback: BodyResponseCallback<Schema$AsymmetricDecryptResponse>): void;
        asymmetricDecrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt, callback: BodyResponseCallback<Schema$AsymmetricDecryptResponse>): void;
        asymmetricDecrypt(callback: BodyResponseCallback<Schema$AsymmetricDecryptResponse>): void;
        /**
         * Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        asymmetricSign(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign, options: StreamMethodOptions): GaxiosPromise<Readable>;
        asymmetricSign(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign, options?: MethodOptions): GaxiosPromise<Schema$AsymmetricSignResponse>;
        asymmetricSign(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        asymmetricSign(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign, options: MethodOptions | BodyResponseCallback<Schema$AsymmetricSignResponse>, callback: BodyResponseCallback<Schema$AsymmetricSignResponse>): void;
        asymmetricSign(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign, callback: BodyResponseCallback<Schema$AsymmetricSignResponse>): void;
        asymmetricSign(callback: BodyResponseCallback<Schema$AsymmetricSignResponse>): void;
        /**
         * Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create, options?: MethodOptions): GaxiosPromise<Schema$CryptoKeyVersion>;
        create(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create, options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        create(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        create(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        /**
         * Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        destroy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        destroy(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy, options?: MethodOptions): GaxiosPromise<Schema$CryptoKeyVersion>;
        destroy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        destroy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy, options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        destroy(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        destroy(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        /**
         * Returns metadata for a given CryptoKeyVersion.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get, options?: MethodOptions): GaxiosPromise<Schema$CryptoKeyVersion>;
        get(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get, options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        get(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        get(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        /**
         * Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getPublicKey(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getPublicKey(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey, options?: MethodOptions): GaxiosPromise<Schema$PublicKey>;
        getPublicKey(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getPublicKey(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey, options: MethodOptions | BodyResponseCallback<Schema$PublicKey>, callback: BodyResponseCallback<Schema$PublicKey>): void;
        getPublicKey(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey, callback: BodyResponseCallback<Schema$PublicKey>): void;
        getPublicKey(callback: BodyResponseCallback<Schema$PublicKey>): void;
        /**
         * Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        import(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import, options: StreamMethodOptions): GaxiosPromise<Readable>;
        import(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import, options?: MethodOptions): GaxiosPromise<Schema$CryptoKeyVersion>;
        import(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        import(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import, options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        import(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        import(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        /**
         * Lists CryptoKeyVersions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List, options?: MethodOptions): GaxiosPromise<Schema$ListCryptoKeyVersionsResponse>;
        list(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List, options: MethodOptions | BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>, callback: BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List, callback: BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>): void;
        /**
         * Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        macSign(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macsign, options: StreamMethodOptions): GaxiosPromise<Readable>;
        macSign(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macsign, options?: MethodOptions): GaxiosPromise<Schema$MacSignResponse>;
        macSign(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macsign, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        macSign(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macsign, options: MethodOptions | BodyResponseCallback<Schema$MacSignResponse>, callback: BodyResponseCallback<Schema$MacSignResponse>): void;
        macSign(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macsign, callback: BodyResponseCallback<Schema$MacSignResponse>): void;
        macSign(callback: BodyResponseCallback<Schema$MacSignResponse>): void;
        /**
         * Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        macVerify(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macverify, options: StreamMethodOptions): GaxiosPromise<Readable>;
        macVerify(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macverify, options?: MethodOptions): GaxiosPromise<Schema$MacVerifyResponse>;
        macVerify(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macverify, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        macVerify(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macverify, options: MethodOptions | BodyResponseCallback<Schema$MacVerifyResponse>, callback: BodyResponseCallback<Schema$MacVerifyResponse>): void;
        macVerify(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macverify, callback: BodyResponseCallback<Schema$MacVerifyResponse>): void;
        macVerify(callback: BodyResponseCallback<Schema$MacVerifyResponse>): void;
        /**
         * Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch, options?: MethodOptions): GaxiosPromise<Schema$CryptoKeyVersion>;
        patch(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch, options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        patch(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        patch(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        /**
         * Decrypts data that was originally encrypted using a raw cryptographic mechanism. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        rawDecrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawdecrypt, options: StreamMethodOptions): GaxiosPromise<Readable>;
        rawDecrypt(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawdecrypt, options?: MethodOptions): GaxiosPromise<Schema$RawDecryptResponse>;
        rawDecrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawdecrypt, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        rawDecrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawdecrypt, options: MethodOptions | BodyResponseCallback<Schema$RawDecryptResponse>, callback: BodyResponseCallback<Schema$RawDecryptResponse>): void;
        rawDecrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawdecrypt, callback: BodyResponseCallback<Schema$RawDecryptResponse>): void;
        rawDecrypt(callback: BodyResponseCallback<Schema$RawDecryptResponse>): void;
        /**
         * Encrypts data using portable cryptographic primitives. Most users should choose Encrypt and Decrypt rather than their raw counterparts. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        rawEncrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawencrypt, options: StreamMethodOptions): GaxiosPromise<Readable>;
        rawEncrypt(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawencrypt, options?: MethodOptions): GaxiosPromise<Schema$RawEncryptResponse>;
        rawEncrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawencrypt, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        rawEncrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawencrypt, options: MethodOptions | BodyResponseCallback<Schema$RawEncryptResponse>, callback: BodyResponseCallback<Schema$RawEncryptResponse>): void;
        rawEncrypt(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawencrypt, callback: BodyResponseCallback<Schema$RawEncryptResponse>): void;
        rawEncrypt(callback: BodyResponseCallback<Schema$RawEncryptResponse>): void;
        /**
         * Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        restore(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore, options: StreamMethodOptions): GaxiosPromise<Readable>;
        restore(params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore, options?: MethodOptions): GaxiosPromise<Schema$CryptoKeyVersion>;
        restore(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        restore(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore, options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        restore(params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore, callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
        restore(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKeyVersion to use for decryption.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AsymmetricDecryptRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKeyVersion to use for signing.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AsymmetricSignRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create extends StandardParameters {
        /**
         * Required. The name of the CryptoKey associated with the CryptoKeyVersions.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CryptoKeyVersion;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKeyVersion to destroy.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DestroyCryptoKeyVersionRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get extends StandardParameters {
        /**
         * Required. The name of the CryptoKeyVersion to get.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey extends StandardParameters {
        /**
         * Required. The name of the CryptoKeyVersion public key to get.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import extends StandardParameters {
        /**
         * Required. The name of the CryptoKey to be imported into. The create permission is only required on this key when creating a new CryptoKeyVersion.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ImportCryptoKeyVersionRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List extends StandardParameters {
        /**
         * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        filter?: string;
        /**
         * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        orderBy?: string;
        /**
         * Optional. Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * Optional. Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token.
         */
        pageToken?: string;
        /**
         * Required. The resource name of the CryptoKey to list, in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
         */
        parent?: string;
        /**
         * The fields to include in the response.
         */
        view?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macsign extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKeyVersion to use for signing.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$MacSignRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Macverify extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKeyVersion to use for verification.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$MacVerifyRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch extends StandardParameters {
        /**
         * Output only. The resource name for this CryptoKeyVersion in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x/cryptoKeyVersions/x`.
         */
        name?: string;
        /**
         * Required. List of fields to be updated in this request.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CryptoKeyVersion;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawdecrypt extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKeyVersion to use for decryption.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RawDecryptRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Rawencrypt extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKeyVersion to use for encryption.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RawEncryptRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore extends StandardParameters {
        /**
         * Required. The resource name of the CryptoKeyVersion to restore.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RestoreCryptoKeyVersionRequest;
    }
    export class Resource$Projects$Locations$Keyrings$Importjobs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Create, options?: MethodOptions): GaxiosPromise<Schema$ImportJob>;
        create(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Create, options: MethodOptions | BodyResponseCallback<Schema$ImportJob>, callback: BodyResponseCallback<Schema$ImportJob>): void;
        create(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Create, callback: BodyResponseCallback<Schema$ImportJob>): void;
        create(callback: BodyResponseCallback<Schema$ImportJob>): void;
        /**
         * Returns metadata for a given ImportJob.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Get, options?: MethodOptions): GaxiosPromise<Schema$ImportJob>;
        get(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Get, options: MethodOptions | BodyResponseCallback<Schema$ImportJob>, callback: BodyResponseCallback<Schema$ImportJob>): void;
        get(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Get, callback: BodyResponseCallback<Schema$ImportJob>): void;
        get(callback: BodyResponseCallback<Schema$ImportJob>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Lists ImportJobs.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$List, options?: MethodOptions): GaxiosPromise<Schema$ListImportJobsResponse>;
        list(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$List, options: MethodOptions | BodyResponseCallback<Schema$ListImportJobsResponse>, callback: BodyResponseCallback<Schema$ListImportJobsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$List, callback: BodyResponseCallback<Schema$ListImportJobsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListImportJobsResponse>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Create extends StandardParameters {
        /**
         * Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63\}`
         */
        importJobId?: string;
        /**
         * Required. The name of the KeyRing associated with the ImportJobs.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ImportJob;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Get extends StandardParameters {
        /**
         * Required. The name of the ImportJob to get.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$List extends StandardParameters {
        /**
         * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        filter?: string;
        /**
         * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
         */
        orderBy?: string;
        /**
         * Optional. Optional limit on the number of ImportJobs to include in the response. Further ImportJobs can subsequently be obtained by including the ListImportJobsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * Optional. Optional pagination token, returned earlier via ListImportJobsResponse.next_page_token.
         */
        pageToken?: string;
        /**
         * Required. The resource name of the KeyRing to list, in the format `projects/x/locations/x/keyRings/x`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
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
    }
    export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export {};
}
