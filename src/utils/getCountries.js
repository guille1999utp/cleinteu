async function getCitiesByCountry(country) {
    try {
        // Paso 1: Obtener el auth_token
        const authResponse = await fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api-token': '7X9maJvdQZ1_CphPOiR_4Bqn7aI1g8N_QB6j8LtXzMIaXt6b6eeZstR_RbCLwuuIsbo',
                'user-email': 'guillermo.penaranda@utp.edu.co'
            }
        });
        const authData = await authResponse.json();
        const authToken = authData.auth_token;

        // Paso 2: Obtener las ciudades del país especificado
        const citiesResponse = await fetch(`https://www.universal-tutorial.com/api/states/${country}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        const citiesData = await citiesResponse.json();

        // Retornar las ciudades
        return citiesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Hubo un error al obtener las ciudades del país.');
    }
}

export default getCitiesByCountry;