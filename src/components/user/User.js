export default function Post({item,  choseUser}) {

    return (<div style={{display:"flex"}}>
            <div style={{width:"220px", margin:"10px 0px"}}>
            {item.id} {item.name}
            </div>
            <button style={{height:"27px"}}onClick={() => {
                choseUser(item);
            }}> details
            </button>


        </div>

    );
}