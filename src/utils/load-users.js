export const loadUsers = async () => {
    const usersResponse = fetch('https://api.github.com/users');
    
    const [users] = await Promise.all([usersResponse]);

    const usersJson = await users.json();

    const usersAndPhotos = usersJson.map((user, index) => {
      return { ...user, cover: usersJson[index].avatar_url }
    });

    return usersAndPhotos;
}