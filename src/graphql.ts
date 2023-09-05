
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    NONE = "NONE",
    SYSTEM = "SYSTEM",
    ADMIN = "ADMIN",
    COLLECTOR = "COLLECTOR",
    DYCOLLECTOR = "DYCOLLECTOR",
    SUPERITENDANT = "SUPERITENDANT",
    HEADCLERK = "HEADCLERK",
    MAMLATDAR = "MAMLATDAR",
    ATP = "ATP",
    CITYSURVEY = "CITYSURVEY",
    COURTCLERK = "COURTCLERK",
    USER = "USER"
}

export enum Department {
    NONE = "NONE",
    PDA = "PDA",
    EOCS = "EOCS",
    LANDSECTION = "LANDSECTION",
    MAMLATDAR = "MAMLATDAR",
    COLLECTOR = "COLLECTOR",
    DYCOLLECTOR = "DYCOLLECTOR"
}

export enum status {
    NONE = "NONE",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum FormType {
    NONE = "NONE",
    SALE = "SALE",
    GIFT = "GIFT",
    PARTITION = "PARTITION",
    MORTGAGE = "MORTGAGE",
    NA = "NA",
    SUBDIVISON = "SUBDIVISON",
    AMALGAMATION = "AMALGAMATION",
    LEASE = "LEASE",
    COURT = "COURT",
    RTI = "RTI",
    GRANTGOVTLAND = "GRANTGOVTLAND",
    ACQUISITION = "ACQUISITION"
}

export enum QueryType {
    NONE = "NONE",
    INTRA = "INTRA",
    INTER = "INTER",
    PUBLIC = "PUBLIC"
}

export enum QueryStatus {
    NONE = "NONE",
    SENT = "SENT",
    RECEIVED = "RECEIVED",
    REPLIED = "REPLIED",
    RESOLVED = "RESOLVED"
}

export enum queryStatus {
    NONE = "NONE",
    SUBMIT = "SUBMIT",
    INPROCESS = "INPROCESS",
    QUERYRAISED = "QUERYRAISED",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    PAYMENTPENDING = "PAYMENTPENDING",
    CERTIFICATEGRANT = "CERTIFICATEGRANT",
    COMPLETED = "COMPLETED"
}

export enum ScSt {
    NONE = "NONE",
    GENERAL = "GENERAL",
    ST = "ST",
    SC = "SC",
    OTHER = "OTHER"
}

export enum TypeOfNA {
    NONE = "NONE",
    RESIDENTIAL = "RESIDENTIAL",
    COMMERCIAL = "COMMERCIAL",
    INDUSTRIAL = "INDUSTRIAL",
    RESIDENTIALCUMCOMMERCIAL = "RESIDENTIALCUMCOMMERCIAL"
}

export enum Agree {
    NONE = "NONE",
    YES = "YES",
    NO = "NO"
}

export enum UserType {
    USER = "USER",
    DEPARTMENT = "DEPARTMENT"
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface MobileLoginInput {
    contact?: Nullable<string>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
}

export interface SearchQueryInput {
    stage: FormType;
    form_id: number;
    user_id?: Nullable<number>;
    status?: Nullable<status>;
    query_type?: Nullable<QueryType>;
}

export interface SearchCommonInput {
    form_id?: Nullable<number>;
    user_id?: Nullable<number>;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village?: Nullable<string>;
    name?: Nullable<string>;
    number?: Nullable<string>;
    event_date?: Nullable<DateTime>;
    form_status?: Nullable<number>;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface FilterCommonInput {
    user_type?: Nullable<UserType>;
    user_id: number;
    form_type?: Nullable<FormType>;
}

export interface SignUpUserInput {
    name: string;
    contact: string;
    password: string;
}

export interface UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    contact?: Nullable<string>;
    pic_url?: Nullable<string>;
    role?: Nullable<Role>;
    department?: Nullable<Department>;
    address?: Nullable<string>;
    user_uid?: Nullable<string>;
    status?: Nullable<status>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateQueryInput {
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status?: Nullable<status>;
}

export interface UpdateQueryInput {
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status?: Nullable<status>;
    id: number;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateCommonInput {
    form_id: number;
    user_id: number;
    auth_user_id: string;
    focal_user_id: string;
    intra_user_id: string;
    inter_user_id: string;
    village: string;
    name: string;
    number: string;
    event_date: DateTime;
    form_status: number;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<status>;
}

export interface UpdateCommonInput {
    form_id?: Nullable<number>;
    user_id?: Nullable<number>;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village?: Nullable<string>;
    name?: Nullable<string>;
    number?: Nullable<string>;
    event_date?: Nullable<DateTime>;
    form_status?: Nullable<number>;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateNaInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    scst?: Nullable<ScSt>;
    occupation?: Nullable<string>;
    govt_employee?: Nullable<string>;
    village_id: number;
    survey_no: string;
    sub_division: string;
    land_use?: Nullable<string>;
    land_situate?: Nullable<string>;
    electric?: Nullable<string>;
    road_access?: Nullable<string>;
    road_adjoin?: Nullable<string>;
    na_reason?: Nullable<string>;
    addition_land?: Nullable<string>;
    past_appln_reject?: Nullable<string>;
    agri_evidence_url: string;
    govt_evidence_url: string;
    land_purpose?: Nullable<TypeOfNA>;
    land_site_plan_url: string;
    nakel_url_1_14: string;
    nakel_rr_14: string;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<status>;
}

export interface UpdateNaInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    scst?: Nullable<ScSt>;
    occupation?: Nullable<string>;
    govt_employee?: Nullable<string>;
    village_id: number;
    survey_no: string;
    sub_division: string;
    land_use?: Nullable<string>;
    land_situate?: Nullable<string>;
    electric?: Nullable<string>;
    road_access?: Nullable<string>;
    road_adjoin?: Nullable<string>;
    na_reason?: Nullable<string>;
    addition_land?: Nullable<string>;
    past_appln_reject?: Nullable<string>;
    agri_evidence_url: string;
    govt_evidence_url: string;
    land_purpose?: Nullable<TypeOfNA>;
    land_site_plan_url: string;
    nakel_url_1_14: string;
    nakel_rr_14: string;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface Auth {
    token: string;
    id: number;
    design_point_id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
    contact?: Nullable<string>;
    otp?: Nullable<string>;
    pic_url?: Nullable<string>;
    access_kay?: Nullable<string>;
    role: Role;
    department: Department;
    status: status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface User {
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
    contact?: Nullable<string>;
    otp?: Nullable<string>;
    pic_url?: Nullable<string>;
    address?: Nullable<string>;
    user_uid?: Nullable<string>;
    role: Role;
    department: Department;
    status: status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface QueryData {
    id: number;
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status: status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    from_user?: Nullable<User>;
    to_user?: Nullable<User>;
}

export interface Common {
    id: number;
    form_id: number;
    user_id: number;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village: string;
    name: string;
    number: string;
    event_date: DateTime;
    form_status: number;
    form_type: FormType;
    query_status: queryStatus;
    status: status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt: DateTime;
}

export interface FileCount {
    MARRIAGE: number;
    RELIGIOUS: number;
    ROADSHOW: number;
    GENERIC: number;
}

export interface VillageCount {
    count: number;
    village: string;
}

export interface OfficerCount {
    count: number;
    auth_user_id: string;
}

export interface FileProgressDetails {
    pending: number;
    completed: number;
    rejected: number;
}

export interface FileProgress {
    MARRIAGE: FileProgressDetails;
    RELIGIOUS: FileProgressDetails;
    ROADSHOW: FileProgressDetails;
    GENERIC: FileProgressDetails;
}

export interface VillageProgressDetails {
    formType: string;
    count: number;
}

export interface VillageProgress {
    village: string;
    fileCounts: VillageProgressDetails[];
}

export interface Village {
    id: number;
    name: string;
}

export interface Na {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    scst?: Nullable<ScSt>;
    occupation?: Nullable<string>;
    govt_employee?: Nullable<string>;
    village_id: number;
    survey_no: string;
    sub_division: string;
    land_use?: Nullable<string>;
    land_situate?: Nullable<string>;
    electric?: Nullable<string>;
    road_access?: Nullable<string>;
    road_adjoin?: Nullable<string>;
    na_reason?: Nullable<string>;
    addition_land?: Nullable<string>;
    past_appln_reject?: Nullable<string>;
    agri_evidence_url: string;
    govt_evidence_url: string;
    land_purpose?: Nullable<TypeOfNA>;
    land_site_plan_url: string;
    nakel_url_1_14: string;
    nakel_rr_14: string;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<status>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface IQuery {
    signin(loginUserInput: LoginUserInput): Auth | Promise<Auth>;
    verifyOtp(mobileLoginInput: MobileLoginInput): Auth | Promise<Auth>;
    getUserById(id: number): User | Promise<User>;
    getAllVillage(): Village[] | Promise<Village[]>;
    getVillageById(id: number): Village | Promise<Village>;
    getAllQuery(): QueryData[] | Promise<QueryData[]>;
    getQueryById(id: number): QueryData | Promise<QueryData>;
    searchQuery(searchQueryInput: SearchQueryInput): QueryData[] | Promise<QueryData[]>;
    getAllCommon(): Common[] | Promise<Common[]>;
    getAllCommonById(id: number): Common | Promise<Common>;
    searchCommon(searchCommonInput: SearchCommonInput): Common[] | Promise<Common[]>;
    filterCommon(filterCommonInput: FilterCommonInput): Common[] | Promise<Common[]>;
    getFileCount(): FileCount | Promise<FileCount>;
    villageFileCount(): VillageCount[] | Promise<VillageCount[]>;
    officerFileCount(): OfficerCount[] | Promise<OfficerCount[]>;
    officerFileProgress(): FileProgress | Promise<FileProgress>;
    villageFileProgress(): VillageProgress[] | Promise<VillageProgress[]>;
    getAllNa(): Na[] | Promise<Na[]>;
    getNaById(id: number): Na | Promise<Na>;
}

export interface IMutation {
    signup(signUpUserInput: SignUpUserInput): Auth | Promise<Auth>;
    mobileLogin(mobileLoginInput: MobileLoginInput): Auth | Promise<Auth>;
    updateUserById(updateUserInput: UpdateUserInput): User | Promise<User>;
    createQuery(createQueryInput: CreateQueryInput): QueryData | Promise<QueryData>;
    updateQueryById(updateQueryInput: UpdateQueryInput): QueryData | Promise<QueryData>;
    deleteQueryById(updateQueryInput: UpdateQueryInput): QueryData | Promise<QueryData>;
    createCommon(createCommonInput: CreateCommonInput): Common | Promise<Common>;
    updateCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
    deleteCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
    createNa(createNaInput: CreateNaInput): Na | Promise<Na>;
    updateNaById(updateNaInput: UpdateNaInput): Na | Promise<Na>;
    deleteNaById(updateNaInput: UpdateNaInput): Na | Promise<Na>;
}

export type DateTime = any;
type Nullable<T> = T | null;
