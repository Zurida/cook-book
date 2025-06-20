import bcrypt from "bcrypt";
type TRes = {
    access_token: string,
    token_type: string,
    expires_in: number
}

export default defineEventHandler(async (event) => {
    // Clear the current user session just in case
    await clearUserSession(event);

    const { name, email, password, password_confirmation } = await readBody(event);

    // const hashedPassword = await hashPassword(password); // Hash password
    // const hashedPasswordConfirmation = await hashPassword(password_confirmation); // Hash password

    const userData = { name, email, password, password_confirmation };

    try {
        const res = await $fetch(`${useRuntimeConfig().myProxyUrl}auth/register`, {
            method: 'POST',
            body: userData
        })

        // return await setUserSession(event, {
        //     user: email,
        //     loggedInAt: new Date(),
        // });
    } catch (error) {
        console.error("Error creating user:", error);

    }

});