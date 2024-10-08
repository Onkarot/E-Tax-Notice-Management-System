import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

function Dashboard() {
    const [selectOption, setSelectedOption] = useState('1')
    const [Bank, setBank] = useState('1')
    const [Income, setIncome] = useState('1')
    const [FYANotice, setFYANotice] = useState('1')
    const [FYINotice, setFYINotice] = useState('1')
    const [selectedUser, setSelectedUser] = useState("");
    const usenavigate = useNavigate()

    const handleItr = (e) => {
        setSelectedOption(e);
    }

    const bank = (e) =>{
        setBank(e);
    }

    const sourceOfIncome = (e) =>{
        setIncome(e);
    }

    const fyanotice = (e) =>{
        setFYANotice(e);
    }

    const fyinotice = (e) =>{
        setFYINotice(e)
    }

    useEffect(() => {
        let mail = sessionStorage.getItem('mail')
        if (mail === '' || mail === null) {
            usenavigate('/login')
        }
    })

    const back = () => {
        usenavigate('/getstart')
    }

    const handleSelectChange = (event) => {
        setSelectedUser(event.target.value);
    };
    

    return (
        <div class="container">
            <div className="row dashboard-option" style={{ height: '60vh', alignItems: 'center', justifyContent: 'center' }}>
                {!selectedUser ? (
                    <div className="row">
                        <div className="col-lg-6">
                            <select className="form-select" aria-label="Default select example" onChange={handleSelectChange} >
                                <option value="">Clients Name</option>
                                <option value="MJA">MJA</option>
                                <option value="CP">CP</option>
                                <option value="OO">OO</option>
                            </select>
                        </div>
                    </div>
                ) : (
                <div>
                    <div className="dropdown">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="clientlist">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <span>Select Client</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ width: '100%'}}>
                                            <Dropdown.Item>MJA</Dropdown.Item>
                                            <Dropdown.Item>CP</Dropdown.Item>
                                            <input type="text" style={{ width: '100%'}} placeholder="Search.." />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="row dashboard">
                            <div className="col-lg-3">
                                <h5>Client Information</h5>
                            </div>

                            <div className="col-lg-9">
                                <h2>M J & ASSOCIATES</h2>
                            </div>
                        </div>
                    
                        <div className="">
                            <div className="row">
                                <div className="col-lg-3 dashboard-list">
                                    <ul class="list-group list-group-flush dashbord-list" aria-label="Default select example">
                                        <Link class="list-group-item" onClick={() => handleItr(1)}>Personal Information</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(2)}>Bank Details</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(3)}>Demat Account Details</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(4)}>Jurisdiction Details</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(5)}>Source of Income</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(6)}>Authorised Signatore</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(7)}>Representative Assessee</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(8)}>Tax Deposit</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(9)}>Recent Filed Return</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(10)}>Recent Form Filed</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(11)}>Refund Demand</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(12)}>For Your Action (FYA)</Link>
                                        <Link class="list-group-item" onClick={() => handleItr(13)}>For Your Information (FYI)</Link>
                                    </ul>

                                    <div className="dashboard-back-btn">
                                        <button class="btn btn-success" onClick={back}>Back</button>
                                    </div>
                                </div>

                                <div className="col-lg-9 dashboard-description">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <p>Name</p>
                                            <hr />
                                            <p>ABC Trial Name</p>
                                        </div>

                                        <div class="col-lg-3">
                                            <p>Email</p>
                                            <hr />
                                            <p>ABC Trial Email</p>
                                        </div>

                                        <div class="col-lg-3">
                                            <p>Phone</p>
                                            <hr />
                                            <p>ABC Trial Phone</p>
                                        </div>

                                        <div class="col-lg-3">
                                            <p>PAN</p>
                                            <hr />
                                            <p>ABC Trial PAN</p>
                                        </div>
                                    </div>

                                    <hr />

                                    {selectOption === 1 && 
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Personal Information</h5>
                                            </div>

                                            <br />

                                            <div className="description">
                                                <div className="row">
                                                    <div className="col-lg-10 px-0">
                                                        <div class="table-responsive">
                                                            <table className='table table-striped tblinfo'>
                                                                <tr class="">
                                                                    <th>Aadhar_No.</th>
                                                                    <th>Activation_Cd.</th>
                                                                    <th>Activation_Dt.</th>
                                                                    <th>Activation_Dt/Tm.</th>
                                                                    <th>Address</th>
                                                                    <th>ca_reg_number</th>
                                                                    <th>Contact_Design</th>
                                                                    <th>Pri_Fist_Name</th>
                                                                    <th>Pri_Mid_Name</th>
                                                                    <th>Pri_Lst_Name</th>
                                                                    <th>Sec_Fist_Name</th>
                                                                    <th>Sec_Mid_Name</th>
                                                                    <th>Sec_Lst_Name</th>
                                                                    <th>Contact_Resstatus_cd</th>
                                                                    <th>Country_cd</th>
                                                                    <th>Created_By</th>
                                                                    <th>Created_By_User</th>
                                                                    <th>Created_Dt.</th>
                                                                    <th>Created_Tm.</th>
                                                                    <th>DOB</th>
                                                                    <th>Dscexp_Dt</th>
                                                                    <th>Dscexpd_Tm.</th>
                                                                    <th>Dsc_flg.</th>
                                                                    <th>Incorporate_Dt.</th>
                                                                    <th>Is_Migrated</th>
                                                                    <th>Last_login_Dt.</th>
                                                                    <th>Last_login_Tm.</th>
                                                                    <th>Last_logout_Dt.</th>
                                                                    <th>Last_logout_Tm.</th>
                                                                    <th>Last_Updated_By</th>
                                                                    <th>Last_Updated_Dt.</th>
                                                                    <th>Last_Updated_Tm.</th>
                                                                    <th>Logout_Captured_flg.</th>
                                                                    <th>Old_Tran_Id.</th>
                                                                    <th>Org_Name</th>
                                                                    <th>Pan_Status</th>
                                                                    <th>PIN_Cd.</th>
                                                                    <th>Prie_Mail_Id.</th>
                                                                    <th>Prie_Mail_Relatedto.</th>
                                                                    <th>Pri_Mobile_Num</th>
                                                                    <th>Prie_Mob_Relatedto.</th>
                                                                    <th>Reg_Start_Dt.</th>
                                                                    <th>Reg_Start_Tm.</th>
                                                                    <th>Residential_Status</th>
                                                                    <th>Role_Desc.</th>
                                                                    <th>Sece_Mail_Id.</th>
                                                                    <th>Sece_Mail_Relatedto.</th>
                                                                    <th>Sec_Mobile_Num.</th>
                                                                    <th>Sec_Mob_Relatedto.</th>
                                                                    <th>Status</th>
                                                                    <th>Transaction_No.</th>
                                                                    <th>Updated_By_User</th>
                                                                </tr>

                                                                {/* <tr>
                                                                <td>User Information</td>
                                                            </tr>
                                                        */}
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 px-0 download-info">
                                                        <table className='table table-striped'>
                                                            <tr>
                                                                <th>Download</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {selectOption === 2 && 
                                        <div>
                                            <div className='info-title'>
                                                <h5>Bank Details</h5>
                                            </div>

                                            <br />

                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="bank" id="activeBank"
                                                        onClick={() => bank(1)}/>
                                                        <label class="form-check-label" for="activeBank">Active Bank</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="bank" id="inactiveBank"
                                                        onClick={() => bank(2)}/>
                                                        <label class="form-check-label" for="inactiveBank">Inctive Bank</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="bank" id="faliedBank" 
                                                        onClick={() => bank(3)}/>
                                                        <label class="form-check-label" for="faliedBank">Failed Bank</label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <hr />

                                            {Bank === 1 && 
                                                <div className="description">
                                                    <p className='h6'>Active Bank</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Name</th>
                                                                        <th>Organization_Name</th>
                                                                        <th>Pri_Fist_Name</th>
                                                                        <th>Pri_Mid_Name</th>
                                                                        <th>Pri_Lst_Name</th>
                                                                        <th>Sec_Fist_Name</th>
                                                                        <th>Sec_Mid_Name</th>
                                                                        <th>Sec_Lst_Name</th>
                                                                        <th>Bank_Acc_No.</th>
                                                                        <th>IFSC_Code</th>
                                                                        <th>Bank_Name</th>
                                                                        <th>Branch</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                        <td>User Information</td>
                                                                    </tr>*/}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {Bank === 2 && 
                                                <div className="description">
                                                    <p className='h6'>Inactive Bank</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Pri_Fist_Name</th>
                                                                        <th>Pri_Mid_Name</th>
                                                                        <th>Pri_Lst_Name</th>
                                                                        <th>Sec_Fist_Name</th>
                                                                        <th>Sec_Mid_Name</th>
                                                                        <th>Sec_Lst_Name</th>
                                                                        <th>Bank_Acc_No.</th>
                                                                        <th>IFSC_Code</th>
                                                                        <th>Bank_Name</th>
                                                                        <th>Branch</th>
                                                                        <th>Error</th>
                                                                        <th>User_Action</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                        <td>User Information</td>
                                                                    </tr>*/}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {Bank === 3 && 
                                                <div className="description">
                                                    <p className='h6'>Failed Bank</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Pri_Fist_Name</th>
                                                                        <th>Pri_Mid_Name</th>
                                                                        <th>Pri_Lst_Name</th>
                                                                        <th>Sec_Fist_Name</th>
                                                                        <th>Sec_Mid_Name</th>
                                                                        <th>Sec_Lst_Name</th>
                                                                        <th>Bank_Acc_No.</th>
                                                                        <th>IFSC_Code</th>
                                                                        <th>Bank_Name</th>
                                                                        <th>Branch</th>
                                                                        <th>Error</th>
                                                                        <th>User_Action</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                        <td>User Information</td>
                                                                    </tr>*/}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    }

                                    {selectOption === 3 && 
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Demat Account</h5>
                                            </div>

                                            <br />

                                            <div className="description">
                                                <div className="row">
                                                    <div className="col-lg-10 px-0">
                                                        <div class="table-responsive">
                                                            <table className='table table-striped tblinfo'>
                                                                <tr class="">
                                                                    <th>Account_Number</th>
                                                                    <th>Dep_Type</th>
                                                                    <th>Mobile_no.</th>
                                                                    <th>Email_Id</th>
                                                                    <th>Name_As_Per_Demat</th>
                                                                    <th>Name_Verification</th>
                                                                    <th>Mobile_Verification</th>
                                                                    <th>Email_Verification</th>
                                                                    <th>Transaction_No.</th>
                                                                    <th>PAN_Link</th>
                                                                    <th>Demat_PAN_Link_Id</th>
                                                                </tr>

                                                                {/* <tr>
                                                                <td>User Information</td>
                                                            </tr>
                                                        */}
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 px-0 download-info">
                                                        <table className='table table-striped'>
                                                            <tr>
                                                                <th>Download</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {selectOption === 4 && 
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Jurisdiction Details</h5>
                                            </div>

                                            <br />

                                            <div className="description">
                                                <div className="row">
                                                    <div className="col-lg-10 px-0">
                                                        <div class="table-responsive">
                                                            <table className='table table-striped tblinfo'>
                                                                <tr class="">
                                                                    <th>Role</th>
                                                                    <th>Pri_Fist_Name</th>
                                                                    <th>Pri_Mid_Name</th>
                                                                    <th>Pri_Lst_Name</th>
                                                                    <th>Sec_Fist_Name</th>
                                                                    <th>Sec_Mid_Name</th>
                                                                    <th>Sec_Lst_Name</th>
                                                                    <th>Area_Cd.</th>
                                                                    <th>Area_Desc</th>
                                                                    <th>AO_Type</th>
                                                                    <th>Range_Cd.</th>
                                                                    <th>AO_No.</th>
                                                                    <th>AO_Pplr_Name</th>
                                                                    <th>AO_Email_Id</th>
                                                                    <th>AO_Bldg_Id</th>
                                                                    <th>AO_BldgDesc</th>
                                                                </tr>

                                                                {/* <tr>
                                                                <td>User Information</td>
                                                            </tr>
                                                        */}
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 px-0 download-info">
                                                        <table className='table table-striped'>
                                                            <tr>
                                                                <th>Download</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {selectOption === 5 &&
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Source of Income</h5>
                                            </div>

                                            <br />

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="sourceofincome" id="businessSalaried" 
                                                        onClick={() => sourceOfIncome(1)}/>
                                                        <label class="form-check-label" for="businessSalaried">Business / Salaried</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="sourceofincome" id="houseProperty" 
                                                        onClick={() => sourceOfIncome(2)}/>
                                                        <label class="form-check-label" for="houseProperty">House Property</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr />

                                            {Income === 1 &&
                                                <div className="description">
                                                    <p className='h6'>Business / Salaried</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Source_Type</th>
                                                                        <th>Pri_Fist_Name</th>
                                                                        <th>Pri_Mid_Name</th>
                                                                        <th>Pri_Lst_Name</th>
                                                                        <th>Sec_Fist_Name</th>
                                                                        <th>Sec_Mid_Name</th>
                                                                        <th>Sec_Lst_Name</th>
                                                                        <th>Profile_Mbr_Id</th>
                                                                        <th>Profile_Incm_Id</th>
                                                                        <th>Mbr_Tan_Pan</th>
                                                                        <th>Mbr_Name</th>
                                                                        <th>Nature_of_Employment</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {Income === 2 &&
                                                <div className="description">
                                                    <p className='h6'>House Property</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Source_Type</th>
                                                                        <th>Pri_Fist_Name</th>
                                                                        <th>Pri_Mid_Name</th>
                                                                        <th>Pri_Lst_Name</th>
                                                                        <th>Sec_Fist_Name</th>
                                                                        <th>Sec_Mid_Name</th>
                                                                        <th>Sec_Lst_Name</th>
                                                                        <th>Profile_Prop_Id</th>
                                                                        <th>Profile_Incm_Id</th>
                                                                        <th>Address</th>
                                                                        <th>PIN_Cd</th>
                                                                        <th>State_Cd</th>
                                                                        <th>Country_Cd</th>
                                                                        <th>Owner_Percentage</th>
                                                                        <th>Co_Owners</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    }

                                    {selectOption === 6 && 
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Authorised Signature</h5>
                                            </div>

                                            <br />

                                            <div className="description">
                                                <div className="row">
                                                    <div className="col-lg-10 px-0">
                                                        <div class="table-responsive">
                                                            <table className='table table-striped tblinfo'>
                                                                <tr class="">
                                                                    <th>Pri_Fist_Name</th>
                                                                    <th>Pri_Mid_Name</th>
                                                                    <th>Pri_Lst_Name</th>
                                                                    <th>Sec_Fist_Name</th>
                                                                    <th>Sec_Mid_Name</th>
                                                                    <th>Sec_Lst_Name</th>
                                                                    <th>Role</th>
                                                                    <th>Auth_Rep_PAN</th>
                                                                    <th>Auth_Rep_First_Nm</th>
                                                                    <th>Auth_Rep_Mid_Nm</th>
                                                                    <th>Auth_Rep_Last_Nm</th>
                                                                    <th>Period_To</th>
                                                                    <th>Period_From</th>
                                                                    <th>Dsc_Flag</th>
                                                                    <th>Dsc_Exp_Dt</th>
                                                                    <th>Task_Assigned</th>
                                                                    <th>Reason</th>
                                                                </tr>

                                                                {/* <tr>
                                                                <td>User Information</td>
                                                            </tr>
                                                        */}
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 px-0 download-info">
                                                        <table className='table table-striped'>
                                                            <tr>
                                                                <th>Download</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {selectOption === 7 && 
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Representative Assessee</h5>
                                            </div>

                                            <br />

                                            <div className="description">
                                                <div className="row">
                                                    <div className="col-lg-10 px-0">
                                                        <div class="table-responsive">
                                                            <table className='table table-striped tblinfo'>
                                                                <tr class="">
                                                                    <th>Role</th>
                                                                    <th>Pri_Fist_Name</th>
                                                                    <th>Pri_Mid_Name</th>
                                                                    <th>Pri_Lst_Name</th>
                                                                    <th>Sec_Fist_Name</th>
                                                                    <th>Sec_Mid_Name</th>
                                                                    <th>Sec_Lst_Name</th>
                                                                    <th>Auth_Rep_PAN</th>
                                                                    <th>Auth_Rep_First_Nm</th>
                                                                    <th>Auth_Rep_Mid_Nm</th>
                                                                    <th>Auth_Rep_Last_Nm</th>
                                                                    <th>Period_To</th>
                                                                    <th>Period_From</th>
                                                                    <th>Dsc_Flag</th>
                                                                    <th>Dsc_Exp_Dt</th>
                                                                    <th>Task_Assigned</th>
                                                                    <th>Reason</th>
                                                                </tr>

                                                                {/* <tr>
                                                                <td>User Information</td>
                                                            </tr>
                                                        */}
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 px-0 download-info">
                                                        <table className='table table-striped'>
                                                            <tr>
                                                                <th>Download</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {selectOption === 8 && 
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Tax Deposit</h5>
                                            </div>

                                            <br />

                                            <div className="description">
                                                <div className="row">
                                                    <div className="col-lg-10 px-0">
                                                        <div class="table-responsive">
                                                            <table className='table table-striped tblinfo'>
                                                                <tr class="">
                                                                    <th>Org_Name</th>
                                                                    <th>Pri_Fist_Name</th>
                                                                    <th>Pri_Mid_Name</th>
                                                                    <th>Pri_Lst_Name</th>
                                                                    <th>Sec_Fist_Name</th>
                                                                    <th>Sec_Mid_Name</th>
                                                                    <th>Sec_Lst_Name</th>
                                                                    <th>Sat_Amt</th>
                                                                    <th>At_Amt</th>
                                                                    <th>Tds_Amt</th>
                                                                    <th>Tcs_Amt</th>
                                                                    <th>AY</th>
                                                                </tr>

                                                                {/* <tr>
                                                                <td>User Information</td>
                                                            </tr>
                                                        */}
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 px-0 download-info">
                                                        <table className='table table-striped'>
                                                            <tr>
                                                                <th>Download</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {selectOption === 9 && 
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Recent Filed Return</h5>
                                            </div>

                                            <br />

                                            <div className="description">
                                                <div className="row">
                                                    <div className="col-lg-10 px-0">
                                                        <div class="table-responsive">
                                                            <table className='table table-striped tblinfo'>
                                                                <tr class="">
                                                                    <th>Role</th>
                                                                    <th>Org_Name</th>
                                                                    <th>Pri_Fist_Name</th>
                                                                    <th>Pri_Mid_Name</th>
                                                                    <th>Pri_Lst_Name</th>
                                                                    <th>Sec_Fist_Name</th>
                                                                    <th>Sec_Mid_Name</th>
                                                                    <th>Sec_Lst_Name</th>
                                                                    <th>Assesment_Year</th>
                                                                    <th>Taxable_Income</th>
                                                                    <th>Tax_Liability</th>
                                                                    <th>Tax_Deposited</th>
                                                                </tr>

                                                                {/* <tr>
                                                                <td>User Information</td>
                                                            </tr>
                                                        */}
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 px-0 download-info">
                                                        <table className='table table-striped'>
                                                            <tr>
                                                                <th>Download</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {selectOption === 10 &&
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Recent Form Filed</h5>
                                            </div>

                                            <br />

                                            <div className="description">
                                                <div className="row">
                                                    <div className="col-lg-10 px-0">
                                                        <div class="table-responsive">
                                                            <table className='table table-striped tblinfo'>
                                                                <tr class="">
                                                                    <th>Role</th>
                                                                    <th>Org_Name</th>
                                                                    <th>Pri_Fist_Name</th>
                                                                    <th>Pri_Mid_Name</th>
                                                                    <th>Pri_Lst_Name</th>
                                                                    <th>Sec_Fist_Name</th>
                                                                    <th>Sec_Mid_Name</th>
                                                                    <th>Sec_Lst_Name</th>
                                                                    <th>User_Type</th>
                                                                    <th>Submit_User_Id</th>
                                                                    <th>Form_Count</th>
                                                                    <th>Eri_Pan</th>
                                                                    <th>Mode</th>
                                                                    <th>Form_Name</th>
                                                                    <th>Form_Short_Name</th>
                                                                    <th>Form_Desc</th>
                                                                    <th>Form_Cd</th>
                                                                    <th>Filling_Count</th>
                                                                    <th>Ref_Year_Type</th>
                                                                    <th>Ref_Year</th>
                                                                    <th>Ack_date</th>
                                                                    <th>Form_Name_Hindi</th>
                                                                    <th>Form_Short_Name_Hindi</th>
                                                                </tr>

                                                                {/* <tr>
                                                                <td>User Information</td>
                                                            </tr>
                                                        */}
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 px-0 download-info">
                                                        <table className='table table-striped'>
                                                            <tr>
                                                                <th>Download</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {selectOption === 11 &&
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>Refund Demand</h5>
                                            </div>

                                            <br />

                                            <div className="description">
                                                <div className="row">
                                                    <div className="col-lg-10 px-0">
                                                        <div class="table-responsive">
                                                            <table className='table table-striped tblinfo'>
                                                                <tr class="">
                                                                    <th>Role</th>
                                                                    <th>Org_Name</th>
                                                                    <th>Pri_Fist_Name</th>
                                                                    <th>Pri_Mid_Name</th>
                                                                    <th>Pri_Lst_Name</th>
                                                                    <th>Sec_Fist_Name</th>
                                                                    <th>Sec_Mid_Name</th>
                                                                    <th>Sec_Lst_Name</th>
                                                                    <th>Return_Filed_On</th>
                                                                    <th>Return_Filed_On_Time</th>
                                                                    <th>Return_Varified_On</th>
                                                                    <th>Varification_Status</th>
                                                                    <th>Return_Processing</th>
                                                                    <th>Return_Processing_Time</th>
                                                                    <th>Processing_Complition</th>
                                                                    <th>Processing_Complition_Time</th>
                                                                    <th>Year</th>
                                                                    <th>Refund_Amount</th>
                                                                    <th>Status</th>
                                                                </tr>

                                                                {/* <tr>
                                                                <td>User Information</td>
                                                            </tr>
                                                        */}
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 px-0 download-info">
                                                        <table className='table table-striped'>
                                                            <tr>
                                                                <th>Download</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {selectOption === 12 && 
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>For Your Action (FYA)</h5>
                                            </div>

                                            <br />

                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="fya" id="fyaCount" 
                                                        onClick={() => fyanotice(1)}/>
                                                        <label class="form-check-label" for="fyaCount">FYA Count</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="fya" id="fyaNotice" 
                                                        onClick={() => fyanotice(2)}/>
                                                        <label class="form-check-label" for="fyaNotice">FYA Notice</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="fya" id="fyaAllNotice" 
                                                        onClick={() => fyanotice(3)}/>
                                                        <label class="form-check-label" for="fyaAllNotice">FYA All Notices</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="fya" id="fyaNoticeLetter" 
                                                        onClick={() => fyanotice(4)}/>
                                                        <label class="form-check-label" for="fyaNoticeLetter">FYA Notice Letter</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr />

                                            {FYANotice === 1 &&
                                                <div className="description">
                                                    <p className="h6">FYA Count</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Pri_Fist_Name</th>
                                                                        <th>Pri_Mid_Name</th>
                                                                        <th>Pri_Lst_Name</th>
                                                                        <th>Sec_Fist_Name</th>
                                                                        <th>Sec_Mid_Name</th>
                                                                        <th>Sec_Lst_Name</th>
                                                                        <th>Role</th>
                                                                        <th>Info_Count</th>
                                                                        <th>Action_Count</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {FYANotice === 2 &&
                                                <div className="description">
                                                    <p className="h6">FYA Notice</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Pro_Req_Id</th>
                                                                        <th>Name_of_Assesse</th>
                                                                        <th>Pro_Name</th>
                                                                        <th>ITR_Type</th>
                                                                        <th>Assessment_Yr</th>
                                                                        <th>Financial_Yr</th>
                                                                        <th>Pro_Lm_Dt</th>
                                                                        <th>Pro_Lm_Tm</th>
                                                                        <th>Notice_Nm</th>
                                                                        <th>Resp_Dt</th>
                                                                        <th>Resp_Tm</th>
                                                                        <th>ACK_No</th>
                                                                        <th>View_Notice_Count</th>
                                                                        <th>Pro_Type</th>
                                                                        <th>Issued_On</th>
                                                                        <th>Issued_On_Tm</th>
                                                                        <th>Served_On</th>
                                                                        <th>Served_On_Tm</th>
                                                                        <th>Resp_Due_Dt</th>
                                                                        <th>Resp_Due_Tm</th>
                                                                        <th>Lst_Resp_Submit_On</th>
                                                                        <th>Lst_Resp_Submit_On_Tm</th>
                                                                        <th>Resp_View_On</th>
                                                                        <th>Pro_Close_Dt</th>
                                                                        <th>Pro_Close_Tm</th>
                                                                        <th>Pro_Closure_Ord</th>
                                                                        <th>Pro_Status</th>
                                                                        <th>Resp_Status</th>
                                                                        <th>Resp_Id</th>
                                                                        <th>Comm_Type</th>
                                                                        <th>Read_Flg</th>
                                                                        <th>Faceless_Flg</th>
                                                                        <th>Return_Everified</th>
                                                                        <th>Discard_Allowed</th>
                                                                        <th>New</th>
                                                                        <th>Is_File_Appeal</th>
                                                                        <th>Is_Rectification</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {FYANotice === 3 &&
                                                <div className="description">
                                                    <p className="h6">FYA All Notices</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Pro_Req_Id</th>
                                                                        <th>Name_of_Assesse</th>
                                                                        <th>Header_Seq_No</th>
                                                                        <th>Pro_Name</th>
                                                                        <th>Financial_Yr</th>
                                                                        <th>Pro_Lm_Dt</th>
                                                                        <th>Pro_Lm_Tm</th>
                                                                        <th>Pro_Type</th>
                                                                        <th>Doc_Id_No</th>
                                                                        <th>AY</th>
                                                                        <th>Notice_Section</th>
                                                                        <th>Description</th>
                                                                        <th>Issued_On</th>
                                                                        <th>Issued_On_Tm</th>
                                                                        <th>Served_On</th>
                                                                        <th>Served_On_Tm</th>
                                                                        <th>Resp_Due_Dt</th>
                                                                        <th>Resp_Due_Tm</th>
                                                                        <th>Lst_Resp_Submit_On</th>
                                                                        <th>Lst_Resp_Submit_On_Tm</th>
                                                                        <th>Resp_View_On</th>
                                                                        <th>Doc_Refrence_Id</th>
                                                                        <th>Pro_Status</th>
                                                                        <th>Is_Submit</th>
                                                                        <th>Resp_Status</th>
                                                                        <th>Resp_Id</th>
                                                                        <th>Comm_Type</th>
                                                                        <th>Read_Flg</th>
                                                                        <th>Is_Revised_ITR</th>
                                                                        <th>Pro_Mod_Nm</th>
                                                                        <th>VC_Enable_Flg</th>
                                                                        <th>Is_Active_AR</th>
                                                                        <th>Return_Everified</th>
                                                                        <th>Discard_Allowed</th>
                                                                        <th>Doc_Cd</th>
                                                                        <th>Is_File_Appeal</th>
                                                                        <th>Is_Rectification</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {FYANotice === 4 &&
                                                <div className="description">
                                                    <p className="h6">FYA Notice Letter</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Pro_Req_Id</th>
                                                                        <th>Name_of_Assesse</th>
                                                                        <th>Loged_In_User_Id</th>
                                                                        <th>Notice_Section</th>
                                                                        <th>Doc_Refrence_Id</th>
                                                                        <th>Description</th>
                                                                        <th>Resp_View_On</th>
                                                                        <th>Pro_Name</th>
                                                                        <th>Assessment_Yr</th>
                                                                        <th>Notice_Id</th>
                                                                        <th>CC</th>
                                                                        <th>Mail_Body</th>
                                                                        <th>Doc_Nm</th>
                                                                        <th>Header_Seq_No</th>
                                                                        <th>Pro_Req_Id</th>
                                                                        <th>Appln_Id</th>
                                                                        <th>Date</th>
                                                                        <th>Time</th>
                                                                        <th>From</th>
                                                                        <th>Subject</th>
                                                                        <th>To</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                        </div>
                                    }

                                    {selectOption === 13 &&
                                        <div id="">
                                            <div className='info-title'>
                                                <h5>For Your Information (FYI)</h5>
                                            </div>

                                            <br />

                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="fyi" id="fyiCount" 
                                                        onClick={() => fyinotice(1)}/>
                                                        <label class="form-check-label" for="fyiCount">FYI Count</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="fyi" id="fyiNotice" 
                                                        onClick={() => fyinotice(2)}/>
                                                        <label class="form-check-label" for="fyiNotice">FYI Notice</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="fyi" id="fyiAllNotices" 
                                                        onClick={() => fyinotice(3)}/>
                                                        <label class="form-check-label" for="fyiAllNotices">FYI All Notices</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="fyi" id="fyiNoticeLetter" 
                                                        onClick={() => fyinotice(4)}/>
                                                        <label class="form-check-label" for="fyiNoticeLetter">FYI Notice Letter</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr />

                                            {FYINotice === 1 &&
                                                <div className="description">
                                                    <p className="h6">FYI Count</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Role</th>
                                                                        <th>Org_Nm</th>
                                                                        <th>Pri_Fist_Name</th>
                                                                        <th>Pri_Mid_Name</th>
                                                                        <th>Pri_Lst_Name</th>
                                                                        <th>Sec_Fist_Name</th>
                                                                        <th>Sec_Mid_Name</th>
                                                                        <th>Sec_Lst_Name</th>
                                                                        <th>Info_Count</th>
                                                                        <th>Action_Count</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {FYINotice === 2 &&
                                                <div className="description">
                                                    <p className="h6">FYI Notice</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Pro_Req_Id</th>
                                                                        <th>Name_of_Assesse</th>
                                                                        <th>Pro_Name</th>
                                                                        <th>ITR_Type</th>
                                                                        <th>Assessment_Yr</th>
                                                                        <th>Financial_Yr</th>
                                                                        <th>Pro_Lm_Dt</th>
                                                                        <th>Pro_Lm_Tm</th>
                                                                        <th>Notice_Nm</th>
                                                                        <th>Resp_Dt</th>
                                                                        <th>Resp_Tm</th>
                                                                        <th>ACK_No</th>
                                                                        <th>View_Notice_Count</th>
                                                                        <th>Pro_Type</th>
                                                                        <th>Issued_On</th>
                                                                        <th>Issued_On_Tm</th>
                                                                        <th>Served_On</th>
                                                                        <th>Served_On_Tm</th>
                                                                        <th>Resp_Due_Dt</th>
                                                                        <th>Resp_Due_Tm</th>
                                                                        <th>Lst_Resp_Submit_On</th>
                                                                        <th>Lst_Resp_Submit_On_Tm</th>
                                                                        <th>Resp_View_On</th>
                                                                        <th>Pro_Close_Dt</th>
                                                                        <th>Pro_Close_Tm</th>
                                                                        <th>Pro_Closure_Ord</th>
                                                                        <th>Pro_Status</th>
                                                                        <th>Resp_Status</th>
                                                                        <th>Resp_Id</th>
                                                                        <th>Comm_Type</th>
                                                                        <th>Read_Flg</th>
                                                                        <th>Faceless_Flg</th>
                                                                        <th>Return_Everified</th>
                                                                        <th>Discard_Allowed</th>
                                                                        <th>New</th>
                                                                        <th>Is_File_Appeal</th>
                                                                        <th>Is_Rectification</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {FYINotice === 3 &&
                                                <div className="description">
                                                    <p className="h6">FYI All Notices</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Pro_Req_Id</th>
                                                                        <th>Name_of_Assesse</th>
                                                                        <th>Header_Seq_No</th>
                                                                        <th>Pro_Name</th>
                                                                        <th>Financial_Yr</th>
                                                                        <th>Pro_Lm_Dt</th>
                                                                        <th>Pro_Lm_Tm</th>
                                                                        <th>Pro_Type</th>
                                                                        <th>Doc_Id_No</th>
                                                                        <th>AY</th>
                                                                        <th>Notice_Section</th>
                                                                        <th>Description</th>
                                                                        <th>Issued_On</th>
                                                                        <th>Issued_On_Tm</th>
                                                                        <th>Served_On</th>
                                                                        <th>Served_On_Tm</th>
                                                                        <th>Resp_Due_Dt</th>
                                                                        <th>Resp_Due_Tm</th>
                                                                        <th>Lst_Resp_Submit_On</th>
                                                                        <th>Lst_Resp_Submit_On_Tm</th>
                                                                        <th>Resp_View_On</th>
                                                                        <th>Doc_Refrence_Id</th>
                                                                        <th>Pro_Status</th>
                                                                        <th>Is_Submit</th>
                                                                        <th>Resp_Status</th>
                                                                        <th>Resp_Id</th>
                                                                        <th>Comm_Type</th>
                                                                        <th>Read_Flg</th>
                                                                        <th>Is_Revised_ITR</th>
                                                                        <th>Pro_Mod_Nm</th>
                                                                        <th>VC_Enable_Flg</th>
                                                                        <th>Return_Everified</th>
                                                                        <th>Discard_Allowed</th>
                                                                        <th>Doc_Cd</th>
                                                                        <th>Is_File_Appeal</th>
                                                                        <th>Is_Rectification</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {FYINotice === 4 &&
                                                <div className="description">
                                                    <p className="h6">FYI Notice Letter</p>
                                                    <div className="row">
                                                        <div className="col-lg-10 px-0">
                                                            <div class="table-responsive">
                                                                <table className='table table-striped tblinfo'>
                                                                    <tr class="">
                                                                        <th>Pro_Req_Id</th>
                                                                        <th>User_Nm</th>
                                                                        <th>Loged_In_User_Id</th>
                                                                        <th>Notice_Section</th>
                                                                        <th>Doc_Refrence_Id</th>
                                                                        <th>Description</th>
                                                                        <th>Pro_Name</th>
                                                                        <th>Assessment_Yr</th>
                                                                        <th>Notice_Id</th>
                                                                        <th>CC</th>
                                                                        <th>Mail_Body</th>
                                                                        <th>Doc_Nm</th>
                                                                        <th>Header_Seq_No</th>
                                                                        <th>Pro_Req_Id</th>
                                                                        <th>Appln_Id</th>
                                                                        <th>Date</th>
                                                                        <th>Time</th>
                                                                        <th>From</th>
                                                                        <th>Subject</th>
                                                                        <th>To</th>
                                                                    </tr>

                                                                    {/* <tr>
                                                                    <td>User Information</td>
                                                                </tr>
                                                            */}
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 px-0 download-info">
                                                            <table className='table table-striped'>
                                                                <tr>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                <div/>
            </div>
            )}
            </div>
        </div>
    );
}

export default Dashboard