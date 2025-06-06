/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace tasks_v1 {
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
     * Google Tasks API
     *
     * The Google Tasks API lets you manage your tasks and task lists.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const tasks = google.tasks('v1');
     * ```
     */
    export class Tasks {
        context: APIRequestContext;
        tasklists: Resource$Tasklists;
        tasks: Resource$Tasks;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    export interface Schema$Task {
        /**
         * Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
         */
        completed?: string | null;
        /**
         * Flag indicating whether the task has been deleted. The default is False.
         */
        deleted?: boolean | null;
        /**
         * Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API.
         */
        due?: string | null;
        /**
         * ETag of the resource.
         */
        etag?: string | null;
        /**
         * Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.
         */
        hidden?: boolean | null;
        /**
         * Task identifier.
         */
        id?: string | null;
        /**
         * Output only. Type of the resource. This is always "tasks#task".
         */
        kind?: string | null;
        /**
         * Output only. Collection of links. This collection is read-only.
         */
        links?: Array<{
            description?: string;
            link?: string;
            type?: string;
        }> | null;
        /**
         * Notes describing the task. Optional. Maximum length allowed: 8192 characters.
         */
        notes?: string | null;
        /**
         * Output only. Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level.
         */
        parent?: string | null;
        /**
         * Output only. String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). Use the "move" method to move the task to another position.
         */
        position?: string | null;
        /**
         * Output only. URL pointing to this task. Used to retrieve, update, or delete this task.
         */
        selfLink?: string | null;
        /**
         * Status of the task. This is either "needsAction" or "completed".
         */
        status?: string | null;
        /**
         * Title of the task. Maximum length allowed: 1024 characters.
         */
        title?: string | null;
        /**
         * Output only. Last modification time of the task (as a RFC 3339 timestamp).
         */
        updated?: string | null;
        /**
         * Output only. An absolute link to the task in the Google Tasks Web UI.
         */
        webViewLink?: string | null;
    }
    export interface Schema$TaskList {
        /**
         * ETag of the resource.
         */
        etag?: string | null;
        /**
         * Task list identifier.
         */
        id?: string | null;
        /**
         * Output only. Type of the resource. This is always "tasks#taskList".
         */
        kind?: string | null;
        /**
         * Output only. URL pointing to this task list. Used to retrieve, update, or delete this task list.
         */
        selfLink?: string | null;
        /**
         * Title of the task list. Maximum length allowed: 1024 characters.
         */
        title?: string | null;
        /**
         * Output only. Last modification time of the task list (as a RFC 3339 timestamp).
         */
        updated?: string | null;
    }
    export interface Schema$TaskLists {
        /**
         * ETag of the resource.
         */
        etag?: string | null;
        /**
         * Collection of task lists.
         */
        items?: Schema$TaskList[];
        /**
         * Type of the resource. This is always "tasks#taskLists".
         */
        kind?: string | null;
        /**
         * Token that can be used to request the next page of this result.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$Tasks {
        /**
         * ETag of the resource.
         */
        etag?: string | null;
        /**
         * Collection of tasks.
         */
        items?: Schema$Task[];
        /**
         * Type of the resource. This is always "tasks#tasks".
         */
        kind?: string | null;
        /**
         * Token used to access the next page of this result.
         */
        nextPageToken?: string | null;
    }
    export class Resource$Tasklists {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes the authenticated user's specified task list.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Tasklists$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Tasklists$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Tasklists$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Tasklists$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Tasklists$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Returns the authenticated user's specified task list.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Tasklists$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Tasklists$Get, options?: MethodOptions): GaxiosPromise<Schema$TaskList>;
        get(params: Params$Resource$Tasklists$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Tasklists$Get, options: MethodOptions | BodyResponseCallback<Schema$TaskList>, callback: BodyResponseCallback<Schema$TaskList>): void;
        get(params: Params$Resource$Tasklists$Get, callback: BodyResponseCallback<Schema$TaskList>): void;
        get(callback: BodyResponseCallback<Schema$TaskList>): void;
        /**
         * Creates a new task list and adds it to the authenticated user's task lists. A user can have up to 2000 lists at a time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Tasklists$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Tasklists$Insert, options?: MethodOptions): GaxiosPromise<Schema$TaskList>;
        insert(params: Params$Resource$Tasklists$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Tasklists$Insert, options: MethodOptions | BodyResponseCallback<Schema$TaskList>, callback: BodyResponseCallback<Schema$TaskList>): void;
        insert(params: Params$Resource$Tasklists$Insert, callback: BodyResponseCallback<Schema$TaskList>): void;
        insert(callback: BodyResponseCallback<Schema$TaskList>): void;
        /**
         * Returns all the authenticated user's task lists. A user can have up to 2000 lists at a time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Tasklists$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Tasklists$List, options?: MethodOptions): GaxiosPromise<Schema$TaskLists>;
        list(params: Params$Resource$Tasklists$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Tasklists$List, options: MethodOptions | BodyResponseCallback<Schema$TaskLists>, callback: BodyResponseCallback<Schema$TaskLists>): void;
        list(params: Params$Resource$Tasklists$List, callback: BodyResponseCallback<Schema$TaskLists>): void;
        list(callback: BodyResponseCallback<Schema$TaskLists>): void;
        /**
         * Updates the authenticated user's specified task list. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Tasklists$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Tasklists$Patch, options?: MethodOptions): GaxiosPromise<Schema$TaskList>;
        patch(params: Params$Resource$Tasklists$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Tasklists$Patch, options: MethodOptions | BodyResponseCallback<Schema$TaskList>, callback: BodyResponseCallback<Schema$TaskList>): void;
        patch(params: Params$Resource$Tasklists$Patch, callback: BodyResponseCallback<Schema$TaskList>): void;
        patch(callback: BodyResponseCallback<Schema$TaskList>): void;
        /**
         * Updates the authenticated user's specified task list.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Tasklists$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Tasklists$Update, options?: MethodOptions): GaxiosPromise<Schema$TaskList>;
        update(params: Params$Resource$Tasklists$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Tasklists$Update, options: MethodOptions | BodyResponseCallback<Schema$TaskList>, callback: BodyResponseCallback<Schema$TaskList>): void;
        update(params: Params$Resource$Tasklists$Update, callback: BodyResponseCallback<Schema$TaskList>): void;
        update(callback: BodyResponseCallback<Schema$TaskList>): void;
    }
    export interface Params$Resource$Tasklists$Delete extends StandardParameters {
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    export interface Params$Resource$Tasklists$Get extends StandardParameters {
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    export interface Params$Resource$Tasklists$Insert extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$TaskList;
    }
    export interface Params$Resource$Tasklists$List extends StandardParameters {
        /**
         * Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).
         */
        maxResults?: number;
        /**
         * Token specifying the result page to return. Optional.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Tasklists$Patch extends StandardParameters {
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TaskList;
    }
    export interface Params$Resource$Tasklists$Update extends StandardParameters {
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TaskList;
    }
    export class Resource$Tasks {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        clear(params: Params$Resource$Tasks$Clear, options: StreamMethodOptions): GaxiosPromise<Readable>;
        clear(params?: Params$Resource$Tasks$Clear, options?: MethodOptions): GaxiosPromise<void>;
        clear(params: Params$Resource$Tasks$Clear, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        clear(params: Params$Resource$Tasks$Clear, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        clear(params: Params$Resource$Tasks$Clear, callback: BodyResponseCallback<void>): void;
        clear(callback: BodyResponseCallback<void>): void;
        /**
         * Deletes the specified task from the task list.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Tasks$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Tasks$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Tasks$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Tasks$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Tasks$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Returns the specified task.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Tasks$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Tasks$Get, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        get(params: Params$Resource$Tasks$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Tasks$Get, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        get(params: Params$Resource$Tasks$Get, callback: BodyResponseCallback<Schema$Task>): void;
        get(callback: BodyResponseCallback<Schema$Task>): void;
        /**
         * Creates a new task on the specified task list. A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Tasks$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Tasks$Insert, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        insert(params: Params$Resource$Tasks$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Tasks$Insert, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        insert(params: Params$Resource$Tasks$Insert, callback: BodyResponseCallback<Schema$Task>): void;
        insert(callback: BodyResponseCallback<Schema$Task>): void;
        /**
         * Returns all tasks in the specified task list. A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Tasks$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Tasks$List, options?: MethodOptions): GaxiosPromise<Schema$Tasks>;
        list(params: Params$Resource$Tasks$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Tasks$List, options: MethodOptions | BodyResponseCallback<Schema$Tasks>, callback: BodyResponseCallback<Schema$Tasks>): void;
        list(params: Params$Resource$Tasks$List, callback: BodyResponseCallback<Schema$Tasks>): void;
        list(callback: BodyResponseCallback<Schema$Tasks>): void;
        /**
         * Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks. A user can have up to 2,000 subtasks per task.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        move(params: Params$Resource$Tasks$Move, options: StreamMethodOptions): GaxiosPromise<Readable>;
        move(params?: Params$Resource$Tasks$Move, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        move(params: Params$Resource$Tasks$Move, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        move(params: Params$Resource$Tasks$Move, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        move(params: Params$Resource$Tasks$Move, callback: BodyResponseCallback<Schema$Task>): void;
        move(callback: BodyResponseCallback<Schema$Task>): void;
        /**
         * Updates the specified task. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Tasks$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Tasks$Patch, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        patch(params: Params$Resource$Tasks$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Tasks$Patch, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        patch(params: Params$Resource$Tasks$Patch, callback: BodyResponseCallback<Schema$Task>): void;
        patch(callback: BodyResponseCallback<Schema$Task>): void;
        /**
         * Updates the specified task.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Tasks$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Tasks$Update, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        update(params: Params$Resource$Tasks$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Tasks$Update, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        update(params: Params$Resource$Tasks$Update, callback: BodyResponseCallback<Schema$Task>): void;
        update(callback: BodyResponseCallback<Schema$Task>): void;
    }
    export interface Params$Resource$Tasks$Clear extends StandardParameters {
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    export interface Params$Resource$Tasks$Delete extends StandardParameters {
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    export interface Params$Resource$Tasks$Get extends StandardParameters {
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    export interface Params$Resource$Tasks$Insert extends StandardParameters {
        /**
         * Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
         */
        parent?: string;
        /**
         * Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
         */
        previous?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Task;
    }
    export interface Params$Resource$Tasks$List extends StandardParameters {
        /**
         * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
         */
        completedMax?: string;
        /**
         * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
         */
        completedMin?: string;
        /**
         * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
         */
        dueMax?: string;
        /**
         * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
         */
        dueMin?: string;
        /**
         * Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).
         */
        maxResults?: number;
        /**
         * Token specifying the result page to return. Optional.
         */
        pageToken?: string;
        /**
         * Flag indicating whether completed tasks are returned in the result. Optional. The default is True. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps.
         */
        showCompleted?: boolean;
        /**
         * Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
         */
        showDeleted?: boolean;
        /**
         * Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
         */
        showHidden?: boolean;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
         */
        updatedMin?: string;
    }
    export interface Params$Resource$Tasks$Move extends StandardParameters {
        /**
         * New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
         */
        parent?: string;
        /**
         * New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
         */
        previous?: string;
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    export interface Params$Resource$Tasks$Patch extends StandardParameters {
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Task;
    }
    export interface Params$Resource$Tasks$Update extends StandardParameters {
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Task;
    }
    export {};
}
