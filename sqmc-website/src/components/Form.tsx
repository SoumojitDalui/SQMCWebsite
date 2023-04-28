import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";

import tagOptions from "@/content/certificateTags.json"

interface MyComponentProps {
    service_type: string;
}

export const FormOnly: React.FC<MyComponentProps> = ({ service_type }) => {
    const [stageSubmission, setStageSubmission] = useState(false);

    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        phoneno: "",
        orgname: "",
        selectedtags: [],
        numemp: '',
        additionalComments: "",
        // deadline: "",
        // isPriority: false,
        // image: "",
    });

    const validationSchema = Yup.object().shape({
        name: Yup
            .string()
            .required('Full Name is required'),
        email: Yup
            .string()
            .email()
            .required('Email is required'),
        phoneno: Yup
            .string()
            .matches(/^\d{10}$/, 'Phone number must be 10 digits')
            .required('Phone number is required'),
        orgname: Yup
            .string()
            .required('Organization Name is required'),
        selectedtags: Yup
            .array()
            .min(1, 'Atleast one certificate is required')
            .required('Tags is required'),
        numemp: Yup
            .number()
            .min(1, 'Atleast one employee is required')
            .required('Number of employees is required'),
        additionalComments: Yup.string(),
        // deadline: Yup
        //     .string()
        //     .required('Date is required'),
        // isPriority: Yup.bool(),
        // image: Yup
        //     .mixed()
        //     .test('fileType', 'Unsupported File Type', value => {
        //         if (value===undefined) return true;
        //         if (!value) return false;
        //         const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        //         return allowedTypes.includes(value.type);
        //     })
        //     .test('fileSize', 'File size is too large', value => {
        //         if (value===undefined) return true;
        //         if (!value) return false;
        //         return value.size <= (1024 * 1024);
        //     }),
    });

    const handleSubmit = async (values: object) => {
        // try {
        //     await axios.post("/api/form", { ...values, service: service_type });
        //     console.log("Form submitted successfully.");
        // } catch (error) {
        //     console.error(error);
        // }
        console.log(values)
    };

    return (
        <>
            <div className="hero max-w-screen-2xl mx-auto bg-gradient-to-b from-slate-900 to-white bg-opacity-10 rounded-xl">
                <div className="hero-overlay rounded-xl"></div>
                <div className="flex flex-col w-full">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold my-10 mx-10 text-center">Get a rough quote for the cost of {service_type} <strong className="text-[#f7d65a] text-3xl md:text-4xl lg:text-5xl">TODAY!</strong>, fill out the form below with your details and one of our experts will get in touch with you shortly.</h1>
                    <div className="card w-full shadow-2xl bg-base-100 rounded-none">
                        <div className="card-body">
                            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                                {(props) => (
                                    <Form className="">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div className="form-control">
                                                <label className="label" htmlFor="name">
                                                    <span className="label-text">Full Name</span>
                                                </label>
                                                <Field type="text" placeholder="Full Name" className={props.errors.name && props.touched.name ? "input input-error" : "input input-bordered"} id="name" name="name" />
                                                {props.errors.name && props.touched.name ? <div className="ml-1 text-sm text-red-500">{props.errors.name}</div> : null}
                                            </div>
                                            <div className="form-control">
                                                <label className="label" htmlFor="email">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <Field type="email" placeholder="Email" className={props.errors.email && props.touched.email ? "input input-error" : "input input-bordered"} id="email" name="email" />
                                                {props.errors.email && props.touched.email ? <div className="ml-1 text-sm text-red-500">{props.errors.email}</div> : null}
                                            </div>
                                            <div className="form-control">
                                                <label className="label" htmlFor="phoneno">
                                                    <span className="label-text">Phone Number</span>
                                                </label>
                                                <Field type="tel" placeholder="Example: 1234567890" className={props.errors.phoneno && props.touched.phoneno ? "input input-error" : "input input-bordered"} id="phoneno" name="phoneno" />
                                                {props.errors.phoneno && props.touched.phoneno ? <div className="ml-1 text-sm text-red-500">{props.errors.phoneno}</div> : null}
                                            </div>
                                            <div className="form-control">
                                                <label className="label" htmlFor="orgname">
                                                    <span className="label-text">Organisation Name</span>
                                                </label>
                                                <Field type="text" placeholder="Organisation Name" className={props.errors.orgname && props.touched.orgname ? "input input-error" : "input input-bordered"} id="orgname" name="orgname" />
                                                {props.errors.orgname && props.touched.orgname ? <div className="ml-1 text-sm text-red-500">{props.errors.orgname}</div> : null}
                                            </div>
                                            <div className="form-control">
                                                <label className="label" htmlFor="selectedtags">
                                                    <span className="label-text">Type of Certification</span>
                                                </label>
                                                {props.errors.selectedtags && props.touched.selectedtags ?
                                                    <>
                                                        <Select
                                                            id="selectedtags"
                                                            instanceId="selectedtags"
                                                            isMulti
                                                            options={tagOptions.map((tag) => ({
                                                                value: tag.key,
                                                                label: tag.key,
                                                                ...tag
                                                            }))}
                                                            styles={{
                                                                control: (state) => ({
                                                                    display: 'flex',
                                                                    borderColor: state.isFocused || state.isSelected ? 'red' : 'red',
                                                                    borderWidth: 1,
                                                                    borderRadius: 8,
                                                                    minHeight: '3em',
                                                                    color: state.isFocused || state.isSelected ? 'black' : 'black',
                                                                }),
                                                            }}
                                                            placeholder="Select certificate(s)"
                                                            onChange={(tags) => props.setFieldValue('selectedtags', tags.map(tag => tag.value))}
                                                        />
                                                        <div className="ml-1 text-sm text-red-500">{props.errors.selectedtags}</div>
                                                    </> : <Select
                                                        id="selectedtags"
                                                        instanceId="selectedtags"
                                                        isMulti
                                                        options={tagOptions.map((tag) => ({
                                                            value: tag.key,
                                                            label: tag.key,
                                                            ...tag,
                                                        }))}
                                                        styles={{
                                                            control: (state) => ({
                                                                display: 'flex',
                                                                borderColor: state.isFocused || state.isSelected ? 'black' : 'light-grey',
                                                                borderWidth: 1,
                                                                borderRadius: 8,
                                                                minHeight: '3em',
                                                                color: state.isFocused || state.isSelected ? 'black' : 'light-grey',
                                                            }),
                                                        }}
                                                        placeholder="Select certificate(s)"
                                                        onChange={(tags) => props.setFieldValue('selectedtags', tags.map(tag => tag.value))}
                                                    />
                                                }
                                            </div>
                                            <div className="form-control">
                                                <label className="label" htmlFor="numemp">
                                                    <span className="label-text">Number of Employees</span>
                                                </label>
                                                <Field type="number" placeholder="Number of Employees" className={props.errors.numemp && props.touched.numemp ? "input input-error" : "input input-bordered"} id="numemp" name="numemp" />
                                                {props.errors.numemp && props.touched.numemp ? <div className="ml-1 text-sm text-red-500">{props.errors.numemp}</div> : null}
                                            </div>
                                        </div>
                                        <div className="form-control mt-4">
                                            <label className="label" htmlFor="additionalComments">
                                                <span className="label-text">Additional Comments/Questions</span>
                                            </label>
                                            <Field as="textarea" className="textarea textarea-bordered" placeholder="Additional Comments/Questions" id="additionalComments" name="additionalComments" />
                                        </div>
                                        <div className="form-control mt-8">
                                            <button type="submit" className={
                                                props.errors.numemp && props.touched.numemp ||
                                                    props.errors.orgname && props.touched.orgname ||
                                                    props.errors.phoneno && props.touched.phoneno ||
                                                    props.errors.email && props.touched.email ||
                                                    props.errors.name && props.touched.name ||
                                                    props.errors.selectedtags && props.touched.selectedtags ?
                                                    "btn btn-disabled" : "btn btn-primary"
                                            }>Submit</button>
                                        </div>
                                        {/* <div className="grid grid-cols-11 pb-1">
                            <label className="col-start-6 ml-auto mr-auto" htmlFor="isPriority">
                                <Field className="form-checkbox mr-2" type="checkbox" id="isPriority" name="isPriority" />
                                Priority
                            </label>
                        </div> */}
                                        {/* <div className="grid grid-cols-11 mt-2">
                            <div className="grid col-start-6 gap-2">
                                <label className="row-span-1 p-2 border-2 border-black rounded-xl cursor-pointer text-center" htmlFor="image">
                                    Add Image
                                    <input id="image" name="image" type="file" onChange={(event) => { props.setFieldValue("image", event.currentTarget.files[0]); }} hidden />
                                </label>
                                {props.values.image ? <img src={URL.createObjectURL(props.values.image)} className="row-span-1 ml-auto mr-auto" height="50px" width="50px" alt="Selected Preview" /> : null}
                                {props.touched.deadline && props.errors.image ? <div className="text-red-500">{props.errors.image}</div> : null}
                            </div>
                        </div> */}
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
