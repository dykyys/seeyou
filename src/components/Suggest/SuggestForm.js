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

        const data = {...feedback, type: 'suggesting'};

        try {
            const response = await axios.post('https://api.seeyou.eu/api/v1/public/feedback', data)
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
                <ModalInput placeholder="Name" type="text" onChange={e => setFeedback({...feedback, name: e.target.value})} />
                <InputName>Email Address</InputName>
                <ModalInput placeholder="Email Address" type="text" onChange={e => setFeedback({...feedback, email: e.target.value})} />

                <ModalText rows="5" placeholder="Please describe the problem" type="text" onChange={e => setFeedback({...feedback, description: e.target.value})} />

                <ModaButtonSend type="submit" onClick={sendFeedback}>Send</ModaButtonSend>
            </form>
        </FormContainer>
     </main>
     </>
    );
};
export default SuggestForm;
