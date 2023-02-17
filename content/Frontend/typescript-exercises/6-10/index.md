---
title: 'Typescript Exercises 6-10'
path: blog/Frontend/typescript-exercises-6-10
tags: [Frontend]
cover: './cover.png'
date: 2023-02-17
excerpt: https://typescript-exercises.github.io/ 
---

6. Fix typing for the filterPersons so that it can filter users and return User[] when personType='user' and return Admin[] when personType='admin'. Also filterPersons should accept partial User/Admin type according to the personType. `criteria` argument should behave according to the `personType` argument value. `type` field is not allowed in the `criteria` field.

	* filterPersons 함수에서 personType이 admin 이면 Admin 타입의 배열을 리턴해야 하고 user 면 User 타입의 배열을 리턴할 수 있도록 고쳐야 합니다.

	* 이 문제에서 좀 삐걱거렸던 것 같습니다. 타입스크립트 오버 로딩은 신기하네요...자바에서 오버 로딩은 오버 로딩 메소드여도 구현체가 각각 하나씩 필요했는데 타입스크립트는 여러개의 선언과 하나의 구현체로 오버 로딩을 구현합니다. 싄기

	* 오버로딩 : 동일한 이름에 매개변수가 다른 여러 버전의 함수를 만드는 것을 오버로딩 이라고 합니다. 
		* 함수의 이름은 반드시 같아야 합니다.
		* 매개변수의 순서는 서로 같아야 합니다. 
		* 구현체는 오버로딩에 사용되는 모든 타입을 처리할 수 있어야 합니다.
        ```ts
        interface User {
            type: 'user';
            name: string;
            age: number;
            occupation: string;
        }

        interface Admin {
            type: 'admin';
            name: string;
            age: number;
            role: string;
        }

        export type Person = User | Admin;

        export const persons: Person[] = [
            { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
            { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
            { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
            { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
            { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
            { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
        ];

        export function logPerson(person: Person) {
            console.log(
                ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
            );
        }

        const getObjectKeys = <T>(obj: T) => Object.keys(obj) as (keyof T)[];

        export function filterPersons(persons: Person[], personType: 'admin', criteria: Partial<Omit<Admin, 'type'>>): Admin[]
        export function filterPersons(persons: Person[], personType: 'user', criteria: Partial<Omit<User, 'type'>>): User[]
        export function filterPersons(persons: Person[], personType: string, criteria: Partial<Person>): Person[] {
            return persons
                .filter((person) => person.type === personType)
                .filter((person) => {
                    let criteriaKeys = getObjectKeys(criteria)
                    return criteriaKeys.every((fieldName) => {
                        return person[fieldName] === criteria[fieldName];
                    });
                });
        }

        export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
        export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

        console.log('Users of age 23:');
        usersOfAge23.forEach(logPerson);

        console.log();

        console.log('Admins of age 23:');
        adminsOfAge23.forEach(logPerson);
                
        ```


7. Implement swap which receives 2 persons and returns them in the reverse order. The function itself is already there, actually. We just need to provide it with proper types. Also this function shouldn't necessarily be limited to just Person types, let's type it so that it works with any two types specified.

	* swap 함수의 매개변수 타입과 리턴 타입을 정해주는 문제입니다. 

	* swap의 매변수로 다양한 타입을 받을 수 있도록 만들어야 하기 때문에 제네릭을 사용해야 합니다. 

	* 제네릭 : 타입을 마치 함수 파라미터처럼 사용하는 것입니다. 함수 또는 클래스 
    등의 구조체 내부에서 사용할 데이터의 타입을 외부에서 지정하는 기법입니다. 

	* 리턴 타입을 위해서는 튜플 타입을 사용합니다.
    ```ts
    interface User {
        type: 'user';
        name: string;
        age: number;
        occupation: string;
    }

    interface Admin {
        type: 'admin';
        name: string;
        age: number;
        role: string;
    }

    function logUser(user: User) {
        const pos = users.indexOf(user) + 1;
        console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
    }

    function logAdmin(admin: Admin) {
        const pos = admins.indexOf(admin) + 1;
        console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
    }

    const admins: Admin[] = [
        {
            type: 'admin',
            name: 'Will Bruces',
            age: 30,
            role: 'Overseer'
        },
        {
            type: 'admin',
            name: 'Steve',
            age: 40,
            role: 'Steve'
        }
    ];

    const users: User[] = [
        {
            type: 'user',
            name: 'Moses',
            age: 70,
            occupation: 'Desert guide'
        },
        {
            type: 'user',
            name: 'Superman',
            age: 28,
            occupation: 'Ordinary person'
        }
    ];

    export function swap<T, U>(v1 : T , v2 : U) : [U, T] {
        return [v2, v1];
    }

    function test1() {
        console.log('test1:');
        const [secondUser, firstAdmin] = swap(admins[0], users[1]);
        logUser(secondUser);
        logAdmin(firstAdmin);
    }

    function test2() {
        console.log('test2:');
        const [secondAdmin, firstUser] = swap(users[0], admins[1]);
        logAdmin(secondAdmin);
        logUser(firstUser);
    }

    function test3() {
        console.log('test3:');
        const [secondUser, firstUser] = swap(users[0], users[1]);
        logUser(secondUser);
        logUser(firstUser);
    }

    function test4() {
        console.log('test4:');
        const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
        logAdmin(firstAdmin);
        logAdmin(secondAdmin);
    }

    function test5() {
        console.log('test5:');
        const [stringValue, numericValue] = swap(123, 'Hello World');
        console.log(` - String: ${stringValue}`);
        console.log(` - Numeric: ${numericValue}`);
    }

    [test1, test2, test3, test4, test5].forEach((test) => test());
    ```

8. Define type PowerUser which should have all fields from both User and Admin (except for type), and also have type 'powerUser' without duplicating all the fields in the code.

	* PowerUser의 타입을 정의해야 합니다. 

	* PowerUser는 Admin 타입에 있는 속성과 User 타입에 있는 속성을 모두 가지면서 type은 powerUser로 고정되어 있는 타입입니다. 

	* type 이외의 모든 속성을 합쳐야 하기 때문에 각 타입에서 type 속성을 제외한 하위 타입을 & 연산자를 사용해 교차 타입으로 만듭니다. 

	* 교차 타입 : 여러 타입을 하나로 결합합니다. 기존 타입을 합쳐 필요한 기능을 모두 가진 단일 타입을 얻을 수 있습니다.
    ```ts
    interface User {
        type: 'user';
        name: string;
        age: number;
        occupation: string;
    }

    interface Admin {
        type: 'admin';
        name: string;
        age: number;
        role: string;
    }

    type PowerUser = Omit <User, 'type'> & Omit<Admin, 'type'> & {
        type : 'powerUser'
    };

    export type Person = User | Admin | PowerUser;

    export const persons: Person[] = [
        { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
        { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
        { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
        { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
        {
            type: 'powerUser',
            name: 'Nikki Stone',
            age: 45,
            role: 'Moderator',
            occupation: 'Cat groomer'
        }
    ];

    function isAdmin(person: Person): person is Admin {
        return person.type === 'admin';
    }

    function isUser(person: Person): person is User {
        return person.type === 'user';
    }

    function isPowerUser(person: Person): person is PowerUser {
        return person.type === 'powerUser';
    }

    export function logPerson(person: Person) {
        let additionalInformation: string = '';
        if (isAdmin(person)) {
            additionalInformation = person.role;
        }
        if (isUser(person)) {
            additionalInformation = person.occupation;
        }
        if (isPowerUser(person)) {
            additionalInformation = `${person.role}, ${person.occupation}`;
        }
        console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
    }

    console.log('Admins:');
    persons.filter(isAdmin).forEach(logPerson);

    console.log();

    console.log('Users:');
    persons.filter(isUser).forEach(logPerson);

    console.log();

    console.log('Power users:');
    persons.filter(isPowerUser).forEach(logPerson);

    ```

9. Remove UsersApiResponse and AdminsApiResponse types and use generic type ApiResponse in order to specify API response formats for each of the functions.

	* AdminsApiResponse와 UsersApiResponse가 사용되는 자리에서 똑같이 사용될 수 있는  ApiResponse 타입을 만들어야 합니다. 

	* User, Admin 뿐만 아니라 number 타입까지 처리할 수 있는 타입을 만들어야 하기 때문에 제네릭을 사용해서 문제를 해결합니다. 
    ```ts
    interface User {
        type: 'user';
        name: string;
        age: number;
        occupation: string;
    }

    interface Admin {
        type: 'admin';
        name: string;
        age: number;
        role: string;
    }

    type Person = User | Admin;

    const admins: Admin[] = [
        { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
        { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
    ];

    const users: User[] = [
        { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
        { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
    ];

    export type SuccessResponse<T> = {
        status : 'success';
        data : T
    }

    export type ErrorResponse = {
        status : 'error';
        error : string
    }

    export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;


    export function requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
        callback({
            status: 'success',
            data: admins
        });
    }

    export function requestUsers(callback: (response: ApiResponse<User[]>) => void) {
        callback({
            status: 'success',
            data: users
        });
    }

    export function requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'success',
            data: Date.now()
        });
    }

    export function requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }

    function logPerson(person: Person) {
        console.log(
            ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
        );
    }

    function startTheApp(callback: (error: Error | null) => void) {
        requestAdmins((adminsResponse) => {
            console.log('Admins:');
            if (adminsResponse.status === 'success') {
                adminsResponse.data.forEach(logPerson);
            } else {
                return callback(new Error(adminsResponse.error));
            }

            console.log();

            requestUsers((usersResponse) => {
                console.log('Users:');
                if (usersResponse.status === 'success') {
                    usersResponse.data.forEach(logPerson);
                } else {
                    return callback(new Error(usersResponse.error));
                }

                console.log();

                requestCurrentServerTime((serverTimeResponse) => {
                    console.log('Server time:');
                    if (serverTimeResponse.status === 'success') {
                        console.log(`   ${new Date(serverTimeResponse.data).toLocaleString()}`);
                    } else {
                        return callback(new Error(serverTimeResponse.error));
                    }

                    console.log();

                    requestCoffeeMachineQueueLength((coffeeMachineQueueLengthResponse) => {
                        console.log('Coffee machine queue length:');
                        if (coffeeMachineQueueLengthResponse.status === 'success') {
                            console.log(`   ${coffeeMachineQueueLengthResponse.data}`);
                        } else {
                            return callback(new Error(coffeeMachineQueueLengthResponse.error));
                        }

                        callback(null);
                    });
                });
            });
        });
    }

    startTheApp((e: Error | null) => {
        console.log();
        if (e) {
            console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`)
        } else {
            console.log('Success!');
        }
    });
    ```

10. We don't want to reimplement all the data-requesting functions. Let's decorate the old callback-based functions with the new Promise-compatible result. The final function should return a Promise which would resolve with the final data directly (i.e. users or admins) or would reject with an error (or type Error).

	* 제일 시간이 오래 걸린 문제였습니다. 😂😂😂😂

	* promisify라는 메서드에 필요한 타입과 구현체를 만들어 줘야 합니다. 

	* (await api.requestAdmins()) 이렇게 사용되고 있고, requestAdmins의 값은promisify(oldApi.requestAdmins) 입니다. 때문에 promisify(oldApi.requestAdmins)의 타입은 promise를 리턴하는 함수 타입니다. 
		* (?) => Promise<?>
        ```ts
        export function promisify(arg: unknown): ()=> Promise {
            return () => new Promise((resolve, reject)=>{
                
            });
        }
        ```
	* (await api.requestAdmins()) 와 비슷한 형태로 사용되는 곳을 보면 각각 다른 타입으로 사용되는 것을 알 수 있습니다. 여러 타입을 처리하기 위해서 제네릭을 사용합니다. 
	* 제네릭을 사용하기 위해서 타입을 유추할 수 있는 인수를 받든지 타입 인수를 받아야 합니다. promisify를 사용하는 쪽에서 타입 인수를 받아 문제를 해결합니다.

    ```ts
    export function promisify<T>(arg: unknown): ()=> Promise<T> {
        return () => new Promise((resolve, reject)=>{

        });
    }

    export const api = {
        requestAdmins: promisify<Admin[]>(oldApi.requestAdmins),
        requestUsers: promisify<User[]>(oldApi.requestUsers),
        requestCurrentServerTime: promisify<number>(oldApi.requestCurrentServerTime),
        requestCoffeeMachineQueueLength: promisify<number>(oldApi.requestCoffeeMachineQueueLength)
    };
    ```
        * 이렇게 까지만 해도 통과는 되지만 arg의 unknown 타입이 거슬리기 때문에 이도 고쳐줍니다. oldApi의 메서드는 (ApiResponse<T>) => void 타입의 콜백을 받고, 아무것도 리턴하지 않는 메서드 입니다. 
        * 때문에 promisify의 매개변수의 타입은 (ApiResponse<T> => void) => void 여야 합니다. 
    ```ts
    export type OldRequestType<T> = (callback : (response : ApiResponse<T>) => void)=>void

    export function promisify<T>(arg: OldRequestType<T>): ()=> Promise<T> {
        return () => new Promise((resolve, reject)=>{
            arg((response)=>{
                if('data' in response){
                    resolve(response.data)
                    return 
                }
                reject(response.error)
            })
        });
    }
    ```

    ```ts
    // 전체 코드
    interface User {
        type: 'user';
        name: string;
        age: number;
        occupation: string;
    }

    interface Admin {
        type: 'admin';
        name: string;
        age: number;
        role: string;
    }

    type Person = User | Admin;

    const admins: Admin[] = [
        { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
        { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
    ];

    const users: User[] = [
        { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
        { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
    ];

    export type ApiResponse<T> = (
        {
            status: 'success';
            data: T;
        } |
        {
            status: 'error';
            error: string;
        }
    );


    export type OldRequestType<T> = (callback : (response : ApiResponse<T>) => void)=>void

    export function promisify<T>(arg: OldRequestType<T>): ()=> Promise<T> {
        return () => new Promise((resolve, reject)=>{
            arg((response)=>{
                if('data' in response){
                    resolve(response.data)
                    return 
                }
                reject(response.error)
            })
        });
    }

    const oldApi = {
        requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
            callback({
                status: 'success',
                data: admins
            });
        },
        requestUsers(callback: (response: ApiResponse<User[]>) => void) {
            callback({
                status: 'success',
                data: users
            });
        },
        requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
            callback({
                status: 'success',
                data: Date.now()
            });
        },
        requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
            callback({
                status: 'error',
                error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
            });
        }
    };

    export const api = {
        requestAdmins: promisify<Admin[]>(oldApi.requestAdmins),
        requestUsers: promisify<User[]>(oldApi.requestUsers),
        requestCurrentServerTime: promisify<number>(oldApi.requestCurrentServerTime),
        requestCoffeeMachineQueueLength: promisify<number>(oldApi.requestCoffeeMachineQueueLength)
    };

    function logPerson(person: Person) {
        console.log(
            ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
        );
    }

    async function startTheApp() {
        console.log('Admins:');
        (await api.requestAdmins()).forEach(logPerson);
        console.log();

        console.log('Users:');
        (await api.requestUsers()).forEach(logPerson);
        console.log();

        console.log('Server time:');
        console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
        console.log();

        console.log('Coffee machine queue length:');
        console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
    }

    startTheApp().then(
        () => {
            console.log('Success!');
        },
        (e: Error) => {
            console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`);
        }
    );
    ```





