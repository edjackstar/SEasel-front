import CompositionApiModel from "./admin/CompositionApiModel";
import UserApiModel from "./admin/UserApiModel";

export default interface FeedbackApiModel {
    id: number;
    comment: string;
    created_at: string;
    mark: number;
    composition: CompositionApiModel;
    user: UserApiModel;
}