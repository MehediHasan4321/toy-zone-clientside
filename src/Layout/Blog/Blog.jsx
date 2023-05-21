import React from 'react';
import useTitle from '../../CustomLoader/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='container mx-auto'>
            <div className='my-12'>
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold'>Question-1 : What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p className='text-gray-600 mt-4'>
                        Refresh tokens Or Access Tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.

                    </p>
                    <p className='text-gray-600 mt-4'>
                        We can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. This is also known as the backend for frontend (BFF) proxy
                    </p>
                </div>
                <div className='mt-4'>
                    <h1 className='text-xl font-semibold'>Question-2 : Compare SQL and NoSQL databases?</h1>
                    <p className='text-gray-600 mt-4'>
                        SQL and NoSQL databases are two different types of database management systems that serve different purposes and have distinct characteristics. Here's a comparison between the two:

                    </p>
                    <p className='text-gray-600 mt-4'>
                        SQL: SQL databases use a structured data model called the relational model. Data is organized into tables with predefined schemas, and relationships between tables are defined using foreign keys.
                        NoSQL: NoSQL databases use various data models such as key-value, document, columnar, or graph. These models allow for more flexible and dynamic schema designs, accommodating unstructured and semi-structured data.
                    </p>
                    <p className='text-gray-600 mt-4'>
                        SQL: SQL databases have a rigid schema where the structure and data types of the tables are defined in advance. Changes to the schema require careful planning and can be time-consuming.
                        NoSQL: NoSQL databases typically have a flexible schema, allowing for dynamic changes to the data model without requiring explicit schema modifications. This makes them well-suited for handling evolving and diverse data structures.
                    </p>
                    <p className="text-gray-600 mt-4">
                        NoSQL: NoSQL databases are well-suited for handling large-scale, rapidly changing, and unstructured data. They are commonly used in real-time analytics, content management systems, IoT applications, and scenarios where high scalability and agility are crucial.
                    </p>
                </div>
                <div className="mt-4">
                    <h1 className="text-xl font-semibold">
                        Question-3 : What is express js? What is Nest JS?

                    </h1>
                    <p className="text-gray-600 mt-4">
                        Express.js and Nest.js are both popular web application frameworks used to build server-side applications,Express.js is a lightweight and flexible framework that gives developers full control over the application's structure and logic. On the other hand, Nest.js is an opinionated framework that promotes a structured and modular approach, leveraging TypeScript and borrowing concepts from Angular. Both frameworks have their strengths and are suitable for different types of projects and development preferences.
                    </p>
                </div>
                <div className="mt-4">
                    <h1 className="text-xl font-semibold">
                        Question-4 : What is MongoDB aggregate and how does it work?</h1>
                    <p className="text-gray-600 mt-4">
                        In MongoDB, the aggregate method is used to perform advanced data processing and analysis operations on collections. It allows you to perform various operations like filtering, grouping, sorting, transforming, and analyzing data within the MongoDB database.

                        The aggregate method follows the concept of an aggregation pipeline, which consists of a sequence of stages. Each stage performs a specific data processing operation on the input documents and passes the results to the next stage.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;