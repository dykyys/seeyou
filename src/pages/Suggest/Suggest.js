import SuggestForm from '../../components/Suggest/SuggestForm';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Suggest = () => {
    ScrollToTop();
    return (
        <>
        <main>
            <SuggestForm />
        </main>
        </>
    );
};
export default Suggest;