export default function EmployeePic(){
    let EmployeesPicArr = ["image1","image2","image3","image4"]
    return(
        <div>
            {EmployeesPicArr.map(picture => 
                <img src="{`${picture}}`" alt="employee pic" />
            )}
        </div>
    )
}