import { ModalInput, ModaButtonSend, FormContainer,FormTitle,InputName,ModalText } from './SuggestForm.styled';
import {useState} from 'react';
import axios from 'axios';

const SuggestForm = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        description: ''
    });

    async function sendFeedback (e) {
        e.preventDefault();

        const data = {...feedback, type: 'suggestion'};

        try {
            const response = await axios.post('https://api.seeyou.eu/api/v1/public/feedback', data)

            setFeedback({
                name: '',
                email: '',
                description: ''
            })
        } catch (e) {
            console.log(e);
        }
    }

    return(
     <>
     <main>
        <FormContainer>
            <FormTitle>Suggest a Feature</FormTitle>
            <form>
                <InputName>Name</InputName>
                <ModalInput placeholder="Name" type="text" value={feedback.name} onChange={e => setFeedback({...feedback, name: e.target.value})} />
                <InputName>Email Address</InputName>
                <ModalInput placeholder="Email Address" type="text" value={feedback.email} onChange={e => setFeedback({...feedback, email: e.target.value})} />

                <ModalText rows="5" placeholder="Please describe the problem" type="text" value={feedback.description} onChange={e => setFeedback({...feedback, description: e.target.value})} />

                <ModaButtonSend type="submit" onClick={sendFeedback}>Send</ModaButtonSend>
            </form>
        </FormContainer>
     </main>
     </>
    );
};
export default SuggestForm;
