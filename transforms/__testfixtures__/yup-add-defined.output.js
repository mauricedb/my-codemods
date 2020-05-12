import * as yup from "yup";

const personSchema = yup.object({
  firstName: yup.string().defined(),
  lastName: yup.string().defined().nullable(),
  nickName: yup.string().optional(),
  address: yup.object().defined().shape({
    city: yup.string().defined()
  }),
  gender: yup.mixed().defined().oneOf(["male", "female", "other"]),
  email: yup.string().nullable().required().email(),
  birthDate: yup.date().nullable().notRequired().min(new Date(1900, 0, 1)),
}).defined();
