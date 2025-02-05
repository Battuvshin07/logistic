const mn_MN = {
  login: {
    title: "Нэвтрэх",
    email: "И-мэйл",
    password: "Нууц үг",
    submit: "Нэвтрэх",
    validate: {
      required: {
        email: "И-мэйлээ бичнэ үү",
        password: "Нууц үгээ бичнэ үү",
      },
      email: "И-мэйл биш байна",
    },
  },
  signup: {
    title: "Бүртгүүлэх",
    email: "И-мэйл",
    fullName: "Овог нэр",
    phoneNumber: "Утасны дугаар",
    password: "Нууц үг",
    submit: "Бүртгүүлэх",
    validate: {
      required: {
        email: "И-мэйлээ бичнэ үү",
        fullName: "Овог нэрээ бичнэ үү",
        password: "Нууц үгээ бичнэ үү",
      },
      minimum: {
        fullName: "Овог нэр хамгийн багадаа 4 тэмдэгт агуулсан байна",
        password: "Нууц үг хамгийн багадаа 8 тэмдэгт агуулсан байна",
      },
      email: "И-мэйл буруу байна",
      password: "Нууц үг дор хаяж нэг том үсэг, жижиг үсэг, тоо агуулсан байна",
      phoneNumber: "Утасны дугаар буруу байна",
    },
  },
};
export default mn_MN;
