export const PrivacyBox = () => {
  return (
    <>
      <div className="col-span-6">
        <label htmlFor="MarketingAccept" className="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            className="h-5 w-5 rounded-md border-gray-200 bg-gray-100 shadow-md"
          />

          <span className="text-sm text-gray-700">
            Eu quero ficar atualizado sobre tudo o que está acontecendo aqui,
            mesmo que seja apenas para reclamar dos e-mails.
          </span>
        </label>
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our
          <a href="#" className="text-gray-700 underline">
            terms and conditions
          </a>
          and
          <a href="#" className="text-gray-700 underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </>
  );
};
