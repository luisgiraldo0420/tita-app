import { URL_BASE, APP_ID } from "../utils/constants";

export async function getPostApi() {
  try {
    const url = `${URL_BASE}/post/`;
    const params = {
        method: "GET",
        headers: {
            'app-id': APP_ID,
        },
      };
    const response = await fetch(url, params);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCommentApi(post_id) {
    console.log(post_id, 'id----');
    try {
      const url = `${URL_BASE}/post/${post_id}/comment/`;
      const params = {
          method: "GET",
          headers: {
              'app-id': APP_ID,
          },
        };
      const response = await fetch(url, params);
      const result = await response.json();
      console.log(result, result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  export async function getTagsApi() {
    try {
      const url = `${URL_BASE}/tag?limit=10`;
      const params = {
          method: "GET",
          headers: {
              'app-id': APP_ID,
          },
        };
      const response = await fetch(url, params);
      const result = await response.json();
      console.log(result, result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  export async function getPostByTagApi(tag) {
    console.log('=======');
    try {
      const url = `${URL_BASE}/tag/${tag}/post?limit=10`;
      const params = {
          method: "GET",
          headers: {
              'app-id': APP_ID,
          },
        };
      const response = await fetch(url, params);
      const result = await response.json();
      console.log(result, 'wdsdsijdsnidsjnidsjn');
      return result;
    } catch (error) {
      throw error;
    }
  }