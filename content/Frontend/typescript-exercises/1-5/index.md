---
title: 'Typescript Exercises 1-5'
path: blog/Frontend/typescript-exercises-1-5
tags: [Frontend]
cover: './cover.png'
date: 2023-02-17
excerpt: https://typescript-exercises.github.io/ 
---

1. Given the data, define the interface "User" and use it accordingly.
	* 첫 번째 문제라 난이도가 쉽습니다. user.name에서 에러가 발생하는데 이를 없애주면 됩니다.
	* 문제에 나와 있는 것 처럼 User 타입의 구조를 정하고 사용하면 됩니다.

        ```ts
        export interface User {
            name : string;
            age : number;
            occupation : string;
        };

        export const users: User[] = [
            {
                name: 'Max Mustermann',
                age: 25,
                occupation: 'Chimney sweep'
            },
            {
                name: 'Kate Müller',
                age: 23,
                occupation: 'Astronaut'
            }
        ];

        export function logPerson(user: User) {
            console.log(` - ${user.name}, ${user.age}`);
        }

        console.log('Users:');
        users.forEach(logPerson);
        ```

2. Type "Person" is missing, please define it and use it in persons array and logPerson function in order to fix all the TS errors.
	* User 인터페이스 외에 Admin 인터페이스가 추가되었습니다. persons 배열은 User 타입의 객체와 Admin 타입의 객체를 모두 받을 수 있도록 하는 배열 타입을 설정해 주어야 합니다. 
	* persons는 요소로 User 또는 Admin을 받을 수 있기 때문에 Person의 타입으로 User | Admin 유니언 타입을 설정해 줍니다.
	* 유니언 타입  
		* 값에 허용된 타입을 두 개 이산의 가능한 타입으로 확장한 타입입니다.
		* union으로 묶여 있는 모든 타입의 공통 속성에 대해서만 접근할 수 있습니다.

            ```ts
            interface User {
                name: string;
                age: number;
                occupation: string;
            }

            interface Admin {
                name: string;
                age: number;
                role: string;
            }

            export type Person = User | Admin;

            export const persons: Person[] /* <- Person[] */ = [
                {
                    name: 'Max Mustermann',
                    age: 25,
                    occupation: 'Chimney sweep'
                },
                {
                    name: 'Jane Doe',
                    age: 32,
                    role: 'Administrator'
                },
                {
                    name: 'Kate Müller',
                    age: 23,
                    occupation: 'Astronaut'
                },
                {
                    name: 'Bruce Willis',
                    age: 64,
                    role: 'World saver'
                }
            ];

            export function logPerson(user: Person) {
                console.log(` - ${user.name}, ${user.age}`);
            }

            persons.forEach(logPerson);
            ```


3. Fix type errors in logPerson function. logPerson function should accept both User and Admin and should output relevant information according to the input: occupation for User and role for Admin.
	* logPerson 함수에 있는 에러를 없애야 하는 문제입니다.
	* logPerson 함수는 Admin | User 타입을 받기 때문에  person 객체는 Admin과 Union의 공통 속성에만 접근할 수 있습니다.  그렇기 때문에 구제적인 타입으로 좁혀줘야 합니다. 
	* type narrowing 
		* 값에 허용된 타입이 하나 이상의 타입이 되지 않도록 하는 것 
		* 이전에 유추된 타입보다 더 구체적인 타입임을 코드를 통해 유추합니다.
		* 타입 가드 : 타입을 좁히는데 사용할 수 있는 논리적 검사
		* narrowing 방법 
			* 값 할당 : 구체적인 값을 할당할 시 할당한 값으로 타입이 좁혀집니다.
			* 조건 검사 
			* typeof 연산자 사용
			* in : 특정 속성이 타입에 있는지 확인하여 타입을 좁힙니다.
			* 타입 서술어 (= 사용자 정의 타입 가드)

            ```ts
            interface User {
                name: string;
                age: number;
                occupation: string;
            }

            interface Admin {
                name: string;
                age: number;
                role: string;
            }

            export type Person = User | Admin;

            export const persons: Person[] = [
                {
                    name: 'Max Mustermann',
                    age: 25,
                    occupation: 'Chimney sweep'
                },
                {
                    name: 'Jane Doe',
                    age: 32,
                    role: 'Administrator'
                },
                {
                    name: 'Kate Müller',
                    age: 23,
                    occupation: 'Astronaut'
                },
                {
                    name: 'Bruce Willis',
                    age: 64,
                    role: 'World saver'
                }
            ];

            export function logPerson(person: Person) {
                let additionalInformation: string;
                if ('role' in person) {
                    additionalInformation = person.role;
                } else {
                    additionalInformation = person.occupation;
                }
                console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
            }

            persons.forEach(logPerson);
            ```


4.  Figure out how to help TypeScript understand types in this situation and apply necessary fixes.
	* 사용자 정의 타입 가드를 사용해 타입을 좁혀 에러를 없애야 합니다.
	* 타입 서술어 : type predicate (= 사용자 정의 타입 가드)
	* 인수가 특정 타입인지 여부를 나타내기 위해 boolean 값을 반환하는 함수를 위한 구문입니다. 
	* 타입 서술어는 단순히 boolean 값을 반환하는 것이 아니라 인수가 더 구체적인 타입임을 나타냅니다. 

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
        { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
    ];

    export function isAdmin(person: Person): person is Admin {
        return person.type === 'admin';
    }

    export function isUser(person: Person): person is User {
        return person.type === 'user';
    }

    export function logPerson(person: Person) {
        let additionalInformation: string = '';
        if (isAdmin(person)) {
            additionalInformation = person.role;
        }
        if (isUser(person)) {
            additionalInformation = person.occupation;
        }
        console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
    }

    console.log('Admins:');
    persons.filter(isAdmin).forEach(logPerson);

    console.log();

    console.log('Users:');
    persons.filter(isUser).forEach(logPerson);
    ```

5. Without duplicating type structures, modify filterUsers function definition so that we can pass only those criteria which are needed, and not the whole User information as it is required now according to typing.
	* User 타입의 일부 속성을 통해서 Person 배열을 필터링 할 수 있도록 함수를 고쳐야 합니다. 
	* User 타입 내부에 있는 모든 속성을 모두 nullable 하게 만들어 어떤 속성만 사용해도 함수가 정상적으로 동작하도록 만들어야 합니다. 
	* 모든 속성을 선택적으로 만들기 위해 Partial<T> 유틸리티 타입을 사용합니다. 
	* 추가로 type속성은 필터링할 수 있는 속성에서 제외해야 하기 때문에 Omit<T, K> 유틸리티 타입을 사용합니다. Omit<T, K> 타입은 T를 구성한 속성에서 K 속성을 제거한 타입을 구성합니다. 
    
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
        {
            type: 'admin',
            name: 'Jane Doe',
            age: 32,
            role: 'Administrator'
        },
        {
            type: 'user',
            name: 'Kate Müller',
            age: 23,
            occupation: 'Astronaut'
        },
        {
            type: 'admin',
            name: 'Bruce Willis',
            age: 64,
            role: 'World saver'
        },
        {
            type: 'user',
            name: 'Wilson',
            age: 23,
            occupation: 'Ball'
        },
        {
            type: 'admin',
            name: 'Agent Smith',
            age: 23,
            role: 'Administrator'
        }
    ];

    export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
    export const isUser = (person: Person): person is User => person.type === 'user';

    export function logPerson(person: Person) {
        let additionalInformation = '';
        if (isAdmin(person)) {
            additionalInformation = person.role;
        }
        if (isUser(person)) {
            additionalInformation = person.occupation;
        }
        console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
    }

    export function filterUsers(persons: Person[], criteria: Partial<Omit<User, 'type'>>): User[] {
        return persons.filter(isUser).filter((user) => {
            const criteriaKeys = Object.keys(criteria) as (keyof Partial<Omit<User, 'type'>>)[];
            return criteriaKeys.every((fieldName) => {
                return user[fieldName] === criteria[fieldName];
            });
        });
    }

    console.log('Users of age 23:');

    filterUsers(
        persons,
        {
            age: 23
        }
    ).forEach(logPerson);
    ```
