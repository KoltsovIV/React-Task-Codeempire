import ErrorMessage from "../components/errorMessage/error-message";
import Spinner from "../components/spinner/spinner";

export class LoadingService {
    static manageContent = (loading: boolean, error: boolean, content: unknown ) => {
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const viewedContent = !(loading || errorMessage) ? content : null;

        return <>
                {spinner}
                {errorMessage}
                {viewedContent}
            </>
    }
}

export default new  LoadingService;
