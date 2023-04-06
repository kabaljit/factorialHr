import React, { useCallback } from "react";

import { H1, P } from "@designSystem/elements/Typography";

import { useModuleTranslations } from "./LoginScreen.i18n";
import { Container } from "./LoginScreen.styles";
import SuperScreen from "@designSystem/layout/SuperScreen";
import Box from "@designSystem/layout/Box";
import { Button } from "@designSystem/buttons/Button";
import SecondaryButton from "@designSystem/buttons/SecondaryButton";
import { useSignIn } from "./lib/useSignIn";
import { FormikHelpers, useFormik } from "formik";
import TextInput from "@designSystem/inputs/TextInput";
import * as Yup from "yup";

interface LoginValues {
  email: string;
  password: string;
}

export function LoginScreen() {
  const { t } = useModuleTranslations();
  const signInEmailAndPassword = useSignIn();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(t("input.email.error.required") as string)
      .email(t("input.email.error.invalid") as string),
    password: Yup.string()
      .required(t("input.password.error.required") as string)
      .matches(/[a-z]/, t("input.password.error.lowercase") as string)
      .matches(/[A-Z]/, t("input.password.error.uppercase") as string)
      .min(8, t("input.password.error.length") as string),
  });

  const onSubmit = useCallback(
    (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {
      setSubmitting(true);

      signInEmailAndPassword(values.email, values.password);
      setSubmitting(true);
    },
    [signInEmailAndPassword]
  );

  const {
    values,
    setFieldValue,
    errors,
    touched,
    setFieldTouched,
    handleSubmit,
    isSubmitting,
  } = useFormik<LoginValues>({
    initialValues: { email: "demo@gmail.com", password: "P@55word" },
    onSubmit,
    validationSchema,
  });

  return (
    <SuperScreen>
      <Box alignItems="center">
        <H1 color="secondary" weight="bold">
          {t("title")}
        </H1>
      </Box>

      <P color="secondary">{t("welcome")}</P>

      <Box marginTop={14}>
        <TextInput
          placeholder={t("input.email.placeholder")}
          value={values.email}
          onChangeText={(value: string) => setFieldValue("email", value)}
          error={errors.email && touched.email}
          errorMessage={errors.email}
          onBlur={() => setFieldTouched("email")}
        />
      </Box>

      <Box marginTop={14}>
        <TextInput
          placeholder={t("input.password.placeholder")}
          value={values.password}
          onChangeText={(value: string) => setFieldValue("password", value)}
          error={errors.password && touched.password}
          errorMessage={errors.password}
          onBlur={() => setFieldTouched("password")}
          password
        />
      </Box>

      <Box marginTop={14}>
        <SecondaryButton
          name="login-with-google"
          onPress={() => handleSubmit()}
          title=""
          busy={isSubmitting}
        >
          <P> {t("button.login")}</P>
        </SecondaryButton>
      </Box>
    </SuperScreen>
  );
}
