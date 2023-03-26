declare const sortType: readonly ["asc", "desc"];
export type Sort = (typeof sortType)[number];
export declare class GetAllRequest {
    page: number;
    pageSize: number;
    field: string;
    sort: Sort;
}
export {};
