"use strict";
// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/*! THIS FILE IS AUTO-GENERATED */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedAPIs = exports.APIS = void 0;
const abusiveexperiencereport_1 = require("./abusiveexperiencereport");
const acceleratedmobilepageurl_1 = require("./acceleratedmobilepageurl");
const accessapproval_1 = require("./accessapproval");
const accesscontextmanager_1 = require("./accesscontextmanager");
const acmedns_1 = require("./acmedns");
const addressvalidation_1 = require("./addressvalidation");
const adexchangebuyer_1 = require("./adexchangebuyer");
const adexchangebuyer2_1 = require("./adexchangebuyer2");
const adexperiencereport_1 = require("./adexperiencereport");
const admin_1 = require("./admin");
const admob_1 = require("./admob");
const adsense_1 = require("./adsense");
const adsensehost_1 = require("./adsensehost");
const advisorynotifications_1 = require("./advisorynotifications");
const aiplatform_1 = require("./aiplatform");
const alertcenter_1 = require("./alertcenter");
const alloydb_1 = require("./alloydb");
const analytics_1 = require("./analytics");
const analyticsadmin_1 = require("./analyticsadmin");
const analyticsdata_1 = require("./analyticsdata");
const analyticshub_1 = require("./analyticshub");
const analyticsreporting_1 = require("./analyticsreporting");
const androiddeviceprovisioning_1 = require("./androiddeviceprovisioning");
const androidenterprise_1 = require("./androidenterprise");
const androidmanagement_1 = require("./androidmanagement");
const androidpublisher_1 = require("./androidpublisher");
const apigateway_1 = require("./apigateway");
const apigeeregistry_1 = require("./apigeeregistry");
const apikeys_1 = require("./apikeys");
const appengine_1 = require("./appengine");
const apphub_1 = require("./apphub");
const appsactivity_1 = require("./appsactivity");
const area120tables_1 = require("./area120tables");
const artifactregistry_1 = require("./artifactregistry");
const assuredworkloads_1 = require("./assuredworkloads");
const authorizedbuyersmarketplace_1 = require("./authorizedbuyersmarketplace");
const backupdr_1 = require("./backupdr");
const baremetalsolution_1 = require("./baremetalsolution");
const batch_1 = require("./batch");
const beyondcorp_1 = require("./beyondcorp");
const biglake_1 = require("./biglake");
const bigquery_1 = require("./bigquery");
const bigqueryconnection_1 = require("./bigqueryconnection");
const bigquerydatapolicy_1 = require("./bigquerydatapolicy");
const bigquerydatatransfer_1 = require("./bigquerydatatransfer");
const bigqueryreservation_1 = require("./bigqueryreservation");
const bigtableadmin_1 = require("./bigtableadmin");
const billingbudgets_1 = require("./billingbudgets");
const binaryauthorization_1 = require("./binaryauthorization");
const blockchainnodeengine_1 = require("./blockchainnodeengine");
const blogger_1 = require("./blogger");
const books_1 = require("./books");
const businessprofileperformance_1 = require("./businessprofileperformance");
const calendar_1 = require("./calendar");
const certificatemanager_1 = require("./certificatemanager");
const chat_1 = require("./chat");
const checks_1 = require("./checks");
const chromemanagement_1 = require("./chromemanagement");
const chromepolicy_1 = require("./chromepolicy");
const chromeuxreport_1 = require("./chromeuxreport");
const civicinfo_1 = require("./civicinfo");
const classroom_1 = require("./classroom");
const cloudasset_1 = require("./cloudasset");
const cloudbilling_1 = require("./cloudbilling");
const cloudbuild_1 = require("./cloudbuild");
const cloudchannel_1 = require("./cloudchannel");
const cloudcontrolspartner_1 = require("./cloudcontrolspartner");
const clouddebugger_1 = require("./clouddebugger");
const clouddeploy_1 = require("./clouddeploy");
const clouderrorreporting_1 = require("./clouderrorreporting");
const cloudfunctions_1 = require("./cloudfunctions");
const cloudidentity_1 = require("./cloudidentity");
const cloudiot_1 = require("./cloudiot");
const cloudkms_1 = require("./cloudkms");
const cloudprofiler_1 = require("./cloudprofiler");
const cloudresourcemanager_1 = require("./cloudresourcemanager");
const cloudscheduler_1 = require("./cloudscheduler");
const cloudsearch_1 = require("./cloudsearch");
const cloudshell_1 = require("./cloudshell");
const cloudsupport_1 = require("./cloudsupport");
const cloudtasks_1 = require("./cloudtasks");
const cloudtrace_1 = require("./cloudtrace");
const composer_1 = require("./composer");
const compute_1 = require("./compute");
const config_1 = require("./config");
const connectors_1 = require("./connectors");
const contactcenteraiplatform_1 = require("./contactcenteraiplatform");
const contactcenterinsights_1 = require("./contactcenterinsights");
const container_1 = require("./container");
const containeranalysis_1 = require("./containeranalysis");
const content_1 = require("./content");
const contentwarehouse_1 = require("./contentwarehouse");
const customsearch_1 = require("./customsearch");
const datacatalog_1 = require("./datacatalog");
const dataflow_1 = require("./dataflow");
const dataform_1 = require("./dataform");
const datafusion_1 = require("./datafusion");
const datalabeling_1 = require("./datalabeling");
const datalineage_1 = require("./datalineage");
const datamigration_1 = require("./datamigration");
const datapipelines_1 = require("./datapipelines");
const dataplex_1 = require("./dataplex");
const dataportability_1 = require("./dataportability");
const dataproc_1 = require("./dataproc");
const datastore_1 = require("./datastore");
const datastream_1 = require("./datastream");
const deploymentmanager_1 = require("./deploymentmanager");
const developerconnect_1 = require("./developerconnect");
const dfareporting_1 = require("./dfareporting");
const dialogflow_1 = require("./dialogflow");
const digitalassetlinks_1 = require("./digitalassetlinks");
const discovery_1 = require("./discovery");
const discoveryengine_1 = require("./discoveryengine");
const displayvideo_1 = require("./displayvideo");
const dlp_1 = require("./dlp");
const dns_1 = require("./dns");
const docs_1 = require("./docs");
const documentai_1 = require("./documentai");
const domains_1 = require("./domains");
const domainsrdap_1 = require("./domainsrdap");
const doubleclickbidmanager_1 = require("./doubleclickbidmanager");
const doubleclicksearch_1 = require("./doubleclicksearch");
const drive_1 = require("./drive");
const driveactivity_1 = require("./driveactivity");
const drivelabels_1 = require("./drivelabels");
const essentialcontacts_1 = require("./essentialcontacts");
const eventarc_1 = require("./eventarc");
const factchecktools_1 = require("./factchecktools");
const fcm_1 = require("./fcm");
const fcmdata_1 = require("./fcmdata");
const file_1 = require("./file");
const firebase_1 = require("./firebase");
const firebaseappcheck_1 = require("./firebaseappcheck");
const firebaseappdistribution_1 = require("./firebaseappdistribution");
const firebasedatabase_1 = require("./firebasedatabase");
const firebasedynamiclinks_1 = require("./firebasedynamiclinks");
const firebasehosting_1 = require("./firebasehosting");
const firebaseml_1 = require("./firebaseml");
const firebaserules_1 = require("./firebaserules");
const firebasestorage_1 = require("./firebasestorage");
const firestore_1 = require("./firestore");
const fitness_1 = require("./fitness");
const forms_1 = require("./forms");
const games_1 = require("./games");
const gamesConfiguration_1 = require("./gamesConfiguration");
const gamesManagement_1 = require("./gamesManagement");
const gameservices_1 = require("./gameservices");
const genomics_1 = require("./genomics");
const gkebackup_1 = require("./gkebackup");
const gkehub_1 = require("./gkehub");
const gkeonprem_1 = require("./gkeonprem");
const gmail_1 = require("./gmail");
const gmailpostmastertools_1 = require("./gmailpostmastertools");
const groupsmigration_1 = require("./groupsmigration");
const groupssettings_1 = require("./groupssettings");
const healthcare_1 = require("./healthcare");
const homegraph_1 = require("./homegraph");
const iam_1 = require("./iam");
const iamcredentials_1 = require("./iamcredentials");
const iap_1 = require("./iap");
const ideahub_1 = require("./ideahub");
const identitytoolkit_1 = require("./identitytoolkit");
const ids_1 = require("./ids");
const indexing_1 = require("./indexing");
const integrations_1 = require("./integrations");
const jobs_1 = require("./jobs");
const kgsearch_1 = require("./kgsearch");
const kmsinventory_1 = require("./kmsinventory");
const language_1 = require("./language");
const libraryagent_1 = require("./libraryagent");
const licensing_1 = require("./licensing");
const lifesciences_1 = require("./lifesciences");
const localservices_1 = require("./localservices");
const logging_1 = require("./logging");
const looker_1 = require("./looker");
const managedidentities_1 = require("./managedidentities");
const manufacturers_1 = require("./manufacturers");
const marketingplatformadmin_1 = require("./marketingplatformadmin");
const memcache_1 = require("./memcache");
const metastore_1 = require("./metastore");
const migrationcenter_1 = require("./migrationcenter");
const ml_1 = require("./ml");
const monitoring_1 = require("./monitoring");
const mybusinessaccountmanagement_1 = require("./mybusinessaccountmanagement");
const mybusinessbusinesscalls_1 = require("./mybusinessbusinesscalls");
const mybusinessbusinessinformation_1 = require("./mybusinessbusinessinformation");
const mybusinesslodging_1 = require("./mybusinesslodging");
const mybusinessnotifications_1 = require("./mybusinessnotifications");
const mybusinessplaceactions_1 = require("./mybusinessplaceactions");
const mybusinessqanda_1 = require("./mybusinessqanda");
const mybusinessverifications_1 = require("./mybusinessverifications");
const networkconnectivity_1 = require("./networkconnectivity");
const networkmanagement_1 = require("./networkmanagement");
const networksecurity_1 = require("./networksecurity");
const networkservices_1 = require("./networkservices");
const notebooks_1 = require("./notebooks");
const oauth2_1 = require("./oauth2");
const ondemandscanning_1 = require("./ondemandscanning");
const orgpolicy_1 = require("./orgpolicy");
const osconfig_1 = require("./osconfig");
const oslogin_1 = require("./oslogin");
const pagespeedonline_1 = require("./pagespeedonline");
const paymentsresellersubscription_1 = require("./paymentsresellersubscription");
const people_1 = require("./people");
const places_1 = require("./places");
const playablelocations_1 = require("./playablelocations");
const playcustomapp_1 = require("./playcustomapp");
const playdeveloperreporting_1 = require("./playdeveloperreporting");
const playgrouping_1 = require("./playgrouping");
const playintegrity_1 = require("./playintegrity");
const plus_1 = require("./plus");
const policyanalyzer_1 = require("./policyanalyzer");
const policysimulator_1 = require("./policysimulator");
const policytroubleshooter_1 = require("./policytroubleshooter");
const poly_1 = require("./poly");
const privateca_1 = require("./privateca");
const prod_tt_sasportal_1 = require("./prod_tt_sasportal");
const publicca_1 = require("./publicca");
const pubsub_1 = require("./pubsub");
const pubsublite_1 = require("./pubsublite");
const rapidmigrationassessment_1 = require("./rapidmigrationassessment");
const readerrevenuesubscriptionlinking_1 = require("./readerrevenuesubscriptionlinking");
const realtimebidding_1 = require("./realtimebidding");
const recaptchaenterprise_1 = require("./recaptchaenterprise");
const recommendationengine_1 = require("./recommendationengine");
const recommender_1 = require("./recommender");
const redis_1 = require("./redis");
const remotebuildexecution_1 = require("./remotebuildexecution");
const reseller_1 = require("./reseller");
const resourcesettings_1 = require("./resourcesettings");
const retail_1 = require("./retail");
const run_1 = require("./run");
const runtimeconfig_1 = require("./runtimeconfig");
const safebrowsing_1 = require("./safebrowsing");
const sasportal_1 = require("./sasportal");
const script_1 = require("./script");
const searchads360_1 = require("./searchads360");
const searchconsole_1 = require("./searchconsole");
const secretmanager_1 = require("./secretmanager");
const securitycenter_1 = require("./securitycenter");
const serviceconsumermanagement_1 = require("./serviceconsumermanagement");
const servicecontrol_1 = require("./servicecontrol");
const servicedirectory_1 = require("./servicedirectory");
const servicemanagement_1 = require("./servicemanagement");
const servicenetworking_1 = require("./servicenetworking");
const serviceusage_1 = require("./serviceusage");
const sheets_1 = require("./sheets");
const siteVerification_1 = require("./siteVerification");
const slides_1 = require("./slides");
const smartdevicemanagement_1 = require("./smartdevicemanagement");
const solar_1 = require("./solar");
const sourcerepo_1 = require("./sourcerepo");
const spanner_1 = require("./spanner");
const speech_1 = require("./speech");
const sql_1 = require("./sql");
const sqladmin_1 = require("./sqladmin");
const storage_1 = require("./storage");
const storagetransfer_1 = require("./storagetransfer");
const streetviewpublish_1 = require("./streetviewpublish");
const sts_1 = require("./sts");
const tagmanager_1 = require("./tagmanager");
const tasks_1 = require("./tasks");
const testing_1 = require("./testing");
const texttospeech_1 = require("./texttospeech");
const toolresults_1 = require("./toolresults");
const tpu_1 = require("./tpu");
const trafficdirector_1 = require("./trafficdirector");
const transcoder_1 = require("./transcoder");
const translate_1 = require("./translate");
const travelimpactmodel_1 = require("./travelimpactmodel");
const vault_1 = require("./vault");
const vectortile_1 = require("./vectortile");
const verifiedaccess_1 = require("./verifiedaccess");
const versionhistory_1 = require("./versionhistory");
const videointelligence_1 = require("./videointelligence");
const vision_1 = require("./vision");
const vmmigration_1 = require("./vmmigration");
const vmwareengine_1 = require("./vmwareengine");
const vpcaccess_1 = require("./vpcaccess");
const walletobjects_1 = require("./walletobjects");
const webfonts_1 = require("./webfonts");
const webmasters_1 = require("./webmasters");
const webrisk_1 = require("./webrisk");
const websecurityscanner_1 = require("./websecurityscanner");
const workflowexecutions_1 = require("./workflowexecutions");
const workflows_1 = require("./workflows");
const workloadmanager_1 = require("./workloadmanager");
const workspaceevents_1 = require("./workspaceevents");
const workstations_1 = require("./workstations");
const youtube_1 = require("./youtube");
const youtubeAnalytics_1 = require("./youtubeAnalytics");
const youtubereporting_1 = require("./youtubereporting");
exports.APIS = {
    abusiveexperiencereport: abusiveexperiencereport_1.VERSIONS,
    acceleratedmobilepageurl: acceleratedmobilepageurl_1.VERSIONS,
    accessapproval: accessapproval_1.VERSIONS,
    accesscontextmanager: accesscontextmanager_1.VERSIONS,
    acmedns: acmedns_1.VERSIONS,
    addressvalidation: addressvalidation_1.VERSIONS,
    adexchangebuyer: adexchangebuyer_1.VERSIONS,
    adexchangebuyer2: adexchangebuyer2_1.VERSIONS,
    adexperiencereport: adexperiencereport_1.VERSIONS,
    admin: admin_1.VERSIONS,
    admob: admob_1.VERSIONS,
    adsense: adsense_1.VERSIONS,
    adsensehost: adsensehost_1.VERSIONS,
    advisorynotifications: advisorynotifications_1.VERSIONS,
    aiplatform: aiplatform_1.VERSIONS,
    alertcenter: alertcenter_1.VERSIONS,
    alloydb: alloydb_1.VERSIONS,
    analytics: analytics_1.VERSIONS,
    analyticsadmin: analyticsadmin_1.VERSIONS,
    analyticsdata: analyticsdata_1.VERSIONS,
    analyticshub: analyticshub_1.VERSIONS,
    analyticsreporting: analyticsreporting_1.VERSIONS,
    androiddeviceprovisioning: androiddeviceprovisioning_1.VERSIONS,
    androidenterprise: androidenterprise_1.VERSIONS,
    androidmanagement: androidmanagement_1.VERSIONS,
    androidpublisher: androidpublisher_1.VERSIONS,
    apigateway: apigateway_1.VERSIONS,
    apigeeregistry: apigeeregistry_1.VERSIONS,
    apikeys: apikeys_1.VERSIONS,
    appengine: appengine_1.VERSIONS,
    apphub: apphub_1.VERSIONS,
    appsactivity: appsactivity_1.VERSIONS,
    area120tables: area120tables_1.VERSIONS,
    artifactregistry: artifactregistry_1.VERSIONS,
    assuredworkloads: assuredworkloads_1.VERSIONS,
    authorizedbuyersmarketplace: authorizedbuyersmarketplace_1.VERSIONS,
    backupdr: backupdr_1.VERSIONS,
    baremetalsolution: baremetalsolution_1.VERSIONS,
    batch: batch_1.VERSIONS,
    beyondcorp: beyondcorp_1.VERSIONS,
    biglake: biglake_1.VERSIONS,
    bigquery: bigquery_1.VERSIONS,
    bigqueryconnection: bigqueryconnection_1.VERSIONS,
    bigquerydatapolicy: bigquerydatapolicy_1.VERSIONS,
    bigquerydatatransfer: bigquerydatatransfer_1.VERSIONS,
    bigqueryreservation: bigqueryreservation_1.VERSIONS,
    bigtableadmin: bigtableadmin_1.VERSIONS,
    billingbudgets: billingbudgets_1.VERSIONS,
    binaryauthorization: binaryauthorization_1.VERSIONS,
    blockchainnodeengine: blockchainnodeengine_1.VERSIONS,
    blogger: blogger_1.VERSIONS,
    books: books_1.VERSIONS,
    businessprofileperformance: businessprofileperformance_1.VERSIONS,
    calendar: calendar_1.VERSIONS,
    certificatemanager: certificatemanager_1.VERSIONS,
    chat: chat_1.VERSIONS,
    checks: checks_1.VERSIONS,
    chromemanagement: chromemanagement_1.VERSIONS,
    chromepolicy: chromepolicy_1.VERSIONS,
    chromeuxreport: chromeuxreport_1.VERSIONS,
    civicinfo: civicinfo_1.VERSIONS,
    classroom: classroom_1.VERSIONS,
    cloudasset: cloudasset_1.VERSIONS,
    cloudbilling: cloudbilling_1.VERSIONS,
    cloudbuild: cloudbuild_1.VERSIONS,
    cloudchannel: cloudchannel_1.VERSIONS,
    cloudcontrolspartner: cloudcontrolspartner_1.VERSIONS,
    clouddebugger: clouddebugger_1.VERSIONS,
    clouddeploy: clouddeploy_1.VERSIONS,
    clouderrorreporting: clouderrorreporting_1.VERSIONS,
    cloudfunctions: cloudfunctions_1.VERSIONS,
    cloudidentity: cloudidentity_1.VERSIONS,
    cloudiot: cloudiot_1.VERSIONS,
    cloudkms: cloudkms_1.VERSIONS,
    cloudprofiler: cloudprofiler_1.VERSIONS,
    cloudresourcemanager: cloudresourcemanager_1.VERSIONS,
    cloudscheduler: cloudscheduler_1.VERSIONS,
    cloudsearch: cloudsearch_1.VERSIONS,
    cloudshell: cloudshell_1.VERSIONS,
    cloudsupport: cloudsupport_1.VERSIONS,
    cloudtasks: cloudtasks_1.VERSIONS,
    cloudtrace: cloudtrace_1.VERSIONS,
    composer: composer_1.VERSIONS,
    compute: compute_1.VERSIONS,
    config: config_1.VERSIONS,
    connectors: connectors_1.VERSIONS,
    contactcenteraiplatform: contactcenteraiplatform_1.VERSIONS,
    contactcenterinsights: contactcenterinsights_1.VERSIONS,
    container: container_1.VERSIONS,
    containeranalysis: containeranalysis_1.VERSIONS,
    content: content_1.VERSIONS,
    contentwarehouse: contentwarehouse_1.VERSIONS,
    customsearch: customsearch_1.VERSIONS,
    datacatalog: datacatalog_1.VERSIONS,
    dataflow: dataflow_1.VERSIONS,
    dataform: dataform_1.VERSIONS,
    datafusion: datafusion_1.VERSIONS,
    datalabeling: datalabeling_1.VERSIONS,
    datalineage: datalineage_1.VERSIONS,
    datamigration: datamigration_1.VERSIONS,
    datapipelines: datapipelines_1.VERSIONS,
    dataplex: dataplex_1.VERSIONS,
    dataportability: dataportability_1.VERSIONS,
    dataproc: dataproc_1.VERSIONS,
    datastore: datastore_1.VERSIONS,
    datastream: datastream_1.VERSIONS,
    deploymentmanager: deploymentmanager_1.VERSIONS,
    developerconnect: developerconnect_1.VERSIONS,
    dfareporting: dfareporting_1.VERSIONS,
    dialogflow: dialogflow_1.VERSIONS,
    digitalassetlinks: digitalassetlinks_1.VERSIONS,
    discovery: discovery_1.VERSIONS,
    discoveryengine: discoveryengine_1.VERSIONS,
    displayvideo: displayvideo_1.VERSIONS,
    dlp: dlp_1.VERSIONS,
    dns: dns_1.VERSIONS,
    docs: docs_1.VERSIONS,
    documentai: documentai_1.VERSIONS,
    domains: domains_1.VERSIONS,
    domainsrdap: domainsrdap_1.VERSIONS,
    doubleclickbidmanager: doubleclickbidmanager_1.VERSIONS,
    doubleclicksearch: doubleclicksearch_1.VERSIONS,
    drive: drive_1.VERSIONS,
    driveactivity: driveactivity_1.VERSIONS,
    drivelabels: drivelabels_1.VERSIONS,
    essentialcontacts: essentialcontacts_1.VERSIONS,
    eventarc: eventarc_1.VERSIONS,
    factchecktools: factchecktools_1.VERSIONS,
    fcm: fcm_1.VERSIONS,
    fcmdata: fcmdata_1.VERSIONS,
    file: file_1.VERSIONS,
    firebase: firebase_1.VERSIONS,
    firebaseappcheck: firebaseappcheck_1.VERSIONS,
    firebaseappdistribution: firebaseappdistribution_1.VERSIONS,
    firebasedatabase: firebasedatabase_1.VERSIONS,
    firebasedynamiclinks: firebasedynamiclinks_1.VERSIONS,
    firebasehosting: firebasehosting_1.VERSIONS,
    firebaseml: firebaseml_1.VERSIONS,
    firebaserules: firebaserules_1.VERSIONS,
    firebasestorage: firebasestorage_1.VERSIONS,
    firestore: firestore_1.VERSIONS,
    fitness: fitness_1.VERSIONS,
    forms: forms_1.VERSIONS,
    games: games_1.VERSIONS,
    gamesConfiguration: gamesConfiguration_1.VERSIONS,
    gamesManagement: gamesManagement_1.VERSIONS,
    gameservices: gameservices_1.VERSIONS,
    genomics: genomics_1.VERSIONS,
    gkebackup: gkebackup_1.VERSIONS,
    gkehub: gkehub_1.VERSIONS,
    gkeonprem: gkeonprem_1.VERSIONS,
    gmail: gmail_1.VERSIONS,
    gmailpostmastertools: gmailpostmastertools_1.VERSIONS,
    groupsmigration: groupsmigration_1.VERSIONS,
    groupssettings: groupssettings_1.VERSIONS,
    healthcare: healthcare_1.VERSIONS,
    homegraph: homegraph_1.VERSIONS,
    iam: iam_1.VERSIONS,
    iamcredentials: iamcredentials_1.VERSIONS,
    iap: iap_1.VERSIONS,
    ideahub: ideahub_1.VERSIONS,
    identitytoolkit: identitytoolkit_1.VERSIONS,
    ids: ids_1.VERSIONS,
    indexing: indexing_1.VERSIONS,
    integrations: integrations_1.VERSIONS,
    jobs: jobs_1.VERSIONS,
    kgsearch: kgsearch_1.VERSIONS,
    kmsinventory: kmsinventory_1.VERSIONS,
    language: language_1.VERSIONS,
    libraryagent: libraryagent_1.VERSIONS,
    licensing: licensing_1.VERSIONS,
    lifesciences: lifesciences_1.VERSIONS,
    localservices: localservices_1.VERSIONS,
    logging: logging_1.VERSIONS,
    looker: looker_1.VERSIONS,
    managedidentities: managedidentities_1.VERSIONS,
    manufacturers: manufacturers_1.VERSIONS,
    marketingplatformadmin: marketingplatformadmin_1.VERSIONS,
    memcache: memcache_1.VERSIONS,
    metastore: metastore_1.VERSIONS,
    migrationcenter: migrationcenter_1.VERSIONS,
    ml: ml_1.VERSIONS,
    monitoring: monitoring_1.VERSIONS,
    mybusinessaccountmanagement: mybusinessaccountmanagement_1.VERSIONS,
    mybusinessbusinesscalls: mybusinessbusinesscalls_1.VERSIONS,
    mybusinessbusinessinformation: mybusinessbusinessinformation_1.VERSIONS,
    mybusinesslodging: mybusinesslodging_1.VERSIONS,
    mybusinessnotifications: mybusinessnotifications_1.VERSIONS,
    mybusinessplaceactions: mybusinessplaceactions_1.VERSIONS,
    mybusinessqanda: mybusinessqanda_1.VERSIONS,
    mybusinessverifications: mybusinessverifications_1.VERSIONS,
    networkconnectivity: networkconnectivity_1.VERSIONS,
    networkmanagement: networkmanagement_1.VERSIONS,
    networksecurity: networksecurity_1.VERSIONS,
    networkservices: networkservices_1.VERSIONS,
    notebooks: notebooks_1.VERSIONS,
    oauth2: oauth2_1.VERSIONS,
    ondemandscanning: ondemandscanning_1.VERSIONS,
    orgpolicy: orgpolicy_1.VERSIONS,
    osconfig: osconfig_1.VERSIONS,
    oslogin: oslogin_1.VERSIONS,
    pagespeedonline: pagespeedonline_1.VERSIONS,
    paymentsresellersubscription: paymentsresellersubscription_1.VERSIONS,
    people: people_1.VERSIONS,
    places: places_1.VERSIONS,
    playablelocations: playablelocations_1.VERSIONS,
    playcustomapp: playcustomapp_1.VERSIONS,
    playdeveloperreporting: playdeveloperreporting_1.VERSIONS,
    playgrouping: playgrouping_1.VERSIONS,
    playintegrity: playintegrity_1.VERSIONS,
    plus: plus_1.VERSIONS,
    policyanalyzer: policyanalyzer_1.VERSIONS,
    policysimulator: policysimulator_1.VERSIONS,
    policytroubleshooter: policytroubleshooter_1.VERSIONS,
    poly: poly_1.VERSIONS,
    privateca: privateca_1.VERSIONS,
    prod_tt_sasportal: prod_tt_sasportal_1.VERSIONS,
    publicca: publicca_1.VERSIONS,
    pubsub: pubsub_1.VERSIONS,
    pubsublite: pubsublite_1.VERSIONS,
    rapidmigrationassessment: rapidmigrationassessment_1.VERSIONS,
    readerrevenuesubscriptionlinking: readerrevenuesubscriptionlinking_1.VERSIONS,
    realtimebidding: realtimebidding_1.VERSIONS,
    recaptchaenterprise: recaptchaenterprise_1.VERSIONS,
    recommendationengine: recommendationengine_1.VERSIONS,
    recommender: recommender_1.VERSIONS,
    redis: redis_1.VERSIONS,
    remotebuildexecution: remotebuildexecution_1.VERSIONS,
    reseller: reseller_1.VERSIONS,
    resourcesettings: resourcesettings_1.VERSIONS,
    retail: retail_1.VERSIONS,
    run: run_1.VERSIONS,
    runtimeconfig: runtimeconfig_1.VERSIONS,
    safebrowsing: safebrowsing_1.VERSIONS,
    sasportal: sasportal_1.VERSIONS,
    script: script_1.VERSIONS,
    searchads360: searchads360_1.VERSIONS,
    searchconsole: searchconsole_1.VERSIONS,
    secretmanager: secretmanager_1.VERSIONS,
    securitycenter: securitycenter_1.VERSIONS,
    serviceconsumermanagement: serviceconsumermanagement_1.VERSIONS,
    servicecontrol: servicecontrol_1.VERSIONS,
    servicedirectory: servicedirectory_1.VERSIONS,
    servicemanagement: servicemanagement_1.VERSIONS,
    servicenetworking: servicenetworking_1.VERSIONS,
    serviceusage: serviceusage_1.VERSIONS,
    sheets: sheets_1.VERSIONS,
    siteVerification: siteVerification_1.VERSIONS,
    slides: slides_1.VERSIONS,
    smartdevicemanagement: smartdevicemanagement_1.VERSIONS,
    solar: solar_1.VERSIONS,
    sourcerepo: sourcerepo_1.VERSIONS,
    spanner: spanner_1.VERSIONS,
    speech: speech_1.VERSIONS,
    sql: sql_1.VERSIONS,
    sqladmin: sqladmin_1.VERSIONS,
    storage: storage_1.VERSIONS,
    storagetransfer: storagetransfer_1.VERSIONS,
    streetviewpublish: streetviewpublish_1.VERSIONS,
    sts: sts_1.VERSIONS,
    tagmanager: tagmanager_1.VERSIONS,
    tasks: tasks_1.VERSIONS,
    testing: testing_1.VERSIONS,
    texttospeech: texttospeech_1.VERSIONS,
    toolresults: toolresults_1.VERSIONS,
    tpu: tpu_1.VERSIONS,
    trafficdirector: trafficdirector_1.VERSIONS,
    transcoder: transcoder_1.VERSIONS,
    translate: translate_1.VERSIONS,
    travelimpactmodel: travelimpactmodel_1.VERSIONS,
    vault: vault_1.VERSIONS,
    vectortile: vectortile_1.VERSIONS,
    verifiedaccess: verifiedaccess_1.VERSIONS,
    versionhistory: versionhistory_1.VERSIONS,
    videointelligence: videointelligence_1.VERSIONS,
    vision: vision_1.VERSIONS,
    vmmigration: vmmigration_1.VERSIONS,
    vmwareengine: vmwareengine_1.VERSIONS,
    vpcaccess: vpcaccess_1.VERSIONS,
    walletobjects: walletobjects_1.VERSIONS,
    webfonts: webfonts_1.VERSIONS,
    webmasters: webmasters_1.VERSIONS,
    webrisk: webrisk_1.VERSIONS,
    websecurityscanner: websecurityscanner_1.VERSIONS,
    workflowexecutions: workflowexecutions_1.VERSIONS,
    workflows: workflows_1.VERSIONS,
    workloadmanager: workloadmanager_1.VERSIONS,
    workspaceevents: workspaceevents_1.VERSIONS,
    workstations: workstations_1.VERSIONS,
    youtube: youtube_1.VERSIONS,
    youtubeAnalytics: youtubeAnalytics_1.VERSIONS,
    youtubereporting: youtubereporting_1.VERSIONS,
};
class GeneratedAPIs {
    constructor() {
        this.abusiveexperiencereport = abusiveexperiencereport_1.abusiveexperiencereport;
        this.acceleratedmobilepageurl = acceleratedmobilepageurl_1.acceleratedmobilepageurl;
        this.accessapproval = accessapproval_1.accessapproval;
        this.accesscontextmanager = accesscontextmanager_1.accesscontextmanager;
        this.acmedns = acmedns_1.acmedns;
        this.addressvalidation = addressvalidation_1.addressvalidation;
        this.adexchangebuyer = adexchangebuyer_1.adexchangebuyer;
        this.adexchangebuyer2 = adexchangebuyer2_1.adexchangebuyer2;
        this.adexperiencereport = adexperiencereport_1.adexperiencereport;
        this.admin = admin_1.admin;
        this.admob = admob_1.admob;
        this.adsense = adsense_1.adsense;
        this.adsensehost = adsensehost_1.adsensehost;
        this.advisorynotifications = advisorynotifications_1.advisorynotifications;
        this.aiplatform = aiplatform_1.aiplatform;
        this.alertcenter = alertcenter_1.alertcenter;
        this.alloydb = alloydb_1.alloydb;
        this.analytics = analytics_1.analytics;
        this.analyticsadmin = analyticsadmin_1.analyticsadmin;
        this.analyticsdata = analyticsdata_1.analyticsdata;
        this.analyticshub = analyticshub_1.analyticshub;
        this.analyticsreporting = analyticsreporting_1.analyticsreporting;
        this.androiddeviceprovisioning = androiddeviceprovisioning_1.androiddeviceprovisioning;
        this.androidenterprise = androidenterprise_1.androidenterprise;
        this.androidmanagement = androidmanagement_1.androidmanagement;
        this.androidpublisher = androidpublisher_1.androidpublisher;
        this.apigateway = apigateway_1.apigateway;
        this.apigeeregistry = apigeeregistry_1.apigeeregistry;
        this.apikeys = apikeys_1.apikeys;
        this.appengine = appengine_1.appengine;
        this.apphub = apphub_1.apphub;
        this.appsactivity = appsactivity_1.appsactivity;
        this.area120tables = area120tables_1.area120tables;
        this.artifactregistry = artifactregistry_1.artifactregistry;
        this.assuredworkloads = assuredworkloads_1.assuredworkloads;
        this.authorizedbuyersmarketplace = authorizedbuyersmarketplace_1.authorizedbuyersmarketplace;
        this.backupdr = backupdr_1.backupdr;
        this.baremetalsolution = baremetalsolution_1.baremetalsolution;
        this.batch = batch_1.batch;
        this.beyondcorp = beyondcorp_1.beyondcorp;
        this.biglake = biglake_1.biglake;
        this.bigquery = bigquery_1.bigquery;
        this.bigqueryconnection = bigqueryconnection_1.bigqueryconnection;
        this.bigquerydatapolicy = bigquerydatapolicy_1.bigquerydatapolicy;
        this.bigquerydatatransfer = bigquerydatatransfer_1.bigquerydatatransfer;
        this.bigqueryreservation = bigqueryreservation_1.bigqueryreservation;
        this.bigtableadmin = bigtableadmin_1.bigtableadmin;
        this.billingbudgets = billingbudgets_1.billingbudgets;
        this.binaryauthorization = binaryauthorization_1.binaryauthorization;
        this.blockchainnodeengine = blockchainnodeengine_1.blockchainnodeengine;
        this.blogger = blogger_1.blogger;
        this.books = books_1.books;
        this.businessprofileperformance = businessprofileperformance_1.businessprofileperformance;
        this.calendar = calendar_1.calendar;
        this.certificatemanager = certificatemanager_1.certificatemanager;
        this.chat = chat_1.chat;
        this.checks = checks_1.checks;
        this.chromemanagement = chromemanagement_1.chromemanagement;
        this.chromepolicy = chromepolicy_1.chromepolicy;
        this.chromeuxreport = chromeuxreport_1.chromeuxreport;
        this.civicinfo = civicinfo_1.civicinfo;
        this.classroom = classroom_1.classroom;
        this.cloudasset = cloudasset_1.cloudasset;
        this.cloudbilling = cloudbilling_1.cloudbilling;
        this.cloudbuild = cloudbuild_1.cloudbuild;
        this.cloudchannel = cloudchannel_1.cloudchannel;
        this.cloudcontrolspartner = cloudcontrolspartner_1.cloudcontrolspartner;
        this.clouddebugger = clouddebugger_1.clouddebugger;
        this.clouddeploy = clouddeploy_1.clouddeploy;
        this.clouderrorreporting = clouderrorreporting_1.clouderrorreporting;
        this.cloudfunctions = cloudfunctions_1.cloudfunctions;
        this.cloudidentity = cloudidentity_1.cloudidentity;
        this.cloudiot = cloudiot_1.cloudiot;
        this.cloudkms = cloudkms_1.cloudkms;
        this.cloudprofiler = cloudprofiler_1.cloudprofiler;
        this.cloudresourcemanager = cloudresourcemanager_1.cloudresourcemanager;
        this.cloudscheduler = cloudscheduler_1.cloudscheduler;
        this.cloudsearch = cloudsearch_1.cloudsearch;
        this.cloudshell = cloudshell_1.cloudshell;
        this.cloudsupport = cloudsupport_1.cloudsupport;
        this.cloudtasks = cloudtasks_1.cloudtasks;
        this.cloudtrace = cloudtrace_1.cloudtrace;
        this.composer = composer_1.composer;
        this.compute = compute_1.compute;
        this.config = config_1.config;
        this.connectors = connectors_1.connectors;
        this.contactcenteraiplatform = contactcenteraiplatform_1.contactcenteraiplatform;
        this.contactcenterinsights = contactcenterinsights_1.contactcenterinsights;
        this.container = container_1.container;
        this.containeranalysis = containeranalysis_1.containeranalysis;
        this.content = content_1.content;
        this.contentwarehouse = contentwarehouse_1.contentwarehouse;
        this.customsearch = customsearch_1.customsearch;
        this.datacatalog = datacatalog_1.datacatalog;
        this.dataflow = dataflow_1.dataflow;
        this.dataform = dataform_1.dataform;
        this.datafusion = datafusion_1.datafusion;
        this.datalabeling = datalabeling_1.datalabeling;
        this.datalineage = datalineage_1.datalineage;
        this.datamigration = datamigration_1.datamigration;
        this.datapipelines = datapipelines_1.datapipelines;
        this.dataplex = dataplex_1.dataplex;
        this.dataportability = dataportability_1.dataportability;
        this.dataproc = dataproc_1.dataproc;
        this.datastore = datastore_1.datastore;
        this.datastream = datastream_1.datastream;
        this.deploymentmanager = deploymentmanager_1.deploymentmanager;
        this.developerconnect = developerconnect_1.developerconnect;
        this.dfareporting = dfareporting_1.dfareporting;
        this.dialogflow = dialogflow_1.dialogflow;
        this.digitalassetlinks = digitalassetlinks_1.digitalassetlinks;
        this.discovery = discovery_1.discovery;
        this.discoveryengine = discoveryengine_1.discoveryengine;
        this.displayvideo = displayvideo_1.displayvideo;
        this.dlp = dlp_1.dlp;
        this.dns = dns_1.dns;
        this.docs = docs_1.docs;
        this.documentai = documentai_1.documentai;
        this.domains = domains_1.domains;
        this.domainsrdap = domainsrdap_1.domainsrdap;
        this.doubleclickbidmanager = doubleclickbidmanager_1.doubleclickbidmanager;
        this.doubleclicksearch = doubleclicksearch_1.doubleclicksearch;
        this.drive = drive_1.drive;
        this.driveactivity = driveactivity_1.driveactivity;
        this.drivelabels = drivelabels_1.drivelabels;
        this.essentialcontacts = essentialcontacts_1.essentialcontacts;
        this.eventarc = eventarc_1.eventarc;
        this.factchecktools = factchecktools_1.factchecktools;
        this.fcm = fcm_1.fcm;
        this.fcmdata = fcmdata_1.fcmdata;
        this.file = file_1.file;
        this.firebase = firebase_1.firebase;
        this.firebaseappcheck = firebaseappcheck_1.firebaseappcheck;
        this.firebaseappdistribution = firebaseappdistribution_1.firebaseappdistribution;
        this.firebasedatabase = firebasedatabase_1.firebasedatabase;
        this.firebasedynamiclinks = firebasedynamiclinks_1.firebasedynamiclinks;
        this.firebasehosting = firebasehosting_1.firebasehosting;
        this.firebaseml = firebaseml_1.firebaseml;
        this.firebaserules = firebaserules_1.firebaserules;
        this.firebasestorage = firebasestorage_1.firebasestorage;
        this.firestore = firestore_1.firestore;
        this.fitness = fitness_1.fitness;
        this.forms = forms_1.forms;
        this.games = games_1.games;
        this.gamesConfiguration = gamesConfiguration_1.gamesConfiguration;
        this.gamesManagement = gamesManagement_1.gamesManagement;
        this.gameservices = gameservices_1.gameservices;
        this.genomics = genomics_1.genomics;
        this.gkebackup = gkebackup_1.gkebackup;
        this.gkehub = gkehub_1.gkehub;
        this.gkeonprem = gkeonprem_1.gkeonprem;
        this.gmail = gmail_1.gmail;
        this.gmailpostmastertools = gmailpostmastertools_1.gmailpostmastertools;
        this.groupsmigration = groupsmigration_1.groupsmigration;
        this.groupssettings = groupssettings_1.groupssettings;
        this.healthcare = healthcare_1.healthcare;
        this.homegraph = homegraph_1.homegraph;
        this.iam = iam_1.iam;
        this.iamcredentials = iamcredentials_1.iamcredentials;
        this.iap = iap_1.iap;
        this.ideahub = ideahub_1.ideahub;
        this.identitytoolkit = identitytoolkit_1.identitytoolkit;
        this.ids = ids_1.ids;
        this.indexing = indexing_1.indexing;
        this.integrations = integrations_1.integrations;
        this.jobs = jobs_1.jobs;
        this.kgsearch = kgsearch_1.kgsearch;
        this.kmsinventory = kmsinventory_1.kmsinventory;
        this.language = language_1.language;
        this.libraryagent = libraryagent_1.libraryagent;
        this.licensing = licensing_1.licensing;
        this.lifesciences = lifesciences_1.lifesciences;
        this.localservices = localservices_1.localservices;
        this.logging = logging_1.logging;
        this.looker = looker_1.looker;
        this.managedidentities = managedidentities_1.managedidentities;
        this.manufacturers = manufacturers_1.manufacturers;
        this.marketingplatformadmin = marketingplatformadmin_1.marketingplatformadmin;
        this.memcache = memcache_1.memcache;
        this.metastore = metastore_1.metastore;
        this.migrationcenter = migrationcenter_1.migrationcenter;
        this.ml = ml_1.ml;
        this.monitoring = monitoring_1.monitoring;
        this.mybusinessaccountmanagement = mybusinessaccountmanagement_1.mybusinessaccountmanagement;
        this.mybusinessbusinesscalls = mybusinessbusinesscalls_1.mybusinessbusinesscalls;
        this.mybusinessbusinessinformation = mybusinessbusinessinformation_1.mybusinessbusinessinformation;
        this.mybusinesslodging = mybusinesslodging_1.mybusinesslodging;
        this.mybusinessnotifications = mybusinessnotifications_1.mybusinessnotifications;
        this.mybusinessplaceactions = mybusinessplaceactions_1.mybusinessplaceactions;
        this.mybusinessqanda = mybusinessqanda_1.mybusinessqanda;
        this.mybusinessverifications = mybusinessverifications_1.mybusinessverifications;
        this.networkconnectivity = networkconnectivity_1.networkconnectivity;
        this.networkmanagement = networkmanagement_1.networkmanagement;
        this.networksecurity = networksecurity_1.networksecurity;
        this.networkservices = networkservices_1.networkservices;
        this.notebooks = notebooks_1.notebooks;
        this.oauth2 = oauth2_1.oauth2;
        this.ondemandscanning = ondemandscanning_1.ondemandscanning;
        this.orgpolicy = orgpolicy_1.orgpolicy;
        this.osconfig = osconfig_1.osconfig;
        this.oslogin = oslogin_1.oslogin;
        this.pagespeedonline = pagespeedonline_1.pagespeedonline;
        this.paymentsresellersubscription = paymentsresellersubscription_1.paymentsresellersubscription;
        this.people = people_1.people;
        this.places = places_1.places;
        this.playablelocations = playablelocations_1.playablelocations;
        this.playcustomapp = playcustomapp_1.playcustomapp;
        this.playdeveloperreporting = playdeveloperreporting_1.playdeveloperreporting;
        this.playgrouping = playgrouping_1.playgrouping;
        this.playintegrity = playintegrity_1.playintegrity;
        this.plus = plus_1.plus;
        this.policyanalyzer = policyanalyzer_1.policyanalyzer;
        this.policysimulator = policysimulator_1.policysimulator;
        this.policytroubleshooter = policytroubleshooter_1.policytroubleshooter;
        this.poly = poly_1.poly;
        this.privateca = privateca_1.privateca;
        this.prod_tt_sasportal = prod_tt_sasportal_1.prod_tt_sasportal;
        this.publicca = publicca_1.publicca;
        this.pubsub = pubsub_1.pubsub;
        this.pubsublite = pubsublite_1.pubsublite;
        this.rapidmigrationassessment = rapidmigrationassessment_1.rapidmigrationassessment;
        this.readerrevenuesubscriptionlinking = readerrevenuesubscriptionlinking_1.readerrevenuesubscriptionlinking;
        this.realtimebidding = realtimebidding_1.realtimebidding;
        this.recaptchaenterprise = recaptchaenterprise_1.recaptchaenterprise;
        this.recommendationengine = recommendationengine_1.recommendationengine;
        this.recommender = recommender_1.recommender;
        this.redis = redis_1.redis;
        this.remotebuildexecution = remotebuildexecution_1.remotebuildexecution;
        this.reseller = reseller_1.reseller;
        this.resourcesettings = resourcesettings_1.resourcesettings;
        this.retail = retail_1.retail;
        this.run = run_1.run;
        this.runtimeconfig = runtimeconfig_1.runtimeconfig;
        this.safebrowsing = safebrowsing_1.safebrowsing;
        this.sasportal = sasportal_1.sasportal;
        this.script = script_1.script;
        this.searchads360 = searchads360_1.searchads360;
        this.searchconsole = searchconsole_1.searchconsole;
        this.secretmanager = secretmanager_1.secretmanager;
        this.securitycenter = securitycenter_1.securitycenter;
        this.serviceconsumermanagement = serviceconsumermanagement_1.serviceconsumermanagement;
        this.servicecontrol = servicecontrol_1.servicecontrol;
        this.servicedirectory = servicedirectory_1.servicedirectory;
        this.servicemanagement = servicemanagement_1.servicemanagement;
        this.servicenetworking = servicenetworking_1.servicenetworking;
        this.serviceusage = serviceusage_1.serviceusage;
        this.sheets = sheets_1.sheets;
        this.siteVerification = siteVerification_1.siteVerification;
        this.slides = slides_1.slides;
        this.smartdevicemanagement = smartdevicemanagement_1.smartdevicemanagement;
        this.solar = solar_1.solar;
        this.sourcerepo = sourcerepo_1.sourcerepo;
        this.spanner = spanner_1.spanner;
        this.speech = speech_1.speech;
        this.sql = sql_1.sql;
        this.sqladmin = sqladmin_1.sqladmin;
        this.storage = storage_1.storage;
        this.storagetransfer = storagetransfer_1.storagetransfer;
        this.streetviewpublish = streetviewpublish_1.streetviewpublish;
        this.sts = sts_1.sts;
        this.tagmanager = tagmanager_1.tagmanager;
        this.tasks = tasks_1.tasks;
        this.testing = testing_1.testing;
        this.texttospeech = texttospeech_1.texttospeech;
        this.toolresults = toolresults_1.toolresults;
        this.tpu = tpu_1.tpu;
        this.trafficdirector = trafficdirector_1.trafficdirector;
        this.transcoder = transcoder_1.transcoder;
        this.translate = translate_1.translate;
        this.travelimpactmodel = travelimpactmodel_1.travelimpactmodel;
        this.vault = vault_1.vault;
        this.vectortile = vectortile_1.vectortile;
        this.verifiedaccess = verifiedaccess_1.verifiedaccess;
        this.versionhistory = versionhistory_1.versionhistory;
        this.videointelligence = videointelligence_1.videointelligence;
        this.vision = vision_1.vision;
        this.vmmigration = vmmigration_1.vmmigration;
        this.vmwareengine = vmwareengine_1.vmwareengine;
        this.vpcaccess = vpcaccess_1.vpcaccess;
        this.walletobjects = walletobjects_1.walletobjects;
        this.webfonts = webfonts_1.webfonts;
        this.webmasters = webmasters_1.webmasters;
        this.webrisk = webrisk_1.webrisk;
        this.websecurityscanner = websecurityscanner_1.websecurityscanner;
        this.workflowexecutions = workflowexecutions_1.workflowexecutions;
        this.workflows = workflows_1.workflows;
        this.workloadmanager = workloadmanager_1.workloadmanager;
        this.workspaceevents = workspaceevents_1.workspaceevents;
        this.workstations = workstations_1.workstations;
        this.youtube = youtube_1.youtube;
        this.youtubeAnalytics = youtubeAnalytics_1.youtubeAnalytics;
        this.youtubereporting = youtubereporting_1.youtubereporting;
    }
}
exports.GeneratedAPIs = GeneratedAPIs;
