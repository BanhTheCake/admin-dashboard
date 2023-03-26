import mongoose from 'mongoose';
export declare const UsersSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    role: "admin" | "user" | "superAdmin";
    transactions: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    }[];
    name?: string;
    email?: string;
    password?: string;
    city?: string;
    state?: string;
    country?: string;
    occupation?: string;
    phoneNumber?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    role: "admin" | "user" | "superAdmin";
    transactions: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    }[];
    name?: string;
    email?: string;
    password?: string;
    city?: string;
    state?: string;
    country?: string;
    occupation?: string;
    phoneNumber?: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    role: "admin" | "user" | "superAdmin";
    transactions: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    }[];
    name?: string;
    email?: string;
    password?: string;
    city?: string;
    state?: string;
    country?: string;
    occupation?: string;
    phoneNumber?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
