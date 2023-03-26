import mongoose from 'mongoose';
export declare const ProductsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name?: string;
    price?: string;
    description?: string;
    category?: string;
    rating?: number;
    supply?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name?: string;
    price?: string;
    description?: string;
    category?: string;
    rating?: number;
    supply?: number;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name?: string;
    price?: string;
    description?: string;
    category?: string;
    rating?: number;
    supply?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
