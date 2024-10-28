import React, { useRef, useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading || !form.current) return;

    setLoading(true);
    setSuccess(false);
    setError(null);

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);

  return (
    <form ref={form} onSubmit={sendEmail} className='flex gap-[24px]'>
      <input
        id='email'
        type="email"
        name="user_email"
        placeholder='YOUR E-MAIL ADDRESS'
        className='w-[330px] bg-[#7BC7D080] rounded-[34px] placeholder-opacity-70'
        required
      />
      <input
        type="submit"
        value={loading ? "იგზავნება..." : "გამოწერა"}
        className='flex w-[118px] text-white bg-[#3EDAD0] cursor-pointer px-[24px] py-[12px] rounded-[34px]'
        disabled={loading}
      />
      {success && <div className="text-green-500">Email sent successfully!</div>}
      {error && <div className="text-red-500">Failed to send</div>}
    </form>
  );
};
