import * as yup from "yup";

const personSchema = yup.object({
  firstName: yup.string(),
  lastName: yup.string().nullable(),
  nickName: yup.string().optional(),
  address: yup.object().shape({
    city: yup.string()
  }),
  gender: yup.mixed().oneOf(["male", "female", "other"]),
  email: yup.string().nullable().required().email(),
  birthDate: yup.date().nullable().notRequired().min(new Date(1900, 0, 1)),
});
