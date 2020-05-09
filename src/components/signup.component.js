import React, {Component} from 'react';

export default class SignUp extends Component{
    render() {
        return(
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" required />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" required />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <label>Jenis Kelamin</label>
                    <input type="text" className="form-control" placeholder="Jenis Kelamin" required />
                </div>

                <div className="form-group">
                    <label>Kota</label>
                    <select className="form-control">
                        <option value="Jakarta">Jakarta</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Bekasi">Bekasi</option>
                        <option value="Bogor">Bogor</option>
                        <option value="Yogyakarta">Yogyakarta</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Provinsi</label>
                    <select className="form-control">
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jawa Tengah">Jawa Tengah</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        );
    }
}