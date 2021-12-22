import axios from "axios";

const base_url = 'https://api.trello.com'
const trello_key = `key=${process.env.NEXT_PUBLIC_TRELLO_KEY}`;
const trello_token = `token=${process.env.NEXT_PUBLIC_TRELLO_TOKEN}`;

export async function fetchProjects() {
  try {
    const res = await axios.get(`${base_url}/1/organizations/hendricksprojectmanager/boards?${trello_key}&${trello_token}`)
    // console.log(res.data);
    return res.data;

  } catch (error) {console.log(error)}
}

export async function createTrelloBoard(name) {
  try {
    const res = await axios.post(`${base_url}/1/boards/?${trello_key}&${trello_token}&name=${name}&idOrganization=hendricksprojectmanager&idBoardSource=61c1f397a12991586b72af85`)
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export async function fetchProjectInfo(project_id) {
  try {
    const res = await axios.get(`${base_url}/1/boards/${project_id}?${trello_key}&${trello_token}&cards=visible&lists=open`)
    // console.log(res.data)
    return res.data;

  } catch (error) { console.log(error); }
}

export async function createCard(body) {
  try {

    let requestParams = '';
    for (const field in body) {
      if (body[field]) {
        if (requestParams.length > 0) {
          requestParams += "&";
        };
        requestParams += `${field}=${body[field]}`
      }
    }
    console.log(requestParams)
    
    const res = await axios.post(`${base_url}/1/cards?${requestParams}&${trello_key}&${trello_token}`);
    console.log(res.data);
    return res.data;

  } catch (error) {console.log(error)}
}

export async function updateCard(id, body) {
  try {
    let requestParams = '';
    for (const field in body) {
      if (body[field]) {
        if (requestParams.length > 0) {
          requestParams += "&";
        };
        requestParams += `${field}=${body[field]}`
      }
    }
    console.log(requestParams)
    const res = await axios.put(`${base_url}/1/card/${id}?${trello_key}&${trello_token}&${requestParams}`);
    // console.log(res.data);
    return res.data;

  } catch (error) { console.log(error); }
};

export async function changeCardStatus(id, idList) {
  try {
    const res = await axios.put(`${base_url}/1/card/${id}?${trello_key}&${trello_token}&idList=${idList}`);
    // console.log(res.data);
    return res.data;

  } catch (error) { console.log(error); }
};