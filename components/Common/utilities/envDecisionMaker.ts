
export default function envDecisionMaker(page){
    const mocked_pages = process.env.NEXT_PUBLIC_NOT_FINISHED_APIS.split(',');
    if(mocked_pages.includes(page)){
        return process.env.NEXT_PUBLIC_MOCK_HOST
    }else {
        return process.env.NEXT_PUBLIC_HOST
    }
}