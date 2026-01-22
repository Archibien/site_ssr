export const usePhone = () =>
  useState<{ phone: string; local: boolean }>('phone', () => ({
    phone: '01 88 32 99 15',
    local: false,
  }))

export const getPhoneLink = () => {
  const { phone } = usePhone().value
  return `tel:${phone.replace(/\s/g, '')}`
}
export const setPhone = (newPhone: string, local = true) => {
  const phoneState = usePhone()
  phoneState.value.phone = newPhone
  phoneState.value.local = local
}
