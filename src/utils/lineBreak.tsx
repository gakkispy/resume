export default function lineBreakUtil(str: any): any{
    return str.split('\\n').map((item: any, index: any) => {
        return <span key={index}><b>{index+1}.</b> {item}<br/></span>
    })
}