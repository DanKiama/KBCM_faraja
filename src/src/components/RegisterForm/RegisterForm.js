import React from 'react'
import Link from 'gatsby-link'
import Container from '../container';
import { userInfo } from 'os';
import styles from './registerForm.module.css'

const NETLIFY_FUNC =
    'master.farajaraftingchallenge.org.com/.netlify/functions'
const NETLIFY_URL = 'https://master.farajaraftingchallenge.org'
export default class RegisterForm extends React.Component {


    constructor(data) {
        super(data);

        this.state = this.initialState();


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState = () => {
        return {
            team: null,
            user: this.props.user,
            teamName: '',
            teamLeader: '',
            raftingDay: '',
            raftingTime: '',
            message: '',
            step: 1
        }

    }
    componentDidUpdate(prevProps) {
        if(prevProps.user != this.props.user){
            this.setState({ user: this.props.user });
            this.getTeam();
        }
       
    }
    componentDidMount() {
     
     
     
    }
    getTeam() {
        fetch(`https://${NETLIFY_FUNC}/fetchteam?id=${this.props.user.id}`)
            .then(x => x.json())
            .then(x => {
                this.setState({ team: x, teamName: x.teamName, teamLeader: x.teamLeader, raftingDay: x.raftingDay, raftingTime: x.raftingTime, message: x.message })
                console.log("==================team =======================");
                console.log(x);
            })
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = e => {
        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        }
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "teams", ...this.state })
        })
            .then(() => this.setState({ step: this.state.step + 1 }))
            .catch(error => alert(error));

        e.preventDefault();
    };
    render() {
        const { user, teamName, teamLeader, raftingDay, raftingTime, message, step, team } = this.state;
        let userId = user ? user.id : 0;
        let userEmail = user ? user.email : '';
      
        return (
            <Container>
                <div className={styles.registerForm}>
                    <div className="row justify-content-inbetween">
                        <div className="col-md-8">
                            {team && <h3>Welcome back {user.user_metadata.full_name}, please review your team here!</h3>}
                            {!team && step == 1 && <h3> Step 1 - Please create your team</h3>}
                        </div>
                        <div className="col-md-4"><div data-netlify-identity-menu></div> </div>

                    </div>



                    {step == 1 &&
                        <div>

                            <form name="teams" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
                                <input type="hidden" name="form-name" value="teams" />
                                <input type="hidden" name="teamId" value={`team-${userId}`} />
                                <div className="d-none"><input type="text" name="bot-field" /></div>

                                <div className="form-group">
                                    <label>Team Name</label>
                                    <input className="form-control" type="text" name="teamName" value={teamName} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label>Team Leader</label>
                                    <input type="hidden" name="teamLeader" value={teamLeader} onChange={this.handleChange} />
                                    <span> {userEmail}</span>
                                </div>
                                <div className="form-group">
                                    <label>Rafting Day</label>
                                    <select className="form-control" id="raftingDay" value={raftingDay} onChange={this.handleChange}>
                                        <option>21 June</option>
                                        <option>22 June</option>
                                        <option>23 June</option>

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Rafting Time</label>
                                    <select className="form-control" id="raftingTime" value={raftingTime} onChange={this.handleChange} >
                                        <option>Morning</option>
                                        <option>Afternoon</option>

                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Comment</label>
                                    <textarea className="form-control" name="message" value={message} onChange={this.handleChange}></textarea>
                                </div>

                                <a className="btn btn-primary" onClick={this.handleSubmit}>Next</a>
                            </form>
                        </div>
                    }
                    {step == 2 &&
                    <div>
                        <h3>Success</h3>
                        <p> Thank you {user.user_metadata.full_name}, we will be intouch with payment options.</p>
                        </div>
                    }
                </div>
            </Container>
        )
    }
}




