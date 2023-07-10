function InsertInputForms(){
    return (
        <section className="InformaTionCode">
              <h3 className="getFormTrack" style={{ textAlign : 'center'}}>Set your position here</h3>
              <form action="submit">
                 <div className="controlleur">
                     <input type="text" className="textName" required placeholder="put your name here" />                
                 </div>
              </form>
        </section>
    )
}

export default InsertInputForms;