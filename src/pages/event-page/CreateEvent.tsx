import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { State } from "../../redux/index";
import { ChangeEvent } from "react";
import axios from "axios";


const CreateEvent = (props: any) => {
  const [loading, setLoading] = useState(false);
  
  const [event, setEvent] = useState<any>({
      name: '',
      description: '',
      start: '',
      end: '',
      photo: null,
  })
//   const [name, setName] = useState<string>('');
//   const [description, setDescription] = useState<string>('');
//   const [start, setStart] = useState<string>('');
//   const [end, setEnd] = useState<string>('');
//   const [image, setImage] = useState<any>(null);
  const [error, setError] = useState<string>('');

  let history = useHistory();

  //   Get token, userId from state
  const token = useSelector((state: State) => state.auth.token);


      const goBack = () => {
        history.goBack()
      }

      const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;

          setEvent({...event, [name]: value})
      }

      const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        let file = e.target.files![0];
        let name = "photo";

        setEvent({...event, [name]: file })
      }

      const onSubmit = () => {
        //   console.log('EVENTINGS: ', event)
        if (!event.name || !event.description || !event.start || !event.end || !event.photo) {
            setError('Please fill in all fields.')
            return toast.warn("Fill in all fields");
        }

        let data = new FormData();

        Object.keys(event).forEach((key, value) => {
            console.log('EVENT KEY: ', event[key]);
            data.append(key, event[key]);
        });

       console.log('DATA: ', data);
    
        setLoading(true);

            const headers =  {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'multipart/form-data'
          };

    
        axios.post("http://localhost:4000/api/v1/events", data, { headers: headers }).then((res) => {
            console.log("Create Response: ", res);
            setLoading(false);
            return toast.success("Event Created.");
        })
        .catch((err) => {
            console.log("Create ERRRROOORRR: ", err);
            setLoading(false);
            return toast.error(err)
        });
      }


  return (
    <div className='mt-5'>
        <Row>
            <Col md="2"></Col>
            <Col md="8">
                <div className="d-flex justify-content-center">
                    <div className="reset-container">
                    <div className='d-flex justify-content-between'>
                        <h3 className="mb-0 logo-text">Create an Event</h3>
                        <p className="text-btn mt-1" onClick={goBack}><i className='fa fa-angle-left'></i> back</p>
                    </div>
                    
                    {/* <div className="text-muted mt-3">Get your new account</div> */}
                    <br />
                    <label className="lmb-5">Name:</label>
                    <input
                        placeholder={'Event name'}
                        name={'name'}
                        type={'text'}
                        onChange={(e) => onChangeText(e)}
                        value={event.name}
                        disabled={loading}
                        className="event-input"
                        required
                    />
                    <br />
                    <label className="lmb-5">Description:</label>
                    <input
                        placeholder={'description'}
                        name={'description'}
                        type={'text'}
                        onChange={(e) => onChangeText(e)}
                        value={event.description}
                        disabled={loading}
                        className="event-input"
                        required
                    />
                    <br />
                    <label className="lmb-5">Start Date:</label>
                    <input
                        name='start'
                        type='datetime-local'
                        onChange={(e) => onChangeText(e)}
                        value={event.start}
                        disabled={loading}
                        className="event-input"
                        required
                    />
                    <br />
                    <label className="lmb-5">End Date:</label>
                    <input
                        name='end'
                        type='datetime-local'
                        onChange={(e) => onChangeText(e)}
                        value={event.end}
                        disabled={loading}
                        className="event-input"
                        required
                    />
                    <br />
                    <label className="lmb-5">Event Image: </label>
                    <input
                        name='photo'
                        type='file'
                        onChange={(e) => onChangeImage(e)}
                        // value={event.image}
                        disabled={loading}
                        className="event-input"
                        required
                    />
                    {error ? (
                            <span className="error-msg">{error}</span>
                            ) : '' } 
                    <button disabled={false} className="search-btn pass mt-5" onClick={() => onSubmit() }>
                        Create Event
                        {
                        loading ? <i className='fas fa-spinner fa-spin ml-5'></i> : ''
                        }
                    </button>
                    </div>
                    {/* <div className="text-muted mt-5">© Eventings Inc | All Rights Reserved</div> */}
                </div>
            </Col>
            <Col md="2"></Col>
        </Row>
    </div>
  );
}

export default CreateEvent;